export interface BotPort {
	turnLeft(): void
	turnRight(): void
	getDirection(): 'East' | 'West' | 'North' | 'South'
	getPosition(): { x: number; y: number }
}
