
import { createBrowserRouter } from "react-router-dom";
import Root from "./pages/Root";
import Home from "./pages/Home";
import Task from "./pages/Task";
import TaskDetail from "./pages/TaskDetail";
import AddTask from "./pages/AddTask";
import Login from "./pages/Login";
import Signup from "./pages/Signup";

const router = createBrowserRouter(
    [
        {
            path: "/",
            element: <Root />,
            children: [
                {
                    path: "/",
                    element: <Home />,
                    index: true
                },
                {
                    path: "/task",
                    element: <Task/>,
                    index: true
                },
                {
                    path: "/login",
                    element: <Login/>,
                    index: true
                },
                {
                    path: "/signup",
                    element: <Signup/>,
                    index: true
                },
                {
                    path: "/addtask",
                    element: <AddTask/>,
                    index: true
                },
                {
                    path: "/task/:id",
                    element: <TaskDetail/>,
                    index: true
                },
                {
                    path:"*",
                    element:<p>404 Error - Nothing here...</p>
                }
            ]
        }
    ]
);

export default router