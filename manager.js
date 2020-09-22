const { BracketsManager } = require('brackets-manager')

const { storage } = require('brackets-manager/dist/storage/json')

const manager = new BracketsManager(storage)

const createData = async () => {
	await manager.create({
		name: 'Amateur',

		tournamentId: 0,

		type: 'round_robin',

		seeding: ['Preston', 'G', 'Salman', 'OnyiKing'],

		settings: { groupCount: 2 },
	})
}

const updateData = async () => {
	await manager.update.match({
		id: 0, // First match of WB round 1

		opponent1: { score: 16, result: 'win' },

		opponent2: { score: 12 },
	})
	await manager.update.match({
		id: 1, // First match of WB round 1

		opponent1: { score: 13 },

		opponent2: { score: 18, result: 'win' },
	})

	await manager.update.match({
		id: 2, // First match of WB round 1

		opponent1: { score: 10 },

		opponent2: { score: 14, result: 'win' },
	})
}

createData().then(updateData)
