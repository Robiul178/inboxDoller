import { useNavigate } from "react-router-dom";


const PurchaseCoin = () => {
    const navigate = useNavigate()
    const data = [
        { coin: 10, doller: 1 },
        { coin: 100, doller: 9 },
        { coin: 500, doller: 19 },
        { coin: 1000, doller: 39 },
    ];

    const handleBuyCoin = (coin) => {
        navigate(`/dashboard/payment/${coin}`);
    }

    return (
        <div >
            <div className="text-sm breadcrumbs">
                <ul>
                    <li><a>Task Creator</a></li>
                    <li>Purchase Coin</li>
                </ul>
            </div>
            <div>
                {
                    data.map(d => <>
                        <div className="card-body">
                            <h2 className="card-title">{d.coin} coins = ${d.doller} dollar</h2>
                            <button
                                onClick={() => handleBuyCoin(d.coin)}
                                className="btn rounded-none border btn-outline">Buy Now</button>
                        </div>
                    </>)
                }
            </div>
        </div>
    );
};

export default PurchaseCoin;