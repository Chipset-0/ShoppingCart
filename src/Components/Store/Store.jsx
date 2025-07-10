import { useEffect, useState } from "react";
import "./Store.css"
import Sidebar from "./Sidebar";
import ItemList from "./ItemList";

export default function Store({itemList, updateItemList})
{
    const [filters, setFilters] = useState([])
    //TODO Move itemlist update functionality to here, add sidebar and itemlist
    return (
        <div className="store-container">
            <Sidebar filters={filters} setFilters={setFilters}></Sidebar>
            <div className="item-list-holder">
                <ItemList itemList={itemList} updateItemList={updateItemList} filters={filters}/>
            </div>
        </div>
    )
}