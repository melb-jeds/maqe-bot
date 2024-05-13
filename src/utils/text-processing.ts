export type CommandType = { command: 'R' | 'L' } | { command: 'W'; count: number }

export const splitCommands = (commands: string): CommandType[] => {
	const regex = /([LR])|W(\d+)/g
	const subCommands: string[] = []
	let match
	while ((match = regex.exec(commands)) !== null) {
		if (match[1]) {
			subCommands.push(match[1])
		} else {
			subCommands.push(`W${match[2]}`)
		}
	}

	return subCommands.map((command) => {
		if (command === 'L' || command === 'R') {
			return { command }
		} else {
			const [w, count] = command.split('W')
			return { command: 'W', count: parseInt(count) }
		}
	})
}
