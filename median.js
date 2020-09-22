const arr = [1, 2, 3, 4, 5]

const median = (arr = []) => {
	for (let i = 0; i < arr.length; i++) {
		let isEven = arr.length % 2 === 0
		if (!isEven) {
			let a = Math.floor(arr.length / 2)
			return arr[arr.indexOf(a + 1)]
		} else {
			let a = arr.length / 2
			console.log(arr[arr.length / 2 - 1])
			let result = (arr[arr.indexOf(a)] + arr[arr.indexOf(a + 1)]) / 2
			return result.toFixed(1)
		}
	}
}
console.log(median(arr))

let arr1 = [1, 2, 3, 2, 3]
let arr2 = [1, 2, 2, 3, 4]
let arr3 = [1, 2]

console.log(new Set(arr1))

const result = Array.from(new Set(arr1))
	.filter((x) => x === arr2[arr2.indexOf(x)])
	.filter((x) => x === arr3[arr3.indexOf(x)])

console.log(result)

//Jagged Array

function Matrix(rows, columns) {
	let jaggedArray = new Array(rows)
	for (let i = 0; i < columns; i++) {
		jaggedArray[i] = new Array(rows)
	}
	return jaggedArray
}
console.log(Matrix(3, 4))

const a = [
	{ name: 'sam', id: 'az' },
	{ name: 'ben', id: 'ab' },
	{ name: 'ken', id: 'ac' },
	{ name: 'mary', id: 'ad' },
	{ name: 'john', id: 'ay' },
]
const b = [
	{ id: 'az', gender: 'male' },
	{ id: 'ab', gender: 'male' },
	{ id: 'ac', gender: 'female' },
	{ id: 'af', gender: 'male' },
	{ id: 'ag', gender: 'male' },
	{ id: 'aj', gender: 'female' },
]

const result1 = a.concat(b).reduce((tally, val) => {
	tally[val.id] = { ...tally[val.id], ...val }
	return tally
}, [])
console.log(result1)

const cart = [
	{ id: 1, name: 'milk', price: 200 },
	{ id: 1, name: 'milk', price: 200 },
	{ id: 1, name: 'milk', price: 200 },
	{ id: 2, name: 'bread', price: 20 },
	{ id: 3, name: 'gum', price: 40 },
]
/**
 * {id, name, price, quantity}
 */

let h = 0
let j = {}
let arrr = [1, 2, 3, 4, 4]
j[arrr] = arrr
console.log(j)

let k = {}
let res = arrr.reduce((prev, curr) => {
	prev[curr] = (prev[curr] || 0) + 1
	return prev
}, {})
console.log(Object.keys(res))

console.log(res)

const result2 = cart.reduce((tally, product) => {
	const quantity = cart
		.map((x) => x.id === product.id)
		.filter((x) => x === true).length
	tally[product.id] = {
		...(tally[product.id] || product),
		quantity: quantity,
		total: quantity,
		grandtotal: cart.reduce((total, product) => total + product.price, 0),
	}

	return tally
}, [])

console.log(result2)

const bs = (num = 0) => {
	let result = 0
	for (let i = 0; i <= 10 + 10 * num; i++) {
		result = i - num
	}
	return result
}

console.log(bs(1))

const code1 = (num = 0) => {
	if (num <= 1) return 1
	let counter = 0

	while (num > 1) {
		if (Number.isInteger(Math.sqrt(num))) {
			num = Math.sqrt(num)
		} else {
			num = num - 1
		}
		counter++
		console.log(num + '- >')
	}
	return counter
}

console.log(code1(100))
const bonus = [10, 40, 200, 1000, 60, 30]
const code2 = (arr) => {
	return
}

const linkedListArr = [2, 4, 7, 5, -6, 6]
const code3 = (arr = []) => {
	return arr.reduce((prev, curr, index, arr) => {
		// if (curr + arr[index] === 0) {
		// 	return [...prev, curr]
		// }
		return arr[index - 1]
	}, [])
}

console.log(code3(linkedListArr))

const matrix = [
	[1, 0, 1],
	[0, 0, 1],
	[1, 1, 1],
]

const rotateMatrix90Left = (mat = []) => {
	let N = mat.length

	for (let x = 0; x < N / 2; x++) {
		for (let y = x; y < N - x - 1; y++) {
			var temp = mat[x][y]
			console.log(temp)
			mat[x][y] = mat[y][N - 1 - x]
			console.log((mat[x][y] = mat[y][N - 1 - x]))
			mat[y][N - 1 - x] = mat[N - 1 - x][N - 1 - y]
			console.log((mat[y][N - 1 - x] = mat[N - 1 - x][N - 1 - y]))
			mat[N - 1 - x][N - 1 - y] = mat[N - 1 - y][x]
			console.log((mat[N - 1 - x][N - 1 - y] = mat[N - 1 - y][x]))
			mat[N - 1 - y][x] = temp
			console.log((mat[N - 1 - y][x] = temp))
		}
	}
}
console.log(rotateMatrix90Left(matrix))
console.log(matrix)
