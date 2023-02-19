import { Grid, Tile } from '@/entities/2048/model'
import { slideTiles } from '@/entities/2048/config/slide-tiles'

export const setupInputOnce = (gameBoard: Grid, update: () => void) => {
	window.addEventListener('keydown', (e) => handleInput(e, gameBoard, update), {
		once: true,
	})
}

function handleInput(
	event: KeyboardEvent,
	gameBoard: Grid,
	update: () => void
) {
	switch (event.key) {
		case 'ArrowUp':
			moveUp(gameBoard, update)
			break
		case 'ArrowDown':
			moveDown(gameBoard, update)
			break
		case 'ArrowLeft':
			moveLeft(gameBoard, update)
			break
		case 'ArrowRight':
			moveRight(gameBoard, update)
			break
		default:
			setupInputOnce(gameBoard, update)
			update()
			return
	}
	setupInputOnce(gameBoard, update)
	update()
}

function moveUp(gameBoard: Grid, update: () => void) {
	slideTiles(gameBoard.cellsGroupByColumn, gameBoard, update)
	const randomEmptyCell = gameBoard.getRandomEmptyCell()
	randomEmptyCell && randomEmptyCell.linkTile(new Tile())
}
function moveDown(gameBoard: Grid, update: () => void) {
	slideTiles(gameBoard.cellsGroupByReverseColumn, gameBoard, update)
	const randomEmptyCell = gameBoard.getRandomEmptyCell()
	randomEmptyCell && randomEmptyCell.linkTile(new Tile())
}
function moveLeft(gameBoard: Grid, update: () => void) {
	slideTiles(gameBoard.cellsGroupByRow, gameBoard, update)
	const randomEmptyCell = gameBoard.getRandomEmptyCell()
	randomEmptyCell && randomEmptyCell.linkTile(new Tile())
}
function moveRight(gameBoard: Grid, update: () => void) {
	slideTiles(gameBoard.cellsGroupByReverseRow, gameBoard, update)
	const randomEmptyCell = gameBoard.getRandomEmptyCell()
	randomEmptyCell && randomEmptyCell.linkTile(new Tile())
}
