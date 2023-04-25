import {useParams} from "react-router-dom";
import {useEffect, useState} from "react";
import {fetchTaskById} from "../../services/tasks2.service";

function TaskDetails() {
    const {id} = useParams();
    const [task, setTask] = useState({})
    useEffect(() => {
        const fetchData = async () => {
            try {
                const result = await fetchTaskById(id)
                setTask(result)
            } catch (e) {}
        }
        fetchData()
    }, [id])

    return (
        <div className="task-details">
            <h1>Task details</h1>
            <div>
                <b>Title:</b> {task.title}
            </div>
        </div>
    )
}

export default TaskDetails