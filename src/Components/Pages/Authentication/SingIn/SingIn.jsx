import { useForm } from "react-hook-form";
import useAuth from "../../../Hooks/useAuth";
import Swal from "sweetalert2";
import { FcGoodDecision, FcGoogle } from "react-icons/fc";

const SingIn = () => {

    const { logInuser, gooogleLogIn } = useAuth()

    const { register, handleSubmit, reset, formState: { errors }, } = useForm(
        {
            defaultValues: {
                userRole: 'Select Role',
            },
        }
    );

    const onSubmit = (data, e) => {
        e.preventDefault();

        logInuser(data.email, data.password)
            .then((userCredential) => {
                const user = userCredential.user;
                if (user) {
                    Swal.fire({
                        title: "Log In?",
                        text: "Log in Successfully!",
                        icon: "success"
                    });
                    reset();
                }

            })
            .catch(() => {
            });

    };

    const handleGoogleSingIn = () => {
        gooogleLogIn()
            .then((res) => {
                console.log(res)
            })
    }


    return (
        <div>
            <div className="text-center">
                <h2 className="text-3xl font-bold font-serif ">SIng In</h2>
            </div>

            <div className='w-[700px] mx-auto'>
                <form
                    onSubmit={handleSubmit(onSubmit)}
                    className="card-body">
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Email</span>
                        </label>
                        <input type="email" placeholder="email" name='email' {...register("email")} className="input input-bordered" required />
                    </div>

                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Password</span>
                        </label>
                        <input type="password" name='password' placeholder="password" {...register("password")} className="input input-bordered" required />
                        <label className="label">
                            {errors.exampleRequired && <span>This field is required</span>}
                        </label>
                    </div>

                    <div className="form-control mt-6">
                        <button type='submit' className="btn btn-outline border-0 border-b-4 border-blue-700">Sing Up</button>
                    </div>

                </form>
                <div className="flex justify-center items-center ">
                    <button
                        onClick={handleGoogleSingIn}
                        className="w-[640px] btn btn-outline border-0 border-b-4 border-blue-700 hover:bg-blue-700"
                    >
                        <FcGoogle />  Google Sing In
                    </button>
                </div>
            </div>
        </div>
    );
};

export default SingIn;