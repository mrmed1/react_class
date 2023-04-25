import TaskPage from "../../pages/taskpage/TaskPage";
import {Outlet, Route, Routes} from "react-router-dom";
import TaskDetails from "../../pages/taskDetails/TaskDetails";


function TeacherRoutes() {

    return (
        <>
            <Outlet />
        </>
    )
}

export default TeacherRoutes;