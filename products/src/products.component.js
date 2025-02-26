import React, { useState } from 'react';
import './products.css';

const products = [
	{ id: 1, name: 'Product A', price: '$10', description: 'Description of Product A' },
	{ id: 2, name: 'Product B', price: '$20', description: 'Description of Product B' },
	{ id: 3, name: 'Product C', price: '$30', description: 'Description of Product C' },
	{ id: 4, name: 'Product D', price: '$15', description: 'Description of Product D' },
	{ id: 5, name: 'Product E', price: '$25', description: 'Description of Product E' },
	{ id: 6, name: 'Product F', price: '$35', description: 'Description of Product F' },
];

const getProductImage = (name) => {
	const formattedName = name.replace(' ', '+');
	return `https://placehold.co/600x400/D8E1EA/375064?text=${formattedName}&font=Lato`;
};

const ProductList = ({ onSelect }) => (
	<div className='product-list'>
		{products.map((product) => (
			<div key={product.id} className='product' onClick={() => onSelect(product)}>
				<img src={getProductImage(product.name)} alt={product.name} />
				<h3>{product.name}</h3>
				<p>{product.price}</p>
			</div>
		))}
	</div>
);

const ProductDetails = ({ product }) => (
	<div className='product-details'>
		<h2>{product.name}</h2>
		<p>{product.description}</p>
		<p>Price: {product.price}</p>
	</div>
);

const Products = () => {
	const [selectedProduct, setSelectedProduct] = useState(null);

	return (
		<div className='page'>
			{selectedProduct ? <ProductDetails product={selectedProduct} /> : <ProductList onSelect={setSelectedProduct} />}
		</div>
	);
};

export default Products;
