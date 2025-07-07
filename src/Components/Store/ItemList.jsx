import { useEffect, useState } from "react";
import StoreCard from "./StoreCard";

export default function ItemList({itemList, updateItemList})
{
    const updateItem = (index, item) => {
        const newList = itemList.map((elem, i) => i === index ? item : elem)
        updateItemList(newList)
    }

    console.log(itemList)

    return (
        <div>
            <div>
                Test Text
            </div>
            <>
                {itemList.map((itemList, i) => (
                    <StoreCard key={i} item={itemList[i]} changeItem={updateItem} />
                ))}
            </>
        </div>
    )
}