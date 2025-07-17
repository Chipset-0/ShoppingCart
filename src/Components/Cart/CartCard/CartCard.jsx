import "./CartCard.css"

/*
item={item} decrementCount={decrementCount} incrementCount={() => incrementCount} removeItem={() => removeItem} 
                        index={i} 
*/
export default function CartCard({item, id, decrementCount, incrementCount, removeItem})
{
    return (
        <div className="cart-card">
            <img src={item.imageUrl} className="image-small" />
            <p>{item.name}</p>
            <p>₽{item.cost}</p>
            <div className="cart-quantity">
                <button className="button-card-small quantity-button" onClick={() => {decrementCount(id)}}>{"-"}</button>
                <p className="card-quantity-amount">{item.quantity}</p>
                <button className="button-card-small quantity-button" onClick={() => {incrementCount(id)}}>{"+"}</button>
            </div>
            <button className="button-card-small delete-button" onClick={() => {removeItem(id)}}>🗑</button>
        </div>
    )
}