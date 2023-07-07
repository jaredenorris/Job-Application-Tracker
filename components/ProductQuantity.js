import React, { useState } from 'react';
import { TiMinus, TiPlus } from 'react-icons/ti';

function ProductQuantity () {
    const [quantity, setQuantity] = useState(0);
    const increment = () => setQuantity(quantity === 10 ? quantity: quantity + 1);
    const decrement = () => setQuantity(quantity === 0 ? 0 : quantity - 1);
    return (
        <div>
            <TiMinus onClick={decrement}/>
            <span>{quantity}</span>
            <TiPlus onClick={increment}/>
        </div>
    );
}

export default ProductQuantity;