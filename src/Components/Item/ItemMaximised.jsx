import { useEffect, useState } from "react";
import './ItemMaximised.css'
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";
import { MAX_ITEM_QUANTITY } from "../../values";

export default function ItemMaximised({itemList, setItemList})
{
    const { id } = useParams(); 
    const [item, setItem] = useState(null);
    const [isEditing, setIsEditing] = useState(false)
    const [inputValue, setInputValue] = useState('')

    useEffect(() => {
        const foundItem = itemList.find((item) => item.id === parseInt(id));
        setItem({...foundItem} || null);
    }, [itemList, id]);


    useEffect(() => {
        if (item)
        {
            setInputValue(item.quantity)    
        }
    }, [item?.quantity])

    const changeItem = (quantity) => {
        setItemList(itemList.map((listItem) => {
            if (listItem?.id === parseInt(id))
            {
                return {...listItem, quantity: quantity }
            }
            return listItem;
        }))
    }

    const addItem = () => {
        if (item?.quantity >= MAX_ITEM_QUANTITY)
        {
            return
        }
        changeItem(item.quantity+1)
    }

    const removeItem = () => {
        if (item?.quantity <= 0)
        {
            return
        }
        changeItem(item.quantity-1)
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
            if (item?.quantity !== MAX_ITEM_QUANTITY) {
                changeItem(index, {...item, quantity: MAX_ITEM_QUANTITY})
            }
        } else if (value !== item?.quantity) {
            changeItem(index, {...item, quantity: value})
        }

        setIsEditing(false);
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
        handleSubmit(inputValue);
        setIsEditing(false);
    }

    function Capitalise(s)
    {
        var returnVal = ""
        const splitS = s.split('-')
        for (const word of splitS)
        {
        returnVal = returnVal + (word[0].toUpperCase() + word.slice(1).toLowerCase()) + " ";
        }
        return returnVal.slice(0, returnVal.length-1);
    }


    return (
        <div className="item-maximised">
            <Link to="/store" className="back-button">Back</Link>
            <div className="item-container">
                <img src={item?.imageUrl} className="item-image" alt={item?.name}></img>
                <div className="small-horizontal">
                    <p>{item?.name}</p>
                    <p>{item ? Capitalise(item?.category) : "N/A"}</p>
                    <p>{item?.cost}</p>
                </div>
                <div className="item-description">{item?.description}</div>
                <div className="item-quantity">
                    <button className="button-subtract button-item" onClick={() => removeItem()}>-</button>
                    <input
                        type="text"
                        inputMode="numeric"
                        value={isEditing ? inputValue : (item?.quantity?.toString() || '')}
                        onChange={onChange}
                        onKeyDown={handleKeyDown}
                        onFocus={handleFocus}
                        onBlur={handleBlur}
                        placeholder={isEditing ? "" : "0"}
                        maxLength={4}
                    />
                    <button className="button-add button-item" onClick={() => addItem()}>+</button>
                </div>
            </div>
        </div>
    )
}