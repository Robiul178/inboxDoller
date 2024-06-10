
import { loadStripe } from '@stripe/stripe-js';
import { Elements } from '@stripe/react-stripe-js';
import CheckoutForm from '../CheckoutForm/CheckoutForm';
import { FaQuestion } from "react-icons/fa";
import {
    useParams,
} from "react-router-dom";

//TODO: add publish key
const stripePromise = loadStripe(import.meta.env.VITE_Publishable_Key);

const PaymentMethod = () => {
    const coin = useParams();
    return (
        <div className="py-20 p-8 border rounded-lg mb-6 bg-slate-100">

            <div className="flex justify-between">
                <div className='w-full'>
                    <Elements stripe={stripePromise}>
                        <CheckoutForm coin={coin}></CheckoutForm>
                    </Elements>
                </div>
            </div>
        </div>
    );
};

export default PaymentMethod;