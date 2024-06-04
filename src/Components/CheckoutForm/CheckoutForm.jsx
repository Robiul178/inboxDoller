import {
    useStripe,
    useElements,
    CardElement,
} from '@stripe/react-stripe-js';
import { useEffect, useState } from 'react';
import { MdOutlinePayment } from 'react-icons/md';
import useAuth from '../Hooks/useAuth';
import useAxiosSecure from '../Hooks/useAxiosSecure';
import useAxiosPublic from '../Hooks/useAxiosPublic';
import Swal from 'sweetalert2';


const CheckoutForm = ({ coinPrice }) => {
    const stripe = useStripe();
    const elements = useElements();
    const [clientSecret, setClientSecret] = useState("");
    const { user } = useAuth();
    const axiosSecure = useAxiosSecure();
    const axiosPublic = useAxiosPublic();



    useEffect(() => {
        fetch("http://localhost:5000/create-payment-intent", {
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
            if (paymentIntent.id) {
                const paymentInfo = {
                    payment_id: paymentIntent.id,
                    amount: paymentIntent.amount,
                    status: paymentIntent.status,
                    buyer_name: user?.displayName,
                    buyer_email: user?.email,
                }
                axiosSecure.post('/payment', paymentInfo)
                    .then(res => {
                        if (res.data) {
                            Swal.fire('Nice')
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
                <button type="submit" disabled={!stripe || !clientSecret} >
                    <MdOutlinePayment className="text-xl mr-2" /> PAY
                </button>
            </form>
        </div>
    );


}


export default CheckoutForm;