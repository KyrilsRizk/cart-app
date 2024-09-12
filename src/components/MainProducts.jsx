import React from 'react'
import Products from './Products'

const MainProducts = ({
	products,
	increment,
	decrement,
	deleteItem,
	totalAmount,
}) => {
	return (
		<div>
			{products.map((products, index) => (
				<Products
					products={products}
					increment={increment}
					decrement={decrement}
					deleteItem={deleteItem}
					key={index}
				/>
			))}
			<div className='flex justify-center items-center  p-3  text-red-500 text-3xl font-bold'>
				<span> {totalAmount()}</span>
			</div>
		</div>
	)
}

export default MainProducts
