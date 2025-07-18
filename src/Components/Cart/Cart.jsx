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
    const [itemCount, setItemCount] = useState(0);

    useEffect(() => {
        setTotalCost(cartItems.reduce((sum, item) => sum + (item.cost * item.quantity), 0));
        setItemCount(cartItems.reduce((sum, item) => sum += (item.quantity), 0))
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
                <div className="cost-summary-count">
                    <h2>{"Quantity"}</h2>
                    <h2>{itemCount}</h2>
                </div>
                <div className="cost-summary-tax">
                    <h2>{"PST (10%)"}</h2>
                    <h2>₽{totalCost * 0.10}</h2>
                </div>
                <div className="cost-summary-total">
                    <h1>₽{Math.floor(totalCost*1.10)}</h1>
                </div>
            </div>
        </div>
    )
}