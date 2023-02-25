import { Cell, Grid, Tile } from '@/entities/2048/model'
import { slideTiles } from '@/entities/2048/config/slide-tiles'

type DirectionType = 'up' | 'right' | 'down' | 'left'

export function handleInput(
	direction: DirectionType,
	gameBoard: Grid,
	update: () => void
) {
	gameBoard.isVictory()
	gameBoard.groupCellsByColumn()
	gameBoard.groupCellsByRow()

	if (gameBoard.status === 'defeat') return

	if (
		!canMove(gameBoard.cellsGroupByColumn) && // up
		!canMove(gameBoard.cellsGroupByReverseColumn) && // down
		!canMove(gameBoard.cellsGroupByRow) && // left
		!canMove(gameBoard.cellsGroupByReverseRow) // right
	) {
		gameBoard.defeat()
	} else {
		switch (direction) {
			case 'up':
				moveUp(gameBoard)
				break
			case 'down':
				moveDown(gameBoard)
				break
			case 'left':
				moveLeft(gameBoard)
				break
			case 'right':
				moveRight(gameBoard)
				break
		}
	}
	update()
}

function moveUp(gameBoard: Grid) {
	const groupedCells = gameBoard.cellsGroupByColumn
	if (!canMove(groupedCells)) return
	slideTiles(groupedCells, gameBoard)

	const randomEmptyCell = gameBoard.getRandomEmptyCell()
	randomEmptyCell && randomEmptyCell.linkTile(new Tile())
}
function moveDown(gameBoard: Grid) {
	const groupedCells = gameBoard.cellsGroupByReverseColumn

	if (!canMove(groupedCells)) return
	slideTiles(groupedCells, gameBoard)

	const randomEmptyCell = gameBoard.getRandomEmptyCell()
	randomEmptyCell && randomEmptyCell.linkTile(new Tile())
}
function moveLeft(gameBoard: Grid) {
	const groupedCells = gameBoard.cellsGroupByRow

	if (!canMove(groupedCells)) return
	slideTiles(groupedCells, gameBoard)

	const randomEmptyCell = gameBoard.getRandomEmptyCell()
	randomEmptyCell && randomEmptyCell.linkTile(new Tile())
}
function moveRight(gameBoard: Grid) {
	const groupedCells = gameBoard.cellsGroupByReverseRow

	if (!canMove(groupedCells)) return
	slideTiles(groupedCells, gameBoard)

	const randomEmptyCell = gameBoard.getRandomEmptyCell()
	randomEmptyCell && randomEmptyCell.linkTile(new Tile())
}

function canMove(groupedCells: Array<Cell[]>) {
	return groupedCells.some((cell) => canMoveInGroup(cell))
}
function canMoveInGroup(group: Cell[]) {
	return group.some((cell, index) => {
		if (index === 0) return false
		if (cell.isEmpty()) return false
		const targetCell = group[index - 1]
		return targetCell.canAccept(cell.linkedTile)
	})
}
