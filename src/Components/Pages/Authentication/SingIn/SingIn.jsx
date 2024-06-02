import { useForm } from "react-hook-form";
import useAuth from "../../../Hooks/useAuth";
import Swal from "sweetalert2";
import { FcGoogle } from "react-icons/fc";
import { Link, useNavigate } from "react-router-dom";
import useAllUsers from "../../../Hooks/useAllUsers";
import useAxiosPublic from "../../../Hooks/useAxiosPublic";

const SingIn = () => {
    const { logInuser, gooogleLogIn } = useAuth();
    const navigate = useNavigate();
    const [serverUsers] = useAllUsers();

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
                    navigate('/dashboard')
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
                const userInfo = {
                    userRole: {
                        value: "worker"
                    },
                    name: res.user?.displayName,
                    email: res.user?.email,
                    picture: res.user?.photoURL
                }

                const exestingUser = serverUsers?.find(u => u.user.email === res.user?.email);

                if (!exestingUser) {
                    useAxiosPublic.post('/users', userInfo)
                        .then(res => {
                            if (res.data.insertedId) {
                                Swal.fire({
                                    title: "Sing Up Successfully?",
                                    text: "Success?",
                                    icon: "success"
                                });
                                reset();
                            }
                        })
                } else {
                    //
                }
                //
                navigate('/dashboard/worker/home');
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

                    <Link to='/singup' className="underline text-blue-800 border p-2 rounded-sm text-center">
                        Please click here for Sing Up
                    </Link>

                    <div className="form-control mt-6">
                        <button type='submit' className="btn btn-outline  btn-success border border-b-4">Sing Up</button>
                    </div>

                </form>
                <div className="flex justify-center items-center ">
                    <button
                        onClick={handleGoogleSingIn}
                        className="w-[640px] btn btn-outline  btn-success border border-b-4"
                    >
                        <FcGoogle />  Google Sing In
                    </button>
                </div>
            </div>
        </div>
    );
};

export default SingIn;