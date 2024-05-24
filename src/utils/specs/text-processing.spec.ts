import { CommandType, splitCommands } from '../text-processing'

describe('splitCommands', () => {
	it('should split commands correctly', () => {
		const commands = 'LW10RW5LW2'
		const expectedResult: CommandType[] = [
			{ command: 'L', count: 1 },
			{ command: 'W', count: 10 },
			{ command: 'R', count: 1 },
			{ command: 'W', count: 5 },
			{ command: 'L', count: 1 },
			{ command: 'W', count: 2 },
		]

		const result = splitCommands(commands)

		expect(result).toEqual(expectedResult)
	})

	it('should handle single-character commands', () => {
		const commands = 'LRLRL2'
		const expectedResult: CommandType[] = [
			{ command: 'L', count: 1 },
			{ command: 'R', count: 1 },
			{ command: 'L', count: 1 },
			{ command: 'R', count: 1 },
			{ command: 'L', count: 2 },
		]

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
