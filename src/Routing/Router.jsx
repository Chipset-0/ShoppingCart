import { StrictMode } from "react"
import { createRoot } from "react-dom/client"
import {createBrowserRouter, RouterProvider} from "react-router-dom";
import Home from "../Components/Home/Home";
import Store from "../Components/Store/Store";
import Cart from "../Components/Cart/Cart";
import Navbar from "../Components/NavBar/Navbar";
import Footer from "../Components/Footer/Footer";
import './Router.css'

export default function routerFactory({itemList, setItemList})
{
    return createBrowserRouter([
    {
        path: "/",
        element: <>
            <Navbar />
            <Home />
            <Footer />
        </>
    },
    {
        path: "/store",
        element: 
        (
            <div className="store-layout">
                <Navbar />
                <Store itemList={itemList} updateItemList={setItemList} />
                <Footer />
            </div>
        )
    },
    {
        path: "/cart",
        element: 
        (
            <div className="store-layout">
                <Navbar />
                <Cart itemList={itemList} setItemList={setItemList} />
                <Footer />
            </div>
        )
    }
])
}