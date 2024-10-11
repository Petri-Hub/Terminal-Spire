export interface ITerminalPrompt<T, K> {
	show(payload: T): K
}
