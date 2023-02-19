import { Tile } from '@/entities/2048/config'

type LinkedTileType = Tile | undefined | null

export class Cell {
	public linkedTile: LinkedTileType
	public linkedTileForMerge: LinkedTileType
	public x: number
	public y: number

	constructor(x: number, y: number) {
		this.x = x
		this.y = y
		this.linkedTile = null
		this.linkedTileForMerge = null
	}

	linkTile(tile: LinkedTileType) {
		tile?.setXY(this.x, this.y)
		this.linkedTile = tile
	}

	unlinkTile() {
		this.linkedTile = null
	}

	linkTileForMerge(tile: LinkedTileType) {
		tile?.setXY(this.x, this.y)
		this.linkedTileForMerge = tile
	}

	hasTileForMerge() {
		return !!this.linkedTileForMerge
	}

	mergeTiles() {
		this.linkedTile?.setValue(
			(this.linkedTileForMerge?.value || 0) + this.linkedTile?.value
		)
		this.linkedTileForMerge = null
	}

	canAccept(newTile: LinkedTileType) {
		return (
			this.isEmpty() ||
			(!this.hasTileForMerge() && this.linkedTile?.value == newTile?.value)
		)
	}

	isEmpty() {
		return !this.linkedTile
	}
}
