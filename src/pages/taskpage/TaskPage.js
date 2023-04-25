import TaskForm from "../../components/taskForm/TaskForm";
import Task from "../../components/task/Task";
import TaskList from "../../components/taskList/taskList";
import {useEffect, useState} from "react";
import * as api from "../../services/tasks2.service";

function TaskPage() {
    function sayHello() {
        alert("hello")
    }

    const [isVisible, setIsVisible] = useState(false)
    const [loading, setLoading] = useState(false)
    const [error, setError] = useState(false)
    const toggleVisibility = () => {
        setIsVisible(!isVisible)
    }

    console.log("rendering")
    const steps = ["Enter a title", "click on button"]
    const [tasks, setTasks] = useState([
    ])
    const [searchValue, setSearchValue] = useState("")
/*    useEffect(() => {
      const fetchData = async () => {
        setLoading(true)
        if (searchValue.length === 0) {
          console.log("tasks empty")
          setTasks([])
          setLoading(false)
        } else {
          const result = await api.fetchTasksByFilter(searchValue)
          console.log("tasks form api : " + searchValue)
          setTasks(result)
          setLoading(false)
        }
      }
      console.log("searchValue", searchValue)
      fetchData()
    }, [searchValue])*/

    useEffect(() => {
        async function fetchData() {
            try {
                setLoading(true)
                const result = await api.fetchTasks()
                setTasks(result)
                setLoading(false)
            }
            catch (e) {
                setLoading(false)
                setError(true)
                console.log(e)
            }

        }
        fetchData()

        }, [])


    const addTask = async (title, duration) => {
        try {
            setLoading(true)
            const newTask = await api.addTask({
                title,
            })
            setTasks([...tasks, newTask])
            setLoading(false)
        } catch (e) {
            console.log("error")
        }
    }
    const deleteTask = async (id) => {
        try {
            setLoading(true)
            await api.deleteTask(id)
            const newTasks = tasks.filter((task) => task._id !== id)
            setTasks(newTasks)
            setLoading(false)
        } catch (e) {
            console.log("error")
        }
    }

    const updateTask = async (id, title, duration) => {
        try {
            setLoading(true)
            const newTask = await api.updateTask(id, {
                title,
            })
            const newTasks = tasks.map((task) => (task._id === id ? newTask : task))
            setTasks(newTasks)
            setLoading(false)
        } catch (e) {
            console.log("error")
        }
    }
    // function addTask(title, duration) {
    //     const newTask = {_id: tasks.length + 1 + "", title, duration}
    //     const result = [...tasks, newTask]
    //     setTasks(result)
    // }
    //
    // function deleteTask(id) {
    //     const result = tasks.filter(function (elem) {
    //         return elem._id !== id
    //     })
    //     setTasks(result)
    // }
    //
    // const updateTask =(_id, title) => {
    //     const newTasks = tasks.map((task) =>
    //         task._id === _id ? {...task, title}
    //             : task)
    //     setTasks(newTasks)
    // }


    return (
        //fragment
        <>
            <ol>
                {
                    steps.map(function (elem, index) {
                        return <li key={index}>{elem}</li>
                    })
                }
            </ol>
            <button onClick={() => toggleVisibility()}>Toggle visibility</button>

            <TaskForm sayHello={sayHello} addTask={addTask}/>
            {<input
        type="text"
        name="title"
        value={searchValue}
        onChange={(e) => {
          setSearchValue(e.target.value)
        }}
      /> }
            {/*            {loading ? <h4>Loading...</h4> :
                (
                    <>

            <Task/>
            <Task/>
            <Task/>
                    </>
                )}*/}
            {loading && <div>Loading</div>}
            {error && <div>Something went wrong</div>}
            {!isVisible && (
                <>
                    <TaskList tasks={tasks} deleteTask={deleteTask} updateTask={updateTask}/>
                    {/*    <Task title="Learn HTML" duration={60} details={{level:"1"}} />
                    <Task title="Learn Angular" duration={120} details={{level:"2"}}/>
                    <Task title="Learn React" duration={180} />*/}
                </>
            )}
        </>

    )
}

export default TaskPage;