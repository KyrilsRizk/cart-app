import { useState } from 'react'
import ActionsButtons from './components/ActionsButtons'
import AddItems from './components/AddItems'
import Header from './components/Header'
import MainProducts from './components/MainProducts'
{
	/**1- increment     // done                         
 2- decrement   // done
 3- delete one item //done
 4- delete all items   // done
 5- total price for each product  //done
 6- total amount for all products  //done
 7- change background  //done
 8- reset products  //done
 9- add to cart   //done
10- add to basket //done */
}
const App = () => {
	const [products, setProducts] = useState([
		{ id: 1, name: 'chipsy', price: 100, items: 1 },
		{ id: 2, name: 'pepsi', price: 200, items: 1 },
		{ id: 3, name: 'cigaretes', price: 300, items: 1 },
		{ id: 4, name: 'kranshy', price: 400, items: 1 },
	])
	const [newProducts] = useState([
		{ id: 1, name: 'chipsy', price: 100, items: 1 },
		{ id: 2, name: 'pepsi', price: 200, items: 1 },
		{ id: 3, name: 'cigaretes', price: 300, items: 1 },
		{ id: 4, name: 'kranshy', price: 400, items: 1 },
	])

	let increment = (id) => {
		let theItem = products.map((product) => {
			if (id === product.id) {
				product.items += 1
			}
			return product
		})
		setProducts(theItem)
	}

	let decrement = (id) => {
		let theItem = products.map((product) => {
			if (id === product.id) {
				if (product.items > 1) {
					product.items -= 1
				}
			}
			return product
		})
		setProducts(theItem)
	}

	let deleteItem = (id) => {
		let theDeletItem = products.filter(
			(product) => product.id !== id
		)
		setProducts(theDeletItem)
	}

	let deleteAllItems = () => {
		setProducts([])
	}

	let totalAmount = () => {
		if (products.length === 0) {
			return 'the cart is empty'
		}
		let allTotalAmount = products.reduce((num, product) => {
			return num + product.price * product.items
		}, 0)
		return `Total peice : ` + allTotalAmount
	}

	let theCart = () => {
		if (products.length === 0) {
			return `empty`
		} else return products.length
	}

	let reset = () => {
		setProducts([...newProducts])
	}

	const [bgColor, setbgColor] = useState(true)

	let changeBackground = () => {
		setbgColor(!bgColor)
	}

	let addToCart = (newProduct) => {
		let checkProduct = products.find(
			(product) => product.id === newProduct.id
		)
		if (checkProduct) {
			setProducts(
				products.map((product) =>
					product.id === newProduct.id
						? { ...product, items: product.items + 1 }
						: product
				)
			)
		} else {
			setProducts([...products, newProduct])
		}
	}

	return (
		<div
			style={{
				backgroundColor: bgColor ? 'white' : 'black',
			}}
		>
			<Header theCart={theCart()} />
			<AddItems addToCart={addToCart} />
			<ActionsButtons
				changeBackground={changeBackground}
				products={products}
				deleteAllItems={deleteAllItems}
				reset={reset}
			/>
			<MainProducts
				totalAmount={totalAmount}
				products={products}
				increment={increment}
				decrement={decrement}
				deleteItem={deleteItem}
			/>
		</div>
	)
}

export default App
