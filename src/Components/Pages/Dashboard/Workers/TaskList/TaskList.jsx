
import useTasks from "../../../../Hooks/useTasks";
import TaskCard from "./TaskCard/TaskCard";

const TaskList = () => {
    const [tasks] = useTasks();

    return (
        <div className="p-6">
            <h2 className="py-6">TaskList........... {tasks?.length}</h2>

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