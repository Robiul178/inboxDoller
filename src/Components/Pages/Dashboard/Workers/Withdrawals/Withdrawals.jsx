import { useForm, Controller } from "react-hook-form";
import Select from "react-select"
import useAuth from "../../../../Hooks/useAuth";
import useAxiosSecure from "../../../../Hooks/useAxiosSecure";
import { useState } from "react";
import Swal from 'sweetalert2'
import useCoin from "../../../../Hooks/useCoin";


const Withdrawals = () => {
    const { user } = useAuth()
    const [coin] = useCoin();
    const [coinToWithdraw, setCoinToWithdraw] = useState();
    const [withdrawAmount, setWithdrawAmount] = useState();


    const axiosSecure = useAxiosSecure();


    //form handle
    const { register, handleSubmit, reset, control, } = useForm(
        {
            defaultValues: {
                paymentMethod: 'Select Role',
            },
        }
    );

    const maxWithdrawalAmount = coin / 20;

    const handleChange = (event) => {
        const coins = event.target.value;
        const withdrawAmmount = coins / 20;
        setCoinToWithdraw(coins);
        setWithdrawAmount(withdrawAmmount);
    };

    const onSubmit = (data, e) => {
        e.preventDefault();

        if (withdrawAmount > maxWithdrawalAmount) {
            Swal.fire('Unsaficent Ballance');
        } else {
            const withdrawDetails = {
                worker_email: user?.email,
                worker_name: user?.displayName,
                withdraw_coin: coinToWithdraw,
                withdraw_amount: withdrawAmount,
                payment_system: data.paymentMethod.value,
                account_number: data.accountNumbe,
                withdraw_time: new Date().toISOString(),
            };

            axiosSecure.post('/withdraw', withdrawDetails)
                .then(res => {
                    if (res.data.insertedId) {
                        Swal.fire("With request sent successfull")
                    }
                })

            reset()
        }

    };


    return (
        <div className="p-6">
            <div>
                <form
                    onSubmit={handleSubmit(onSubmit)}
                    className="card-body">
                    <div className="form-control">
                        <input type="text" onChange={handleChange} placeholder="WithDraw Coin Ammoun " className="input input-bordered w-full shadow-md" />
                    </div>
                    <div className="form-control">
                        <input
                            type="email"
                            placeholder={withdrawAmount}
                            {...register("withdrawAmmount")}
                            className="input input-bordered shadow-md" readOnly />
                    </div>

                    <div className="shadow-md">
                        <Controller
                            name="paymentMethod"
                            control={control}
                            render={({ field }) => (
                                <Select
                                    {...field}
                                    options={[
                                        { value: "BKash", label: "BKash" },
                                        { value: "Rocket", label: "Rocket" },
                                        { value: "Nagad", label: "Nagad" },
                                    ]}
                                />
                            )}
                        />
                    </div>

                    <div className="form-control">
                        <input type="text" placeholder='Account Numbe' {...register("accountNumbe")} className="input input-bordered shadow-md" />
                    </div>
                    <div className="form-control mt-6">
                        <button type='submit' className="btn bg-sky-200 ">Withdraw</button>
                    </div>

                </form>
            </div>
        </div>
    );
};

export default Withdrawals;