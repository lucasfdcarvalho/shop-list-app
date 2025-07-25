import { createBrowserRouter } from "react-router-dom";
import { ShoopingList } from "../components";

export const routes = createBrowserRouter([
    {
        path: "/",
        element: <ShoopingList/>
    }
])