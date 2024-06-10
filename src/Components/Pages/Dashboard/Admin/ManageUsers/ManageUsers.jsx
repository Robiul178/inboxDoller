
import useAllUsers from "../../../../Hooks/useAllUsers";
import useAxiosPublic from "../../../../Hooks/useAxiosPublic";
import Swal from 'sweetalert2';

const ManageUsers = () => {
    const [serverUsers, refetch] = useAllUsers();
    const axiosPublic = useAxiosPublic();

    const worker = serverUsers?.filter(w => w.user?.userRole?.value === 'worker');

    const handleDelete = (id) => {
        axiosPublic.delete(`/deleteUser/${id}`)
            .then(res => {
                if (res.data.deletedCount > 0) {
                    refetch()
                    Swal.fire('Deleted')
                }
            })
    };

    const handleUserRole = (userEmail, newRole) => {

        axiosPublic.put(`/user/newRole/${userEmail}`, { newRole })
            .then(res => {
                if (res.data.modifiedCount > 0) {
                    Swal.fire('User Role Updated');
                    refetch();
                }
            })
    }


    return (
        <div className="p-8">
            <div className="text-sm breadcrumbs">
                <ul>
                    <li><a>Admin</a></li>
                    <li>Manage Users</li>
                </ul>
            </div>
            <div className="overflow-x-auto mt-8 shadow-md">
                <table className="min-w-full text-xs">
                    <thead className="">
                        <tr className="text-left">
                            <th className="p-3"></th>
                            <th>Name</th>
                            <th>Email</th>
                            <th>Coin</th>
                            <th>Role </th>
                            <th>Photo URL</th>
                            <th>Actions</th>
                        </tr>
                    </thead>
                    <tbody className="mb-8">
                        {worker?.map((task, index) => (
                            <tr key={task._id}
                                className="border-b ">
                                <td className="p-3">
                                    <p>{index + 1}</p>
                                </td>
                                <td className="p-3">
                                    <p>{task.user.name}</p>
                                </td>
                                <td className="p-3">
                                    <p>{task.user.email}</p>
                                </td>
                                <td className="p-3">
                                    {task.coin}
                                </td>
                                <td className="p-3">
                                    {task.user.userRole.value}
                                </td>
                                <td className="p-3">
                                    {task.user.picture.split('.', 2)}
                                </td>
                                <td className="p-3 flex gap-2">
                                    <button className="border p-2 hover:bg-sky-200" onClick={() => handleDelete(task._id)}> Remove</button>
                                    <select className="border p-2" defaultValue='Select User ROle' onChange={(e) => handleUserRole(task.user?.email, e.target.value)}>
                                        <option className="font-semibold" value="" disabled>Update role</option>
                                        <option value="admin">Admin</option>
                                        <option value="taskCreator">Task-Creator</option>
                                        <option value="worker">Worker</option>
                                    </select>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>

            </div>
        </div>
    );
};

export default ManageUsers;