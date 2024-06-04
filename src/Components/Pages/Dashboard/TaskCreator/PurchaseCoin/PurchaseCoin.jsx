
import { useState } from 'react';
import PaymentModal from './PaymentModal/PaymentModal';
import useCoin from '../../../../Hooks/useCoin';


const PurchaseCoin = () => {
    const [coinPrice, setCoinPrice] = useState();
    const [coinAmmount, setCoinAmmount] = useState()
    const [coin] = useCoin();

    return (
        <div className="p-8">
            <h2>PurchaseCoin............. {coin}</h2>


            <div className="">

                <div onClick={() => setCoinPrice(1)} className="card  text-green-700 shadow-xl">
                    <div onClick={() => setCoinAmmount(10)} className="card-body">
                        <h2 className="card-title">10 coins = 1 dollar</h2>
                        <button className="btn" onClick={() => document.getElementById('my_modal_2').showModal()}>Buy Now</button>
                    </div>
                </div>

                <div onClick={() => setCoinPrice(9)} className="card  text-green-700 shadow-xl">
                    <div onClick={() => setCoinAmmount(100)} className="card-body">
                        <h2 className="card-title">100 coins = 9 dollar</h2>
                        <button className="btn" onClick={() => document.getElementById('my_modal_2').showModal()}>Buy Now</button>
                    </div>
                </div>

                <div onClick={() => setCoinPrice(19)} className="card  text-green-700 shadow-xl">
                    <div onClick={() => setCoinAmmount(500)} className="card-body">
                        <h2 className="card-title">500 coins = 19 dollar</h2>
                        <button className="btn" onClick={() => document.getElementById('my_modal_2').showModal()}>Buy Now</button>
                    </div>
                </div>


            </div>
            <div>
                <PaymentModal
                    coinPrice={coinPrice}
                    coinAmmount={coinAmmount}
                ></PaymentModal>
            </div>
        </div>
    );
};

export default PurchaseCoin;