import { Cell, Tile } from '@/entities/2048/model'

const GRID_SIZE = 4
const CELLS_COUNT = GRID_SIZE * GRID_SIZE

export class Grid {
	public cells: Cell[]

	public cellsGroupByColumn: Array<Cell[]>
	public cellsGroupByReverseColumn: Array<Cell[]>
	public cellsGroupByRow: Array<Cell[]>
	public cellsGroupByReverseRow: Array<Cell[]>
	public score: number
	public status: 'defeat' | 'inGame' | 'victory'

	constructor() {
		this.cells = []
		for (let i = 0; i < CELLS_COUNT; ++i) {
			this.cells.push(new Cell(i % GRID_SIZE, Math.floor(i / GRID_SIZE)))
		}

		// grouping cells
		this.cellsGroupByColumn = this.groupCellsByColumn()
		this.cellsGroupByReverseColumn = this.cellsGroupByColumn.map((column) =>
			[...column].reverse()
		)
		this.cellsGroupByRow = this.groupCellsByRow()
		this.cellsGroupByReverseRow = this.cellsGroupByRow.map((column) =>
			[...column].reverse()
		)
		// ================
		this.score = 0
		this.status = 'inGame'
	}

	getRandomEmptyCell() {
		const emptyCells = this.cells.filter((cell) => cell.isEmpty())
		const randomIndex = Math.floor(Math.random() * emptyCells.length)
		return emptyCells[randomIndex]
	}

	reset() {
		const newBoard = new Grid()
		newBoard.getRandomEmptyCell().linkTile(new Tile())
		newBoard.getRandomEmptyCell().linkTile(new Tile())
		this.cells = newBoard.cells
	}

	getScore() {
		return this.cells.reduce((score, currentCell) => {
			return (score += currentCell?.linkedTile?.value || 0)
		}, 0)
	}

	getCopyBoard() {
		const newBoard = new Grid()
		newBoard.cells = this.cells
		newBoard.status = this.status
		newBoard.score = this.getScore()
		return newBoard
	}

	// ==== grouping cells ====
	groupCellsByColumn() {
		return this.cells.reduce((groupedCells: Array<Cell[]>, cell) => {
			groupedCells[cell.x] = groupedCells[cell.x] || []
			groupedCells[cell.x][cell.y] = cell
			return groupedCells
		}, [])
	}

	groupCellsByRow() {
		return this.cells.reduce((groupedCells: Array<Cell[]>, cell) => {
			groupedCells[cell.y] = groupedCells[cell.y] || []
			groupedCells[cell.y][cell.x] = cell
			return groupedCells
		}, [])
	}

	defeat() {
		this.status = 'defeat'
	}
	victory() {
		this.status = 'victory'
	}
	inGame() {
		this.status = 'inGame'
	}
	// ========================
}
