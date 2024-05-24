export type CommandType = { command: 'W' | 'B' | 'R' | 'L'; count: number }

export const splitCommands = (commands: string): CommandType[] => {
	const subCommands = commands.match(/[A-Z]\d*/g) || []

	return subCommands.map((command) => {
		const direction = command[0] as 'W' | 'B' | 'R' | 'L'
		return { command: direction, count: parseInt(command.substring(1) || '1') }
	})
}
