import { useForm, Controller } from "react-hook-form";
import Select from "react-select"
import useAllUsers from "../../../../Hooks/useAllUsers";
import useAuth from "../../../../Hooks/useAuth";
import { FaCoins } from "react-icons/fa";
import useAxiosSecure from "../../../../Hooks/useAxiosSecure";
import { useState } from "react";
import Swal from 'sweetalert2'


const Withdrawals = () => {
    const { user } = useAuth()
    const [serverUsers] = useAllUsers();
    const [coinToWithdraw, setCoinToWithdraw] = useState();
    const [withdrawAmount, setWithdrawAmount] = useState();


    const axiosSecure = useAxiosSecure();
    const userEmail = user?.email;
    const withdrawUser = serverUsers?.find(u => u.user.email === userEmail);

    //form handle
    const { register, handleSubmit, reset, control, } = useForm(
        {
            defaultValues: {
                paymentMethod: 'Select Role',
            },
        }
    );

    const maxWithdrawalAmount = withdrawUser?.coin / 20;

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
                        Swal.fire("With request successfull")
                    }
                })

            reset()
        }

    };


    return (
        <div className="p-6">
            <div className="flex justify-end">
                <h2 className=" p-4 text-lg font-semibold shadow bg-green-300">
                    <span className="flex">
                        Total Coin : <FaCoins className="text-lg mt-1 mx-2" />  {withdrawUser?.coin}
                    </span>
                </h2>
            </div>

            <div>
                <form
                    onSubmit={handleSubmit(onSubmit)}
                    className="card-body">
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text"> Coin To WithDraw </span>
                        </label>
                        <input type="text" onChange={handleChange} placeholder="Coin To WithDraw " className="input input-bordered w-full" />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Withdraw Amount:</span>
                        </label>
                        <input
                            type="email"
                            placeholder={withdrawAmount}
                            {...register("withdrawAmmount")}
                            className="input input-bordered" readOnly />
                    </div>

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

                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Account Numbe </span>
                        </label>
                        <input type="text" placeholder='Account Numbe' {...register("accountNumbe")} className="input input-bordered" />
                    </div>
                    <div className="form-control mt-6">
                        <button type='submit' className="btn btn-outline  btn-success border border-b-4">Withdraw</button>
                    </div>

                </form>
            </div>
        </div>
    );
};

export default Withdrawals;