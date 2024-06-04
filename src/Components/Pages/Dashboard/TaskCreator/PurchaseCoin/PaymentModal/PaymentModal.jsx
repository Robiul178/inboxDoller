import { loadStripe } from '@stripe/stripe-js';
import { Elements } from '@stripe/react-stripe-js';
import CheckoutForm from '../../../../../CheckoutForm/CheckoutForm';

const stripePromise = loadStripe(import.meta.env.VITE_Publishable_Key);

const PaymentModal = ({ coinPrice, coinAmmount }) => {

    return (
        <div>
            <dialog id="my_modal_2" className="modal">
                <div className="modal-box">
                    <h2>coinPrice{coinPrice}</h2>
                    <h2>coinAmmount{coinAmmount}</h2>
                    <Elements stripe={stripePromise}>
                        <CheckoutForm
                            coinPrice={coinPrice}
                            coinAmmount={coinAmmount}
                        ></CheckoutForm>
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