import { Direction } from './bot.types'

export interface BotConstructor {
	x?: number
	y?: number
	direction?: Direction
}

export interface Indicator {
	axis: 'x' | 'y'
	factor: 1 | -1
}
