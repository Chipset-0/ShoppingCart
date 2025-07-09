import { useEffect, useState } from "react";
import StoreCard from "./StoreCard";
import './ItemList.css'

export default function ItemList({itemList, updateItemList})
{
    const updateItem = (index, item) => {
        const newList = itemList.map((elem, i) => i === index ? item : elem)
        updateItemList(newList)
    }


    return (
        <div>
            <div className="item-list-grid">
                {itemList.map((item, i) => (
                    <StoreCard key={i} item={item} changeItem={updateItem} index={i}/>
                ))}
            </div>
        </div>
    )
}