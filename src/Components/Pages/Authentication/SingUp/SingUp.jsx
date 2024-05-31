import { useForm, Controller } from "react-hook-form";
import Select from "react-select"

const SingUp = () => {

    const { register, handleSubmit, reset, control, formState: { errors }, } = useForm(
        {
            defaultValues: {
                userRole: 'Select Role',
            },
        }
    );

    const onSubmit = (data, e) => {
        e.preventDefault();


        console.log(data)
        reset()
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
                        <input type="url" placeholder="URL" name='picture' {...register("picture")} className="input input-bordered" required />
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
                        <button type='submit' className="btn btn-outline border-0 border-b-4 border-blue-700">Sing Up</button>
                    </div>

                </form>
                {/* <div>
                    <button
                        onClick={handleGoogleSingIn}
                    >
                        Google Sing In
                    </button>
                </div> */}
            </div>
        </div>
    );
};

export default SingUp;