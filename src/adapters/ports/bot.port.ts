export default abstract class BotPort {
	abstract turnLeft(): void
	abstract turnRight(): void
	abstract moveForward(count?: number): void
	abstract getDirection(): 'East' | 'West' | 'North' | 'South'
	abstract getPosition(): { x: number; y: number }
}
