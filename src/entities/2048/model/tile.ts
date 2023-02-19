export class Tile {
	public value: number = 0
	public x: number = 0
	public y: number = 0
	public bgLightness: number = 0
	public textLightness: number = 0
	public id: number | undefined

	constructor() {
		this.setValue(Math.random() > 0.5 ? 2 : 4)
	}

	setXY(x: number, y: number) {
		this.x = x
		this.y = y
		this.id = this.id || Date.now()
	}

	setValue(value: number) {
		this.value = value
		this.bgLightness = 100 - Math.log2(value) * 9
		this.textLightness = this.bgLightness < 50 ? 90 : 10
	}
}
