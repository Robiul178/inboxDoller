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
    const axiosPublic = useAxiosPublic();

    console.log(serverUsers, 'serverUsers');

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
                    navigate('/')
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
                axiosPublic.post('/users', userInfo)
                    .then(res => {
                        if (res.data.insertedId) {
                            navigate('/dashboard/worker/home');
                            Swal.fire({
                                title: "Sing Up Successfully?",
                                text: "Success?",
                                icon: "success"
                            });
                        }
                    })

            });

    }


    return (
        <div className="mb-10">
            <div className="text-center">
                <h2 className="text-3xl font-bold font-serif ">Start earning online</h2>
                <p>Welcome to InboxDoller</p>
            </div>

            <div className='w-[700px] mx-auto'>
                <form
                    onSubmit={handleSubmit(onSubmit)}
                    className="card-body">
                    <div className="form-control ">
                        <input type="email" placeholder="Email" name='email' {...register("email")} className="input input-bordered shadow-md" required />
                    </div>

                    <div className="form-control">
                        <input type="password" name='password' placeholder="Password" {...register("password")} className="input input-bordered shadow-md" required />
                        <label className="label">
                            {errors.exampleRequired && <span>This field is required</span>}
                        </label>
                    </div>

                    <Link to='/singup' className="underline text-blue-800 border p-2 rounded-sm text-center shadow-md">
                        Please click here for Sing Up
                    </Link>

                    <div className="form-control mt-6 shadow-md">
                        <button type='submit' className="btn btn-outline  btn-success border border-b-4">Sing Up</button>
                    </div>

                </form>
                <div className="flex justify-center items-center ">
                    <button
                        onClick={handleGoogleSingIn}
                        className="w-[640px] btn btn-outline  btn-success border border-b-4 shadow-md"
                    >
                        <FcGoogle />  Google Sing In
                    </button>
                </div>
            </div>
        </div>
    );
};

export default SingIn;