import { useCart } from "../context/CartContext";

export default function Cart(){
    const {cart, removeFormCart, updateQty, total} = useCart()

    return (
        <div className="container">
        <h2 className="mb-3">Your Cart</h2>

        {cart.length === 0 ? (
            <div className="alert alert-info">No items in cart</div>
        ) : (
            <>
                <table className="table table-bordered align-middle">
                <thead className="table-light">
                    <tr>
                    <th>Product</th>
                    <th>Price</th>
                    <th>Qty</th>
                    <th>Subtotal</th>
                    <th></th>
                    </tr>
                </thead>
                <tbody>
                    {cart.map((item) => (
                    <tr key={item.id}>
                        <td>{item.name}</td>
                        <td>${item.price}</td>
                        <td style={{width: "100px"}}>
                            <input
                            className="form-control text-center"
                            min="1"
                            type="number"
                            value={item.qty}
                            onChange={(e) => updateQty(item.id, Number(e.target.value) )}
                            />
                        </td>
                        <td>${item.price * item.qty}</td>
                        <td>
                            <button 
                                onClick={() => removeFormCart(item.id)}
                                className="btn btn-outline-danger btn-sm">
                                Remove
                            </button>
                        </td>
                    </tr>
                    ))}
                </tbody>
                </table>
              <div className="text-end fw-bold fs-5">Total: ${total.toFixed(2)}</div>
            </>
        )}
      </div>
    )
}