import "./task.css"
import {useState} from "react";
import {Link, useNavigate} from "react-router-dom";

function Task({_id,title,duration,deleteTask,updateTask}) {

    const [isVisible,setIsVisible] = useState(false)
    const [updatedTitle,setUpdatedTitle] = useState(title)
    const navigate = useNavigate()
    const toggleVisibility = () =>
    {
        setIsVisible(!isVisible)
    }
    function handleClick() {
        deleteTask(_id)
    }

    function handleClickUpdate() {
        toggleVisibility()
    }

    function handleUpdate() {
        updateTask(_id,updatedTitle)
        toggleVisibility()
    }
    function handleupdatetitle(event) {
        setUpdatedTitle(event.target.value)
    }

    function handleTitle() {
        // traitement acant de se diriger vers une autre page
        if(duration < 60)
        {
            navigate('/task-detail/'+_id)
        }

    }

    //const {title,duration} = props
    return (
        <div className="task"
             style={{
                 backgroundColor: "#00a6ff99"
             }}>

            {!isVisible && (
          <>
              {/*<Link to={'/task-detail/'+_id}>*/}
                  <div className="title" onClick={handleTitle}>
                      {title}
                  </div>
           {/*   </Link>*/}


                  <div>
                      {duration}
                  </div>

                  {/*
            if details don't exist in one object it wont display error instead nothing this error is displayed when the props has an embedded property only like details and level
*/}
                  {/*{props.details && <div className="title">Level {props.details.level}</div>}*/}

                  <div className="actions">
                      <button type="button" onClick={handleClick}><span>Delete</span></button>

                      <button type="button" onClick={handleClickUpdate}><span>Update</span></button>
                  </div>

          </>

            )}



            {isVisible && (

                <>
                    <div ><input type="text" name="task" id="" value={updatedTitle} onChange={handleupdatetitle}  /></div>
                    <button type="button" onClick={handleUpdate}><span>UpdateTask</span></button>
                </>

            )}
        </div>
    )
}

export default Task;