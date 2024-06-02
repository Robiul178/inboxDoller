import { useForm, Controller } from "react-hook-form";
import Select from "react-select"
import useAuth from "../../../Hooks/useAuth";
import Swal from "sweetalert2";
import { FcGoogle } from "react-icons/fc";
import { useNavigate } from "react-router-dom";
import useAxiosPublic from "../../../Hooks/useAxiosPublic";
import useAllUsers from "../../../Hooks/useAllUsers";

const SingUp = () => {
    const { singUpUser, updateUserProfile, gooogleLogIn } = useAuth();
    const navigate = useNavigate();
    const axiosPublic = useAxiosPublic();
    const [serverUsers] = useAllUsers();

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
                                .catch(error => console.log(error))
                        })
                        .catch(() => {
                        });
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
                <h2 className="text-3xl font-bold font-serif ">SIng Up</h2>
            </div>

            <div className='w-[700px] mx-auto'>
                <form
                    onSubmit={handleSubmit(onSubmit)}
                    className="card-body">
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Name</span>
                        </label>
                        <input type="text" placeholder="Name" name='name' {...register("name")} className="input input-bordered w-full" required />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Email</span>
                        </label>
                        <input type="email" placeholder="email" name='email' {...register("email")} className="input input-bordered" required />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Profile Picture URL</span>
                        </label>
                        <input type="url" placeholder="URL" name='picture' {...register("picture")} className="input input-bordered" />
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

export default SingUp;