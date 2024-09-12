import React from 'react'

const AddItems = ({ addToCart }) => {
	return (
		<div className='flex flex-col sm:flex-row justify-evenly mt-1 items-center gap-3'>
			<button
				onClick={() =>
					addToCart({
						id: 1,
						name: 'chipsy',
						price: 100,
						items: 1,
					})
				}
				className='btn bg-green-400 text-slate-800 font-bold text-[.9rem] hover:bg-green-500'
			>
				chipsy
			</button>
			<button
				onClick={() =>
					addToCart({
						id: 3,
						name: 'cigaretes',
						price: 300,
						items: 1,
					})
				}
				className='btn btn-active btn-neutral'
			>
				Cigartes
			</button>
			<button
				onClick={() =>
					addToCart({
						id: 2,
						name: 'pepsi',
						price: 200,
						items: 1,
					})
				}
				className='btn bg-blue-500 hover:bg-blue-600 text-slate-800'
			>
				pepsi
			</button>
			<button
				onClick={() =>
					addToCart({
						id: 4,
						name: 'kranshy',
						price: 400,
						items: 1,
					})
				}
				className='btn bg-yellow-300 hover:bg-yellow-400'
			>
				kranshy
			</button>
		</div>
	)
}

export default AddItems
