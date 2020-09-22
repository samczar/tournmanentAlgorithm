//import Tournament from './node_modules/round-robin-tournament'
// const { BracketsManager } = require('brackets-manager')
// const { JsonDB } = require('node-json-db')
// const { Config } = require('node-json-db/dist/lib/JsonDBConfig')
// const { storage } = require('brackets-manager/dist/storage/json')

// const db = new JsonDB(new Config('example', true, false, '/'))
// storage.reset(db)
// const selectDatase = storage.select(db)

// 	'/example',
// 	{
// 		name: 'Example',
// 		tournamentId: 0,
// 		type: 'round_robin',
// 		seeding: [
// 			'Team 1',
// 			'Team 2',
// 			'Team 3',
// 			'Team 4',
// 			'Team 5',
// 			'Team 6',
// 			'Team 7',
// 			'Team 8',
// 		],
// 		number: 6,
// 		settings: { groupCount: 2 },
// 	},
// 	true

// const data = db.getData('/example')

// const manager = new BracketsManager(storage.select(selectDatase))
// const createData = async () => {
// 	try {
// 		await manager.create()
// 		const getter = await manager.storage.insert('participant', data)
// 		console.log(getter)
// 	} catch (error) {
// 		console.log(error)
// 	}
// }

// createData()

// 	.then((result) => console.log('result', result))
// 	.catch((err) => console.log('err', err))
// const tournament = async (data) => {
// 	const createData = await manager.get
// 	console.log(createData)
// 	return createData
// 	// await createData.s
// 	// await manager.storage.select('stage', 0)
// }

// return tournament(data)

const TEAMS = [
	{ id: 1, name: 'Arsenal' },
	{ id: 2, name: 'Chelsea' },
	{ id: 3, name: 'Liverpool' },
	{ id: 4, name: 'Manchester City' },
	{ id: 5, name: 'Manchester United' },
	{ id: 6, name: 'West Ham' },
]

const onyi = [
	'Preston',
	'G',
	'Salman',
	'OnyiKing',
	'Hriday',
	'Amit',
	'Kendrick',
]

function genMatches(nTeams) {
	var matchArray = []
	while (nTeams > 1) {
		nTeams = (nTeams + 1) >> 1
		var matches = []
		for (var i = 0; i < nTeams; ++i) {
			matches.push([])
		}
		matchArray.push(matches)
	}
	return matchArray
}

console.log(genMatches('onyi', onyi))

/**
 * Randomize The Match
 */

const randomizeMatch = (matches = []) => {
	let array2 = []
	while (matches.length !== 0) {
		let randomIndex = Math.floor(Math.random() * matches.length)
		array2.push(matches[randomIndex])
		matches.splice(randomIndex, 1)
	}
	return (matches = array2)
}

const roundRobin = function (arr) {
	let matches = []
	for (let i = 0; i < arr.length; i++) {
		for (let j = 0; j < i; j++) {
			matches.push(`${arr[i]} vs ${arr[j]}`)
		}
	}

	return randomizeMatch(matches)
}

console.log(roundRobin([...TEAMS.map((team) => team.id + ' ' + team.name)]))

function roundRobinMatches(participants) {
	const n = participants.length
	const n1 = n % 2 === 0 ? n : n + 1
	const roundCount = n1 - 1
	const matchPerRound = n1 / 2

	const rounds = []

	for (let roundId = 0; roundId < roundCount; roundId++) {
		const matches = []

		for (let matchId = 0; matchId < matchPerRound; matchId++) {
			if (matchId === 0 && n % 2 === 1) continue

			const opponentsIds = [
				(roundId - matchId - 1 + n1) % (n1 - 1),
				matchId === 0 ? n1 - 1 : (roundId + matchId) % (n1 - 1),
			]

			matches.push([
				participants[opponentsIds[0]],
				participants[opponentsIds[1]],
			])
		}

		rounds.push(matches)
	}

	return rounds
}

console.log(roundRobinMatches(onyi))

/**
 * LeageToKnockout
 * @param {} elements
 * @param {*} groupCount
 */
function makeGroups(elements, groupCount) {
	const groupSize = Math.ceil(elements.length / groupCount)
	const result = []

	for (let i = 0; i < elements.length; i++) {
		if (i % groupSize === 0) result.push([])

		result[result.length - 1].push(elements[i])
	}

	return result
}

console.log('makeGroup ', makeGroups(onyi, 2))

const notPowerOfTwo = (number) => {
	if (Math.log2(number) !== Number.isInteger) {
		return false
	} else {
		return true
	}
}
console.log(notPowerOfTwo(32))

class Match {
	constructor(player) {
		this.player = player
	}
}

const fixture = (numberOfTeams = 16, teamsPerMatch = 2) => {
	const getMatchScore = () => Math.round(Math.random() * 100)

	let numberOfRounds = Math.log(numberOfTeams) / Math.log(teamsPerMatch)

	console.log(numberOfRounds)
	const matches = []
	let numberOfMatchesThisRound = numberOfTeams
	for (let round = 0; round < numberOfRounds; round++) {
		matches[round] = []
		console.log(matches)
		numberOfMatchesThisRound /= teamsPerMatch
		for (let match = 0; match < numberOfMatchesThisRound; match++) {
			matches[round].push(new Match(getMatchScore(round, match)))
			matches[round].push(new Match(onyi.map((x) => x)))
		}
	}
}

console.log('fixture ', fixture(onyi.length, 2))
