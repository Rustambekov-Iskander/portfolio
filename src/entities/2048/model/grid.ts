import { Cell } from '@/entities/2048/model/cell'

const GRID_SIZE = 4
const CELLS_COUNT = GRID_SIZE * GRID_SIZE

export class Grid {
	public cells: Cell[]

	public cellsGroupByColumn: Array<any>
	public cellsGroupByReverseColumn: Array<any>
	public cellsGroupByRow: Array<any>
	public cellsGroupByReverseRow: any[][]

	constructor() {
		this.cells = []
		for (let i = 0; i < CELLS_COUNT; ++i) {
			this.cells.push(new Cell(i % GRID_SIZE, Math.floor(i / GRID_SIZE)))
		}
		this.cellsGroupByColumn = this.groupCellsByColumn()
		this.cellsGroupByReverseColumn = this.cellsGroupByColumn.map((column) =>
			[...column].reverse()
		)
		this.cellsGroupByRow = this.groupCellsByRow()
		this.cellsGroupByReverseRow = this.cellsGroupByRow.map((column) =>
			[...column].reverse()
		)
	}

	getRandomEmptyCell() {
		const emptyCells = this.cells.filter((cell) => cell.isEmpty())
		const randomIndex = Math.floor(Math.random() * emptyCells.length)
		return emptyCells[randomIndex]
	}

	groupCellsByColumn() {
		return this.cells.reduce((groupedCells: Array<any>, cell) => {
			groupedCells[cell.x] = groupedCells[cell.x] || []
			groupedCells[cell.x][cell.y] = cell
			return groupedCells
		}, [])
	}

	groupCellsByRow() {
		return this.cells.reduce((groupedCells: Array<any>, cell) => {
			groupedCells[cell.y] = groupedCells[cell.y] || []
			groupedCells[cell.y][cell.x] = cell
			return groupedCells
		}, [])
	}

	getCopyBoard() {
		const newBoard = new Grid()
		newBoard.cells = this.cells
		return newBoard
	}
}
