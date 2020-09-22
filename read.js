const a = [10, 40, 200, 1000, 60, 30]

let counter = 1
const result = a.map((x, index, arr) => {
	console.log(counter)
	return arr[index + 1] > x ? counter++ : counter--
})

console.log(result)
console.log('dog'.charAt(2))

const text = 'I am the light of the world, Says the Lord of Host'

let hold = 0

const searchValue = (words = '', search = '') => {
	// let pos = words.indexOf(search)
	let pos = words.search(search)
	let holder = 0
	while (pos !== -1) {
		holder++

		pos = words.indexOf(search, pos + 1)
		console.log(pos)
	}
	return holder
}

console.log(searchValue(text, 't'))
const matches = /^\d+$/
console.log(matches.test(+562345))

// console.log('indexOf ', hold)
// let count = 0
// for (let i = 0; i < a.length; i++) {
// 	console.log(a[i])
// 	console.log(a[i + 1])
// 	while (a[i] < a[i + 1]) {
// 		console.log(count + 1)
// 	}
// 	// count - 1
// 	return count
// }

const primeNumbers = (num) => {
	if (num === 2 || num === 3) return true

	if (num % 2 === 0 || num % 3 === 0 || Number.isInteger(Math.sqrt(num))) {
		return false
	} else {
		return true
	}
}

console.log(primeNumbers(49))

for (i = 0; i < 100; i++) {
	if (primeNumbers(i)) {
		console.log(i)
	}
}

// const module = (x, y, p) => {
// 	return Math.pow(x, y) % p
// }
// console.log(module(6, 10, 77))

const arr = [1, 2, 3, 4, 5, 5, 6, 7]

const findSum = (arr = [], sum = 0) => {
	let hash = {}
	let container = []
	for (let i = 0; i < arr.length; i++) {
		let currentValue = arr[i]
		let difference = sum - currentValue

		if (arr.indexOf(difference) !== -1) {
			return currentValue + ' ' + difference
		}
		/**
		 * The same as this below
		 */
		if (hash[currentValue] !== undefined) {
			container = [i, hash[currentValue]]
			return container
		} else {
			console.log(i)
			console.log((hash[difference] = i))
			hash[difference] = i
		}
	}
}
console.log(findSum(arr, 3))
