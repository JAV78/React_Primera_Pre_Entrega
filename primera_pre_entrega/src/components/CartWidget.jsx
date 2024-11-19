import { FaShoppingCart } from "react-icons/fa";
import React, { useState } from "react";

function CartWidget() {
    const [items, setItems] = useState(5);
    
    return (
        <div className="carrito">
            <FaShoppingCart size="50px"/>
            <span className="badge">5</span>
        </div>
    )
}

export default CartWidget 