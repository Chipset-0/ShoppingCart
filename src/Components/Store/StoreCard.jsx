import { useEffect, useState } from "react";

export default function StoreCard({item, changeItem})
{
    console.log(item)
    return (
        <div className="card-container">
            <div className="image-container">
                <img src={item.imageUrl} alt={item.name}></img>
            </div>
            <div className="card">
                <h3>{item.name}</h3>
                <div>{item.cost}</div>
                <div>{item.price}</div>
            </div>
        </div>
    )
}