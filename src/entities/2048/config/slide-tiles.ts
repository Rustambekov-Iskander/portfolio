import { Cell } from '@/entities/2048/model/cell'
import { Grid } from '@/entities/2048/model/grid'

export function slideTiles(
	groupedCells: any,
	gameBoard: Grid,
	update: () => void
) {
	groupedCells.forEach((group: any) => slideTilesInGroup(group, update))
	gameBoard.cells.forEach((cell) => {
		cell.hasTileForMerge() && cell.mergeTiles()
	})
}

function slideTilesInGroup(group: Cell[], update: () => void) {
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
