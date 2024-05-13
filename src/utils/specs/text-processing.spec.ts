import { CommandType, splitCommands } from '../text-processing'

describe('splitCommands', () => {
	it('should split commands correctly', () => {
		const commands = 'LW10RW5LW2'
		const expectedResult: CommandType[] = [
			{ command: 'L' },
			{ command: 'W', count: 10 },
			{ command: 'R' },
			{ command: 'W', count: 5 },
			{ command: 'L' },
			{ command: 'W', count: 2 },
		]

		const result = splitCommands(commands)

		expect(result).toEqual(expectedResult)
	})

	it('should handle single-character commands', () => {
		const commands = 'LRLRL'
		const expectedResult: CommandType[] = [{ command: 'L' }, { command: 'R' }, { command: 'L' }, { command: 'R' }, { command: 'L' }]

		const result = splitCommands(commands)

		expect(result).toEqual(expectedResult)
	})

	it('should handle multi-digit count commands', () => {
		const commands = 'W100W25W8'
		const expectedResult: CommandType[] = [
			{ command: 'W', count: 100 },
			{ command: 'W', count: 25 },
			{ command: 'W', count: 8 },
		]

		const result = splitCommands(commands)

		expect(result).toEqual(expectedResult)
	})

	it('should handle empty input', () => {
		const commands = ''
		const expectedResult: CommandType[] = []

		const result = splitCommands(commands)

		expect(result).toEqual(expectedResult)
	})
})
