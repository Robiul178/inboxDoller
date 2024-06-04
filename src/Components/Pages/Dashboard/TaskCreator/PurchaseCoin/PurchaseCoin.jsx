
import { useState } from 'react';
import PaymentModal from './PaymentModal/PaymentModal';
// import useCoin from '../../../../Hooks/useCoin';


const PurchaseCoin = () => {
    const [coinPrice, setCoinPrice] = useState();
    const [coinAmmount, setCoinAmmount] = useState()
    // const [coin] = useCoin();

    return (
        <div className="p-8">
            <div className="my-6">
                <h2 className="text-xl font-bold">Purchase Coin</h2>
            </div>
            <div className=" flex justify-between">

                <div onClick={() => setCoinPrice(1)} className="  text-green-700 border inline-block p-4">
                    <div onClick={() => setCoinAmmount(10)} className="card-body">
                        <h2 className="card-title">10 coins = $1 dollar</h2>
                        <button className="btn rounded-none border btn-outline" onClick={() => document.getElementById('my_modal_2').showModal()}>Buy Now</button>
                    </div>
                </div>

                <div onClick={() => setCoinPrice(9)} className="  text-green-700 border inline-block p-4">
                    <div onClick={() => setCoinAmmount(100)} className="card-body">
                        <h2 className="card-title">100 coins = $9 dollar</h2>
                        <button className="btn rounded-none border btn-outline" onClick={() => document.getElementById('my_modal_2').showModal()}>Buy Now</button>
                    </div>
                </div>

                <div onClick={() => setCoinPrice(19)} className="  text-green-700 border inline-block p-4">
                    <div onClick={() => setCoinAmmount(500)} className="card-body">
                        <h2 className="card-title">500 coins = $19 dollar</h2>
                        <button className="btn rounded-none border btn-outline" onClick={() => document.getElementById('my_modal_2').showModal()}>Buy Now</button>
                    </div>
                </div>
                <div onClick={() => setCoinPrice(39)} className="  text-green-700 border inline-block p-4">
                    <div onClick={() => setCoinAmmount(500)} className="card-body">
                        <h2 className="card-title">1000 coins = $39 dollar</h2>
                        <button className="btn rounded-none border btn-outline" onClick={() => document.getElementById('my_modal_2').showModal()}>Buy Now</button>
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