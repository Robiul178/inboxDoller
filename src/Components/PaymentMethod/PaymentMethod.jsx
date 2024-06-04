
import { loadStripe } from '@stripe/stripe-js';
import { Elements } from '@stripe/react-stripe-js';
import CheckoutForm from '../CheckoutForm/CheckoutForm';
import { FaQuestion } from "react-icons/fa";

//TODO: add publish key
const stripePromise = loadStripe(import.meta.env.VITE_Publishable_Key);

const PaymentMethod = () => {
    return (
        <div className="py-20 p-8 border rounded-lg mb-6 bg-slate-100">
            <div className='py-6 text-center mb-6'>
                <h2 className="text-4xl font-serif font-semibold">Payment methods</h2>
                <p>Add and manage your payment methods securely here</p>
            </div>
            <div className="flex justify-between">
                <div className='w-full'>
                    <Elements stripe={stripePromise}>
                        <CheckoutForm></CheckoutForm>
                    </Elements>
                </div>

                <div className='w-[1px] h-64 bg-black'></div>
                <div className='text-center'>
                    <FaQuestion className='text-4xl ml-[200px]' />
                    <h2 className="text-4xl font-bold">How can we help?</h2>
                    <p>Contact us with any questions, we're always happy to help!</p>
                </div>
            </div>
        </div>
    );
};

export default PaymentMethod;