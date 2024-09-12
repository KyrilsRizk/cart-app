import React from 'react'

const Products = ({
	products: { name, price, items, id },
	increment,
	decrement,
	deleteItem,
}) => {
	return (
		<div className=' pl-8 pr-8 mt-8 mb-5'>
			<div className='flex flex-col md:flex-row  justify-around text-2xl  items-center p-3  gap-3  text-white font-bold rounded-md bg-slate-500  mb-5  '>
				<span className='p-1'>Name : {name} </span>
				<span className='p-1'>Price : {price} </span>
				<span className='p-1'>Items : {items} </span>
				<button
					onClick={() => increment(id)}
					className='btn btn-active  text-xl text-white  bg-sky-500 hover:bg-sky-600'
				>
					+
				</button>
				<button
					onClick={() => decrement(id)}
					className='btn btn-active text-2xl text-white bg-emerald-500 hover:bg-emerald-600'
				>
					-
				</button>
				<button
					onClick={() => deleteItem(id)}
					className='btn bg-red-500 text-slate-800 hover:bg-red-600'
				>
					Dlelete
				</button>
				<span className='text-2xl text-green-500  '>
					Total :{price * items}
				</span>
			</div>
		</div>
	)
}

export default Products
