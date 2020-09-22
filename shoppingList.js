const items = [
	{
		id: 0,
		item: 'milk',
		price: 6,
	},
	{
		id: 0,
		item: 'milk',
		price: 6,
	},

	{
		id: 0,
		item: 'milk',
		price: 6,
	},
	{
		id: 0,
		item: 'milk',
		price: 6,
	},
	{
		id: 0,
		item: 'milk',
		price: 6,
	},

	{
		id: 1,
		item: 'butter',
		price: 8,
	},
	{
		id: 1,
		item: 'butter',
		price: 8,
	},
	{
		id: 1,
		item: 'butter',
		price: 8,
	},
	{
		id: 1,
		item: 'butter',
		price: 8,
	},
]

/**
 * Group the items bought base in their Id,
 * count the items for each group
 * sum the prices of each group
 * generate grand total
 */
const totalPrice = items.reduce(
	(total, itemPrice) => total + itemPrice.price,
	0
)

const existingCartItem = items.find(
	(cartItem) => cartItem.id === items.map((x) => x.id)
)

let counter = 1
const cart = items.reduce((tally, item) => {
	const quantity = items.map((x) => x.id === item.id).filter((x) => x === true)
		.length
	tally[item.id] = {
		...tally[item.id],
		...item,
		quantity: quantity,
		total: quantity * item.price,
		GrandTotal: totalPrice,
	}

	return tally
}, [])

console.log(cart)
