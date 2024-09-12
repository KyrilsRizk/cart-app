import React from 'react'

const ActionsButtons = ({
	changeBackground,
	reset,
	deleteAllItems,
}) => {
	return (
		<div className='flex  flex-col sm:flex-row justify-evenly  items-center mt-8 gap-3   '>
			<button
				onClick={() => reset()}
				className='btn btn-active btn-primary'
			>
				Reset
			</button>
			<button
				onClick={() => deleteAllItems()}
				className='btn bg-red-500 text-slate-800 hover:bg-red-600'
			>
				Dlelete
			</button>
			<button
				onClick={() => changeBackground()}
				className='btn text-3xl bg-slate-400 text-slate-800 hover:bg-slate-600'
			>
				🌞 / 🌚
			</button>
		</div>
	)
}

export default ActionsButtons
