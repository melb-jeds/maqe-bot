import inquirer from 'inquirer'
import CommandController from './adapters/controllers/command.controller'
import Bot from './applications/bot'

function main() {
	inquirer
		.prompt([
			{
				name: 'commands',
				message: 'Enter you direction commands:',
			},
		])
		.then((answer) => {
			new CommandController(new Bot()).handle(answer['commands'])
		})
}

main()
