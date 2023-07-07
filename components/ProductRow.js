import React from 'react';
import ProductQuantity from './ProductQuantity';

function ProductRow({product}) {
    return (
        <tr>
            <td>{product.product} by {product.company}</td>
            <td>{product.price.toLocaleString('en-US', {style: 'currency', currency: 'USD'})}</td>
            <td><ProductQuantity product={product}/></td>
        </tr>
    );
}

export default ProductRow;