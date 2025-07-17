import { useEffect, useState } from "react";
import "./StoreCard.css"
import { MAX_ITEM_QUANTITY } from "../../values";

export default function StoreCard({item, changeItem, index})
{
    const [isEditing, setIsEditing] = useState(false)
    const [inputValue, setInputValue] = useState(item.quantity)

    useEffect(() => {
        setInputValue(item.quantity)
    }, [item.quantity])

    const addItem = () => {
        if (item.quantity >= MAX_ITEM_QUANTITY)
        {
            return
        }
        changeItem(index, {...item, quantity:item.quantity+1})
    }

    const removeItem = () => {
        if (item.quantity <= 0)
        {
            return
        }
        changeItem(index, {...item, quantity:item.quantity-1})
    }

    const onChange = (e) => {

        const value = e.target.value;

        if (value === '') {
            setInputValue('')
            return;
        }

        if (/^\d+$/.test(value) && value.length <= 4) {
            const numValue = parseInt(value);
            if (numValue <= MAX_ITEM_QUANTITY) {
                setInputValue(value);
            }
        }
    }

    const handleSubmit = () => {

        const value = parseInt(inputValue) || 0;

        console.log(value)
        if (value < 0)
        {
            return
        }
        
        if (value > MAX_ITEM_QUANTITY) {
            if (item.quantity !== MAX_ITEM_QUANTITY) {
                changeItem(index, {...item, quantity: MAX_ITEM_QUANTITY})
            }
        } else if (value !== item.quantity) {
            changeItem(index, {...item, quantity: value})
        }
    }

    const handleFocus = () => {
        setIsEditing(true);
        setInputValue(inputValue);
    };

    const handleKeyDown = (e) => {
        if (e.key === 'Enter')
        {
            handleSubmit(e.target.value)
            setIsEditing(false)
        }
    }

    const handleBlur = (e) => {
        console.log("Blurred")
        handleSubmit(inputValue);
    }

    return (
        <div className="card-container">
            <div className="image-container">
                <img src={item.imageUrl} alt={item.name}></img>
            </div>
            <div className="card">
                <div>{item.name}</div>
                <div>{item.cost}</div>
            </div>
            <div className="card-purchase">
                <button className="button-subtract button-item" onClick={() => removeItem()}>-</button>
                <input 
                    type="text" 
                    inputMode="numeric" 
                    value={isEditing ? inputValue : item.quantity} 
                    onChange={onChange}
                    onKeyDown={handleKeyDown}
                    onFocus={handleFocus}
                    onBlur={handleBlur}
                    placeholder={isEditing ? "" : "0"}
                    maxLength={4}/>
                <button className="button-add button-item" onClick={() => addItem()}>+</button>
            </div>
        </div>
    )
}