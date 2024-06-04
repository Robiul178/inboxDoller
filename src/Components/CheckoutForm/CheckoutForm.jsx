import {
    useStripe,
    useElements,
    CardElement,
} from '@stripe/react-stripe-js';

import { useEffect, useState } from 'react';
import { MdOutlinePayment } from 'react-icons/md';
import useAuth from '../Hooks/useAuth';
import useAxiosPublic from '../Hooks/useAxiosPublic';
import Swal from 'sweetalert2';
import useAllUsers from '../Hooks/useAllUsers';
import useAxiosSecure from '../Hooks/useAxiosSecure';


const CheckoutForm = ({ coinPrice, coinAmmount }) => {
    const stripe = useStripe();
    const elements = useElements();
    const [clientSecret, setClientSecret] = useState("");
    const { user } = useAuth();
    const axiosPublic = useAxiosPublic();
    const axiosSecure = useAxiosSecure();
    const [serverUsers, refetch] = useAllUsers();


    useEffect(() => {
        fetch("http://localhost:5000/create-payment", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ coinPrice }),
        })
            .then((res) => res.json())
            .then((data) => setClientSecret(data.clientSecret));
    }, [coinPrice]);




    const handleSubmit = async (event) => {
        event.preventDefault();


        if (!elements || !stripe) {
            return;
        }

        const card = elements.getElement(CardElement);
        if (card == null) {
            return;
        }

        const { error, paymentMethod } = await stripe.createPaymentMethod({
            type: 'card',
            card
        })

        if (error) {
            console.log('[error]', error);
        } else {
            console.log('[PaymentMethod]', paymentMethod);
        }

        //confirm payment

        const { paymentIntent, error: confirmError } = await stripe.confirmCardPayment(clientSecret, {
            payment_method: {
                card: card,
                billing_details: {
                    email: user?.email,
                    name: user?.displayName,
                }
            }
        })

        if (confirmError) {
            console.log('confirmError', confirmError)
        } else {
            console.log('paymentIntent', paymentIntent);
            if (paymentIntent.id) {
                const paymentInfo = {
                    payment_id: paymentIntent.id,
                    amount: paymentIntent.amount,
                    status: paymentIntent.status,
                    buyer_name: user?.displayName,
                    buyer_email: user?.email,
                }

                axiosSecure.post('/payment', paymentInfo)
                    .then((res) => {
                        if (res.data.insertedId) {
                            const userEmail = user?.email;
                            const serverUserCoin = serverUsers?.find(u => u.user?.email === userEmail);
                            const userCoin = serverUserCoin.coin;
                            const newCoin = userCoin + coinAmmount;
                            axiosPublic.put(`/user/newCoin/${user?.email}`, { newCoin })
                                .then(res => {
                                    if (res.data.modifiedCount > 0) {
                                        Swal.fire('Done! ')

                                    }
                                })
                        }
                    })

            }

        }
    };

    return (
        <div className='border p-4 rounded-lg bg-white'>
            <form onSubmit={handleSubmit}>
                <CardElement
                    options={{
                        style: {
                            base: {
                                fontSize: '16px',
                                color: '#424770',
                                '::placeholder': {
                                    color: '#aab7c4',
                                },
                            },
                            invalid: {
                                color: '#9e2146',
                            },
                        },
                    }}
                />
                <button type="submit" disabled={!stripe || !clientSecret}
                    className='btn btn-outline'
                >
                    <MdOutlinePayment className="text-xl mr-2 " /> PAY
                </button>
            </form>
        </div>
    );


}


export default CheckoutForm;