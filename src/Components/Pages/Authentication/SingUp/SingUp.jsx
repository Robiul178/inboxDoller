import { useForm, Controller } from "react-hook-form";
import Select from "react-select"
import useAuth from "../../../Hooks/useAuth";
import Swal from "sweetalert2";
import { FcGoogle } from "react-icons/fc";
import { useNavigate } from "react-router-dom";
import useAxiosPublic from "../../../Hooks/useAxiosPublic";

const SingUp = () => {
    const { singUpUser, updateUserProfile, gooogleLogIn, setLoading } = useAuth();
    const navigate = useNavigate();
    const axiosPublic = useAxiosPublic();

    const { register, handleSubmit, reset, control, formState: { errors }, } = useForm(
        {
            defaultValues: {
                userRole: 'Select Role',
            },
        }
    );



    const onSubmit = (data, e) => {
        e.preventDefault();

        const role = data.userRole.value;

        axiosPublic.post('/users', data)
            .then(result => {
                if (result.data.insertedId) {
                    singUpUser(data.email, data.password)
                        .then(() => {
                            updateUserProfile(data.name, data.picture)
                                .then(() => {
                                    navigate(`/dashboard/${role}/home`);
                                    Swal.fire({
                                        title: "Sing Up Successfully?",
                                        text: "Success?",
                                        icon: "success"
                                    });
                                    reset();
                                })
                                .catch(() => { })
                        })
                        .catch(() => { });
                }
            })
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
        <div>
            <div className="text-center ">
                <h2 className="text-3xl font-bold font-serif ">Start earning online</h2>
                <p>Welcome to InboxDoller</p>
            </div>

            <div className='w-[700px] mx-auto mb-8'>
                <form
                    onSubmit={handleSubmit(onSubmit)}
                    className="card-body">
                    <div className="form-control">
                        <input type="text" placeholder="Your Name" name='name' {...register("name")} className="input input-bordered w-full shadow-md" required />
                    </div>
                    <div className="form-control">
                        <input type="email" placeholder="Email" name='email' {...register("email")} className="input input-bordered shadow-md" required />
                    </div>
                    <div className="form-control">
                        <input type="url" placeholder="Your Profile Picture URL" name='picture' {...register("picture")} className="input input-bordered shadow-md" />
                    </div>

                    <div className="form-control">
                        <input type="password" name='Password' placeholder="password" {...register("password")} className="input input-bordered shadow-md" required />
                        <label className="label">
                            {errors.exampleRequired && <span>This field is required</span>}
                        </label>
                    </div>

                    <div className="shadow-md">
                        <Controller
                            name="userRole"
                            control={control}
                            render={({ field }) => (
                                <Select
                                    {...field}
                                    options={[
                                        { value: "worker", label: "Worker" },
                                        { value: "taskCreator", label: "Task Creator" },
                                    ]}
                                />
                            )}
                        />
                    </div>


                    <div className="form-control mt-6">
                        <button type='submit' className="btn btn-outline  btn-success border border-b-4">Sing Up</button>
                    </div>

                </form>
                <div className="flex justify-center items-center">
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

export default SingUp;