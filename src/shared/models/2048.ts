interface Position {
	x: number
	y: number
}

export interface IGameBoard {
	cells: ICell[]
}

export interface ICell extends Position {
	linkedTile: ITile | null
	linkedTileForMerge: ITile | null
}

export interface ITile extends Position {
	value: number
	bgLightness?: number
	textLightness?: number
	id: number
}
