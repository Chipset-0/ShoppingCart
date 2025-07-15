import { useEffect, useState } from "react";
import './Cart.css'
import CartCard from "./CartCard/CartCard";

export default function Cart({itemList, setItemList})
{
    const cartItems = itemList.map(item=>item.quantity > 0 ? {...item } : null).filter(item => item !== null)
    var totalCost = 0;

    const calcTotalCost = () => {
        return cartItems.reduce((sum, item) => sum + (item.cost * item.quantity), 0);
    }

    const updateItem = (item, index) => {
        cartItems[index] = item;
        totalCost = calcTotalCost()
    }

    totalCost = calcTotalCost();
    console.log(itemList)
    return (
        <div className="cart-page">
            <div className="item-summary">
                {cartItems.map((item, i) => (
                    <CartCard key={item.id} item={item} changeItem={updateItem} index={i} />
                ))}
            </div>
            <div className="cost-summary">
                
            </div>
        </div>
    )
}