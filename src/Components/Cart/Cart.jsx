import { useEffect, useState } from "react";
import './Cart.css'
import CartCard from "./CartCard/CartCard";
import { MAX_ITEM_QUANTITY } from "../../values";

export default function Cart({itemList, setItemList})
{
    const cartIdxs = itemList.reduce((acc, item, index) => {
        if (item.quantity > 0) {
            acc.push(index);
        }
        return acc
    }, [])
    const cartItems = cartIdxs.map(index => itemList[index]);

    const [totalCost, setTotalCost] = useState(0);
    var itemCount = 0;

    useEffect(() => {
        setTotalCost(cartItems.reduce((sum, item) => sum + (item.cost * item.quantity), 0));
    }, [itemList])

    const decrementCount = (itemId) => {
        setItemList(itemList.map((item) => {
        if (item.id === itemId && item.quantity > 1) {
            return {...item, quantity: item.quantity - 1}
        }
        return item;
        }))
    }
    const incrementCount = (itemId) => {
        setItemList(itemList.map((item) => {
            if (item.id === itemId) {
                //Do not increment if already at MAX
                if (item.quantity >= MAX_ITEM_QUANTITY)
                {
                    return item;
                }
                else
                {
                    return {...item, quantity: item.quantity + 1}
                }
            }
            return item;
        }))
    }

    const removeItem = (itemId) => {
        setItemList(itemList.map((item) => {
        if (item.id === itemId) {
            return {...item, quantity: 0}
        }
        return item;
        }))
    }

    console.log(itemList)
    return (
        <div className="cart-page">
            {cartItems.length !== 0 && <div className="item-summary">
                { cartItems.map((item, i) => (
                    <CartCard key={item.id} item={item} id={item.id} 
                        decrementCount={decrementCount} incrementCount={incrementCount} removeItem={removeItem} 
                    />
                ))}
            </div>}
            <div className="cost-summary">
                {totalCost}
            </div>
        </div>
    )
}