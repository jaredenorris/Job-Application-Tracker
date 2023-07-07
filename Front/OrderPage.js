import React from 'react';
import ProductRow from '../components/ProductRow.js';
import products from '../data/products.js';

function OrderPage() {
    return(
        <div>
        <h2>Order</h2>
        <article>
            <h3>Use this page to order products.</h3>
                    <table id="productTable">
                        <caption>Please choose one</caption>
                        <thead>
                            <tr>
                                <td>Product, Company</td>
                                <td>Price</td>
                                <td>Quantity</td>
                            </tr>
                        </thead>
                        <tbody>
                            {products.map((product, idx) =>
                            <ProductRow
                            product={product}
                            key={idx} 
                             />
                            )} 
                        </tbody>
                    </table>
        </article>
        </div>
    );
                            
}
                            
                        
export default OrderPage;
