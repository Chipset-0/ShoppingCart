import "./CartCard.css"

export default function CartCard({item, setItem, index})
{
    return (
        <div className="cart-card">
            <img src={item.imageUrl} className="image-small" />
            <p>{item.name}</p>
            <p>₽{item.cost}</p>
            <div>
                <p>{item.quantity}</p>
            </div>
            <p>🗑</p>
        </div>
    )
}