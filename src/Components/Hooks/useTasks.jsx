import { useEffect, useState } from "react";

const useTasks = () => {

    const [tasks, setTasks] = useState();

    useEffect(() => {
        fetch('/public/task.json')
            .then(res => res.json())
            .then(data => setTasks(data))
    }, [])

    return [tasks]

};

export default useTasks;