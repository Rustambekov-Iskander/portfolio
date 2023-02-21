import { Cell } from '@/entities/2048/model/cell'
import { Grid } from '@/entities/2048/model/grid'

export function slideTiles(groupedCells: Array<Cell[]>, gameBoard: Grid) {
	groupedCells.forEach((group: any) => slideTilesInGroup(group))

	gameBoard.cells.forEach((cell) => {
		cell.hasTileForMerge() && cell.mergeTiles()
	})
}

function slideTilesInGroup(group: Cell[]) {
	for (let i = 1; i < group.length; ++i) {
		if (group[i].isEmpty()) continue

		const cellWithTile = group[i]
		let targetCell
		let j = i - 1

		while (j >= 0 && group[j].canAccept(cellWithTile.linkedTile)) {
			targetCell = group[j]
			j--
		}

		if (!targetCell) continue

		if (targetCell.isEmpty()) {
			targetCell.linkTile(cellWithTile.linkedTile)
		} else {
			targetCell.linkTileForMerge(cellWithTile.linkedTile)
		}

		cellWithTile.unlinkTile()
	}
}
