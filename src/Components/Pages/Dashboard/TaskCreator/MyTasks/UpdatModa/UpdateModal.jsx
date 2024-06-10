import { useForm } from "react-hook-form";
import useAuth from "../../../../../Hooks/useAuth";
import useAxiosSecure from "../../../../../Hooks/useAxiosSecure";
import Swal from "sweetalert2";


const UpdateModal = ({ updatetask, refetch }) => {
    const { register, handleSubmit, reset } = useForm();
    const { user } = useAuth();
    const axiosSecure = useAxiosSecure();


    const onSubmit = (data) => {
        const updateInfo = {
            task_title: data.task_title,
            task_details: data.task_details,
            task_quantity: updatetask.task_quantity,
            payable_amount: updatetask.payable_amount,
            completion_date: updatetask.completion_date,
            submission_info: data.submission_info,
            task_image_url: updatetask.task_image_url,
            creator_name: user?.displayName,
            creator_email: user?.email,
        }
        axiosSecure.put(`/task/${updatetask._id}`, updateInfo)
            .then(res => {
                if (res.data.modifiedCount > 0) {
                    reset()
                    refetch()
                    Swal.fire('Update Successfully')
                }
            })

    }

    return (
        <div>
            <div>
                <dialog id="my_modal_2" className="modal">
                    <div className="modal-box">
                        <form
                            onSubmit={handleSubmit(onSubmit)}
                            className="card-body">
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Task Title</span>
                                </label>
                                <input type="text" {...register('task_title')} placeholder="Task title" className="input input-bordered w-full" />
                            </div>

                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Submission Info </span>
                                </label>
                                <input type="text" {...register('submission_info')} placeholder="Submission Info" className="input input-bordered w-full" />
                            </div>

                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Task Details</span>
                                </label>
                                <textarea placeholder="Task Details....." {...register('task_details')} className="textarea textarea-bordered textarea-lg w-full" ></textarea>
                            </div>


                            <div className="form-control mt-6">
                                <button type='submit' className="btn btn-outline  btn-success border border-b-4">Update Task</button>
                            </div>

                        </form>
                    </div>
                    <form method="dialog" className="modal-backdrop">
                        <button>close</button>
                    </form>
                </dialog>
            </div>
        </div>


    );
};

export default UpdateModal;