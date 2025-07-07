import { useEffect, useState } from "react";

export default function StoreCard({item, changeItem})
{
    return (
        <div class="card-container">
            <div class="image-container">
                <img src={item.imageUrl}></img>
            </div>
            <div class="card">
                <h3>{item.name}</h3>
                <div>{item.cost}</div>
                <div>{item.price}</div>
            </div>
        </div>
    )
}