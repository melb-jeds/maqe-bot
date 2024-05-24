export default abstract class BotPort {
	abstract turnLeft(count?: number): void
	abstract turnRight(count?: number): void
	abstract moveForward(count?: number): void
	abstract moveBackward(count?: number): void
	abstract getDirection(): 'East' | 'West' | 'North' | 'South'
	abstract getPosition(): { x: number; y: number }
}
