function NoLessThanOneMoveException() {
	return new Error('Move Error: moveCount cannot be less than 1.')
}

export { NoLessThanOneMoveException }
