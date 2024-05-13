import { CommandType, splitCommands } from '../../utils/text-processing'
import BotPort from '../ports/bot.port'

export default class CommandController {
	constructor(private readonly bot: BotPort) {}

	public handle(rawCommands: string) {
		const commands = splitCommands(rawCommands)
		commands.forEach((command) => this.runBotWithCommand(command))

		const position = this.bot.getPosition()
		const direction = this.bot.getDirection()

		console.log(`X: ${position.x} Y: ${position.y} Direction: ${direction}`)
	}

	private runBotWithCommand(command: CommandType): void {
		switch (command.command) {
			case 'L':
				this.bot.turnLeft()
				break
			case 'R':
				this.bot.turnRight()
				break
			case 'W':
				this.bot.moveForward(command.count)
				break
			default:
				break
		}
	}
}
