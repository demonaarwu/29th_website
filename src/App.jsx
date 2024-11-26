import Home from "./Home/Home.jsx";
import Team from "./Team/Team.jsx";
import Courses from "./Courses/Courses.jsx"
import Events from "./Events/Events.jsx";
import Museum from "./Museum/Museum.jsx";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import React from "react";

const router = createBrowserRouter(
    [
        {
            path: "/",
            element: <Home />,
        },
	{
	    path: "/team",
	    element: <Team />,
	},
	{
	    path: "/courses",
	    element: <Courses />,
	},
	{
	    path: "/events",
	    element: <Events />,
	},
	{
	    path: "/museum",
	    element: <Museum />,
	},
    ],
    { basename: "/29th_website/" },
);

function App() {
    return (
        <React.StrictMode>
            <RouterProvider router={router} />
        </React.StrictMode>
    );
}

export default App;
