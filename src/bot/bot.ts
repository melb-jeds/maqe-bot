import { NoLessThanOneMoveException } from './bot.exception'
import { BotConstructor, Indicator } from './bot.interface'
import { Direction } from './bot.types'

export default class Bot {
	private readonly directions: Direction[] = ['North', 'East', 'South', 'West']
	private currentDirectionIndex = 0
	private currentPosition = {
		x: 0,
		y: 0,
	}

	constructor({ x = 0, y = 0, direction = 'North' }: BotConstructor = {}) {
		this.currentPosition.x = x
		this.currentPosition.y = y
		this.currentDirectionIndex = this.directions.findIndex((item) => item === direction)
	}

	public getCurrentDirection(): Direction {
		return this.directions[this.currentDirectionIndex]
	}

	public getCurrentPosition(): { x: number; y: number } {
		return this.currentPosition
	}

	public turnRigth(): void {
		const isLastItem = this.currentDirectionIndex === this.directions.length - 1

		if (isLastItem) this.currentDirectionIndex = 0
		else this.currentDirectionIndex++
	}

	public turnLeft(): void {
		const isFirstItem = this.currentDirectionIndex === 0
		const lastIndex = this.directions.length - 1

		if (isFirstItem) this.currentDirectionIndex = lastIndex
		else this.currentDirectionIndex--
	}

	public moveForward(moveCount: number = 1): void {
		if (moveCount < 1) throw NoLessThanOneMoveException()

		const currentDirection = this.directions[this.currentDirectionIndex]
		const { axis, factor } = this.getIndicator(currentDirection)

		this.currentPosition[axis] += factor * moveCount
	}

	private getIndicator(direction: Direction): Indicator {
		const indicator: { [key in Direction]: Indicator } = {
			East: { axis: 'x', factor: 1 },
			West: { axis: 'x', factor: -1 },
			North: { axis: 'y', factor: 1 },
			South: { axis: 'y', factor: -1 },
		}

		return indicator[direction]
	}
}
