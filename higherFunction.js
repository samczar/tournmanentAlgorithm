/**
 * Foreach
 */

const numbers = [1, 2, 3, 4, 5, 6]

const viewArr = (numbers = []) => {
	return numbers.forEach((number) => {
		let value = number
		return value
	})
}
let total = 0
const sumOfArr = numbers.forEach((value) => (total = total + value))
console.log(total)

const letter = ['a', 'b', 'c', 'a', 'd', 'c', 'a']

let count = {}
letter.forEach((value) => {
	if (count[value]) {
		count[value]++
	} else {
		count[value] = 1
	}
	console.log(count)
})
console.log(count)

const names = [
	{ id: 'z2', name: 'john' },
	{ id: 'c4', name: 'Don' },
	{ id: 'e5', name: 'Susan' },
]
const genders = [
	{ id: 'z2', gender: 'male' },
	{ id: 'c4', gender: 'male' },
	{ id: 'd7', gender: 'female' },
	{ id: 'd8', gender: 'female' },
]

const holder = []
const combined = [...genders, ...names].forEach((value) => {
	if (holder[value.id]) {
		holder[value.id] = { ...holder[value.id], ...value }
	} else {
		holder[value.id] = value
	}
})

const reduceCombine = [...genders, ...names].reduce((people, person) => {
	people[person.id] = { ...people[person.id], ...person }
	return people
}, {})

const holdmap = []
const mapper = [...genders, ...names].map((value) => {
	if (holdmap[value.id]) {
		holdmap[value.id] = { ...holder[value.id], ...value }
	} else {
		holdmap[value.id] = value
	}
})

console.log(holdmap)

let mappers = numbers.map((x) => x * 2)

console.log(mappers)

const binary = 4

console.log(binary.toString(2))

let str = ['1', '2', '3', '4', '5']
let a = []
str.forEach((x) => (a = Number(x)))
console.log(a)

/**
 * Remove Duplicate
 */

const arrOfNumbers = [1, 2, 5, 3, 4, 6, 3, 4, 5, 6, 4, 3, 9]
// const arrOfNumbers = [-10, 1, 2, 3, 4, 5, 6, 7]
const removeDuplicate = Array.from(new Set(arrOfNumbers), (x) => x.toString())

console.log(removeDuplicate)

let holld = []
const duplicate2 = arrOfNumbers
	.filter((value, index, arr) => {
		console.log(index)
		console.log(arr.indexOf(value))
		return arr.indexOf(value) === index
	})
	.sort((a, b) => a - b)

console.log(arrOfNumbers)
const max = arrOfNumbers.reduce((max, value) => {
	return max > value ? max : value
}, -Infinity)

console.log(max)

const store = [
	{ product: 'laptop', value: 1000, count: 3 },
	{ product: 'desktop', value: 1500, count: 4 },
	{ product: 'mobile', value: 500, count: 10 },
]

const worth = store.reduce((goods, good) => {
	return (goods = goods + good.value * good.count)
}, 0)
console.log(worth)

const arrs = [1, 2, 3, 4, 5, 6]
console.log(arrs.splice(2, 0, 4, 5, 9))
console.log(arrs)

const sortArray = store.sort((a, b) => a.value - b.value)
console.log(sortArray)

const arr1 = []
const arr2 = [4, 5, 6]
console.log(arr1.concat(arr2))

const objectAssign = Object.assign(arr1, arr2)
console.log(objectAssign)
console.log(arr1)
