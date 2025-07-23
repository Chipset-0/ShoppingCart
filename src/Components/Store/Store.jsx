import { useEffect, useState } from "react";
import "./Store.css"
import Sidebar from "./Sidebar/Sidebar.jsx";
import ItemList from "./ItemList/ItemList.jsx";

export default function Store({itemList, updateItemList})
{
    const [filters, setFilters] = useState([])
    return (
        <div className="store-container">
            <Sidebar filters={filters} setFilters={setFilters}></Sidebar>
            <div className="item-list-holder">
                <ItemList itemList={itemList} updateItemList={updateItemList} filters={filters}/>
            </div>
        </div>
    )
}