import { useEffect, useState } from "react";
import StoreCard from "./StoreCard";

export default function ItemList({itemList, updateItemList})
{
    const updateItem = (index, item) => {
        const newList = itemList.map((elem, i) => i === index ? item : elem)
        updateItemList(newList)
    }


    return (
        <div>
            <div>
                Test Text
            </div>
            <>
                {itemList.map((item, i) => (
                    <StoreCard key={i} item={item} changeItem={updateItem} />
                ))}
            </>
        </div>
    )
}