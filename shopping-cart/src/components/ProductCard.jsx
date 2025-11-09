import { useCart } from "../context/CartContext"

export default function ProductCard({ product }){
    const { addToCart } = useCart()

    return (
        <div className="card shadow-sm h-100 text-center">
            <div className="card-body">
                <h5 className="card-title">{product.name}</h5>
                <p className="card-text">${product.price}</p>
                <button 
                onClick={() => addToCart(product)}
                className="btn btn-primary">Add to Cart</button>
            </div>
        </div>
    )
}