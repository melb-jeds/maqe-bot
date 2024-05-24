import Bot from '../bot'

describe('Bot', () => {
	describe('is created with correct properties', () => {
		it('with default parameters', () => {
			const bot = new Bot()

			expect(bot.getDirection()).toBe('North')
			expect(bot.getPosition()).toEqual({
				x: 0,
				y: 0,
			})
		})
		it('with specified parameters', () => {
			const bot = new Bot({
				direction: 'East',
				x: 10,
				y: 20,
			})

			expect(bot.getDirection()).toBe('East')
			expect(bot.getPosition()).toEqual({
				x: 10,
				y: 20,
			})
		})
	})

	describe('is turning currectly', () => {
		it('with single right turn', () => {
			const bot = new Bot()
			bot.turnRight()

			expect(bot.getDirection()).toBe('East')
		})
		it('with multiple rigth turns', () => {
			const bot = new Bot()
			bot.turnRight(3)

			expect(bot.getDirection()).toBe('West')
		})
		it('with single left turn', () => {
			const bot = new Bot()
			bot.turnLeft()

			expect(bot.getDirection()).toBe('West')
		})
		it('with multiple left turns', () => {
			const bot = new Bot()
			bot.turnLeft(3)

			expect(bot.getDirection()).toBe('East')
		})
		it('with mixed turns', () => {
			const bot = new Bot()
			bot.turnRight(2)
			bot.turnLeft(2)

			expect(bot.getDirection()).toBe('North')
		})
	})

	describe('is moving forward correctly', () => {
		it('single north move', () => {
			const bot = new Bot()
			bot.moveForward()

			expect(bot.getPosition()).toEqual({
				x: 0,
				y: 1,
			})
		})
		it('specified north moves', () => {
			const bot = new Bot()
			bot.moveForward(5)

			expect(bot.getPosition()).toEqual({
				x: 0,
				y: 5,
			})
		})
		it('should denies 0 move count', () => {
			const bot = new Bot()
			expect(() => bot.moveForward(0)).toThrow()
		})
		it('should denies negative move count', () => {
			const bot = new Bot()
			expect(() => bot.moveForward(0)).toThrow()
		})
	})

	describe('is moving forward with correct direction', () => {
		it('single left turn and 20 forward moves', () => {
			const bot = new Bot()
			bot.turnLeft()
			bot.moveForward(20)

			expect(bot.getDirection()).toBe('West')
			expect(bot.getPosition()).toEqual({
				x: -20,
				y: 0,
			})
		})
		it('multiple left turns and 100 forward moves', () => {
			const bot = new Bot()
			bot.turnLeft()
			bot.turnLeft()
			bot.turnLeft()
			bot.moveForward(100)

			expect(bot.getDirection()).toBe('East')
			expect(bot.getPosition()).toEqual({
				x: 100,
				y: 0,
			})
		})
		it('single right turn and 20 forward moves', () => {
			const bot = new Bot()
			bot.turnRight()
			bot.moveForward(20)

			expect(bot.getDirection()).toBe('East')
			expect(bot.getPosition()).toEqual({
				x: 20,
				y: 0,
			})
		})
		it('multiple left turns and 100 forward moves', () => {
			const bot = new Bot()
			bot.turnRight()
			bot.turnRight()
			bot.turnRight()
			bot.moveForward(100)

			expect(bot.getDirection()).toBe('West')
			expect(bot.getPosition()).toEqual({
				x: -100,
				y: 0,
			})
		})
		it('continuous turns and moves', () => {
			const bot = new Bot()
			bot.turnRight()
			bot.turnRight()
			bot.moveForward(10)
			bot.turnLeft()
			bot.moveForward(5)
			bot.turnLeft()
			bot.moveForward(25)

			expect(bot.getDirection()).toBe('North')
			expect(bot.getPosition()).toEqual({
				x: 5,
				y: 15,
			})
		})
	})

	describe('is moving backward with correct direction', () => {
		it('single left turn and 20 backward moves', () => {
			const bot = new Bot()
			bot.turnLeft()
			bot.moveBackward(20)

			expect(bot.getDirection()).toBe('West')
			expect(bot.getPosition()).toEqual({
				x: 20,
				y: 0,
			})
		})
		it('multiple left turns and 100 backward moves', () => {
			const bot = new Bot()
			bot.turnLeft()
			bot.turnLeft()
			bot.turnLeft()
			bot.moveBackward(100)

			expect(bot.getDirection()).toBe('East')
			expect(bot.getPosition()).toEqual({
				x: -100,
				y: 0,
			})
		})
		it('single right turn and 20 backward moves', () => {
			const bot = new Bot()
			bot.turnRight()
			bot.moveBackward(20)

			expect(bot.getDirection()).toBe('East')
			expect(bot.getPosition()).toEqual({
				x: -20,
				y: 0,
			})
		})
	})
})
