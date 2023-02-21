import { Cell, Grid, Tile } from '@/entities/2048/model'
import { slideTiles } from '@/entities/2048/config/slide-tiles'

export const setupInputOnce = (gameBoard: Grid, update: () => void) => {
	if (gameBoard.status === 'defeat') return
	window.addEventListener('keydown', (e) => handleInput(e, gameBoard, update), {
		once: true,
	})
}
export const removeInputOnce = (gameBoard: Grid, update: () => void) => {
	window.removeEventListener('keydown', (e) =>
		handleInput(e, gameBoard, update)
	)
}

function handleInput(
	event: KeyboardEvent,
	gameBoard: Grid,
	update: () => void
) {
	if (gameBoard.status === 'defeat') return
	if (
		!canMove(gameBoard.cellsGroupByColumn) &&
		!canMove(gameBoard.cellsGroupByReverseColumn) &&
		!canMove(gameBoard.cellsGroupByRow) &&
		!canMove(gameBoard.cellsGroupByReverseRow)
	) {
		gameBoard.defeat()
	} else {
		switch (event.key) {
			case 'ArrowUp':
				moveUp(gameBoard)
				break
			case 'ArrowDown':
				moveDown(gameBoard)
				break
			case 'ArrowLeft':
				moveLeft(gameBoard)
				break
			case 'ArrowRight':
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
