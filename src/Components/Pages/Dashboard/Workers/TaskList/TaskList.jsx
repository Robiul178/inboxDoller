
import useTasks from "../../../../Hooks/useTasks";
import TaskCard from "./TaskCard/TaskCard";

const TaskList = () => {
    const [tasks] = useTasks();
    console.log(tasks)

    return (
        <div className="p-6">
            <h2 className="p-6 shadow-custom-blue text-xl font-bold  my-4">Total Task Avaliable: {tasks?.length}</h2>

            <div className="grid lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 gap-4">
                {
                    tasks?.map(task => <TaskCard
                        key={task._id}
                        task={task}
                    ></TaskCard>)
                }
            </div>
        </div>
    );
};

export default TaskList;