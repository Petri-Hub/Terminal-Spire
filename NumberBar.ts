export class NumberBar {
    constructor(
        private value: number,
        private max: number
    ) { }

    public getValue(): number {
        return this.value
    }

    public increaseBy(quantity: number): void {
        const newValue = this.value + quantity
        const limitedValue = Math.min(newValue, this.max)

        this.value = limitedValue
    }

    public decreaseBy(quantity: number): void {
        const newValue = this.value - quantity
        const limitedValue = Math.max(newValue, 0)

        this.value = limitedValue
    }
}