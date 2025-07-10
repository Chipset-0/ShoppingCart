import { useEffect, useState } from "react";
import StoreCard from "./StoreCard";
import './ItemList.css'

export default function ItemList({itemList, updateItemList, filters})
{
    const updateItem = (index, item) => {
        const newList = itemList.map((elem, i) => i === index ? item : elem)
        updateItemList(newList)
    }

    const filterItem = (item) => {
        if (filters.length == 0 || filters.includes(item.category))
        {
            return true;
        }
        return false;
    }

    return (
        <div>
            <div className="item-list-grid">
                {itemList.map((item, i) => (
                    filterItem(item) && <StoreCard key={i} item={item} changeItem={updateItem} index={i}/>
                ))}
            </div>
        </div>
    )
}