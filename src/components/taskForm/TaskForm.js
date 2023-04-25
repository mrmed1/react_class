import "./taskform.css"
import {useState, useEffect} from "react";

function TaskForm(props) {
    const addTask = "Add a Task"

    function renderHello() {
        return (<div>
                <h1><p className="h1">Hello</p></h1>
            </div>)
    }

    const [title, setTitle] = useState("Learn ")
    const [duration, setDuration] = useState(60)

    /*    props.sayHello();*/
    function handletitleChange(event) {
        setTitle(event.target.value)
    }

    function handleClick() {
        props.addTask(title, duration)
    }
    useEffect(() => {
        document.title = title

        })
    console.log("extérieur")
    function handleDurationChange(event) {
        setDuration(event.target.value)
    }

    return (<form action="" className="form">
            <input type="text" name="task" id="" value={title} onChange={handletitleChange}/>
            <input type="text" name="Duration" id="" value={duration} onChange={handleDurationChange}/>
            <button type="button" onClick={handleClick}>{addTask}</button>
            {renderHello()}
        </form>)
}

export default TaskForm;