import { loadStripe } from '@stripe/stripe-js';
import { Elements } from '@stripe/react-stripe-js';
import CheckoutForm from '../../../../../CheckoutForm/CheckoutForm';

const stripePromise = loadStripe(import.meta.env.VITE_Publishable_Key);

const PaymentModal = ({ coinPrice }) => {

    return (
        <div>
            <dialog id="my_modal_2" className="modal">
                <div className="modal-box">
                    <Elements stripe={stripePromise}>
                        <CheckoutForm coinPrice={coinPrice}></CheckoutForm>
                    </Elements>
                </div>
                <form method="dialog" className="modal-backdrop">
                    <button>close</button>
                </form>
            </dialog>
        </div>
    );
};

export default PaymentModal;