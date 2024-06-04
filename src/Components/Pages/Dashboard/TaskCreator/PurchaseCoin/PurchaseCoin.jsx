
import { useState } from 'react';
import PaymentModal from './PaymentModal/PaymentModal';


const PurchaseCoin = () => {
    const [coinPrice, setCoinPrice] = useState()

    return (
        <div className="p-8">
            <h2>PurchaseCoin.............</h2>


            <div className="">


                <div onClick={() => setCoinPrice(1000)} className="card  text-green-700 shadow-xl">
                    <div className="card-body">
                        <h2 className="card-title">10 coins = 1 dollar</h2>
                        <button className="btn" onClick={() => document.getElementById('my_modal_2').showModal()}>Buy Now</button>
                    </div>
                </div>



            </div>
            <div>
                <PaymentModal
                    coinPrice={coinPrice}
                ></PaymentModal>
            </div>
        </div>
    );
};

export default PurchaseCoin;