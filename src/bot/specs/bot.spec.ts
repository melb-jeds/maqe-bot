import Bot from '../bot'

describe('Bot', () => {
	describe('is created with correct properties', () => {
		it('with default parameters', () => {
			const bot = new Bot()

			expect(bot.getCurrentDirection()).toBe('North')
			expect(bot.getCurrentPosition()).toEqual({
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

			expect(bot.getCurrentDirection()).toBe('East')
			expect(bot.getCurrentPosition()).toEqual({
				x: 10,
				y: 20,
			})
		})
	})

	describe('is turning currectly', () => {
		it('with single right turn', () => {
			const bot = new Bot()
			bot.turnRigth()

			expect(bot.getCurrentDirection()).toBe('East')
		})
		it('with multiple rigth turns', () => {
			const bot = new Bot()
			bot.turnRigth()
			bot.turnRigth()
			bot.turnRigth()

			expect(bot.getCurrentDirection()).toBe('West')
		})
		it('with single left turn', () => {
			const bot = new Bot()
			bot.turnLeft()

			expect(bot.getCurrentDirection()).toBe('West')
		})
		it('with multiple left turns', () => {
			const bot = new Bot()
			bot.turnLeft()
			bot.turnLeft()
			bot.turnLeft()

			expect(bot.getCurrentDirection()).toBe('East')
		})
		it('with mixed turns', () => {
			const bot = new Bot()
			bot.turnRigth()
			bot.turnRigth()
			bot.turnLeft()
			bot.turnLeft()

			expect(bot.getCurrentDirection()).toBe('North')
		})
	})

	describe('is moving forward correctly', () => {
		it('single north move', () => {
			const bot = new Bot()
			bot.moveForward()

			expect(bot.getCurrentPosition()).toEqual({
				x: 0,
				y: 1,
			})
		})
		it('specified north moves', () => {
			const bot = new Bot()
			bot.moveForward(5)

			expect(bot.getCurrentPosition()).toEqual({
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

			expect(bot.getCurrentDirection()).toBe('West')
			expect(bot.getCurrentPosition()).toEqual({
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

			expect(bot.getCurrentDirection()).toBe('East')
			expect(bot.getCurrentPosition()).toEqual({
				x: 100,
				y: 0,
			})
		})
		it('single right turn and 20 forward moves', () => {
			const bot = new Bot()
			bot.turnRigth()
			bot.moveForward(20)

			expect(bot.getCurrentDirection()).toBe('East')
			expect(bot.getCurrentPosition()).toEqual({
				x: 20,
				y: 0,
			})
		})
		it('multiple left turns and 100 forward moves', () => {
			const bot = new Bot()
			bot.turnRigth()
			bot.turnRigth()
			bot.turnRigth()
			bot.moveForward(100)

			expect(bot.getCurrentDirection()).toBe('West')
			expect(bot.getCurrentPosition()).toEqual({
				x: -100,
				y: 0,
			})
		})
		it('continuous turns and moves', () => {
			const bot = new Bot()
			bot.turnRigth()
			bot.turnRigth()
			bot.moveForward(10)
			bot.turnLeft()
			bot.moveForward(5)
			bot.turnLeft()
			bot.moveForward(25)

			expect(bot.getCurrentDirection()).toBe('North')
			expect(bot.getCurrentPosition()).toEqual({
				x: 5,
				y: 15,
			})
		})
	})
})
