import { splitCommands } from '../../utils/text-processing'
import { BotPort } from '../ports/bot.port'

export default class CommandController {
	constructor(private readonly bot: BotPort) {}

	public handle(rawCommands: string) {
		const commands = splitCommands(rawCommands)
		console.log(commands)
	}
}
