import { StrictMode } from "react"
import { createRoot } from "react-dom/client"
import {createBrowserRouter, RouterProvider} from "react-router-dom";
import Home from "../Components/Home/Home";
import Store from "../Components/Store/Store";
import Navbar from "../Components/NavBar/Navbar";

export default function routerFactory({itemList, setItemList})
{
    return createBrowserRouter([
    {
        path: "/",
        element: <>
            <Navbar />
            <Home />,
        </>
    },
    {
        path: "store",
        element: 
        <>
            <Navbar />
            <Store itemList={itemList} updateItemList={setItemList}/>,
        </>
    }])
}