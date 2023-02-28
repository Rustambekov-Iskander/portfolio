import { ChessColors } from '@/entities/chess/config'
import { ChessFigure } from '@/entities/chess/model/figures/chessFigure'
import { ChessBoard } from '@/entities/chess/model/chessBoard'

export class ChessCell {
	readonly x: number
	readonly y: number
	readonly color: ChessColors
	figure: ChessFigure | null
	board: ChessBoard
	available: boolean // can move with this figure
	id: number

	constructor(
		board: ChessBoard,
		x: number,
		y: number,
		color: ChessColors,
		figure: ChessFigure | null
	) {
		this.x = x
		this.y = y
		this.color = color
		this.figure = figure
		this.board = board
		this.available = false
		this.id = Math.random()
	}

	setFigure(figure: ChessFigure) {
		this.figure = figure
		this.figure.cell = this
	}

	isEmpty(): boolean {
		return this.figure === null
	}

	isEnemy(target: ChessCell): boolean {
		if (target.figure && this.figure) {
			return this.figure.color !== target.figure?.color
		}
		return false
	}

	isEmptyVertical(target: ChessCell): boolean {
		if (this.x !== target.x) return false
		const min = Math.min(target.y, this.y)
		const max = Math.max(target.y, this.y)

		for (let y = min + 1; y < max; y++) {
			if (!this.board.getCell(this.x, y).isEmpty()) return false
		}

		return true
	}

	isEmptyHorizontal(target: ChessCell): boolean {
		if (this.y !== target.y) return false
		const min = Math.min(target.x, this.x)
		const max = Math.max(target.x, this.x)

		for (let x = min + 1; x < max; x++) {
			if (!this.board.getCell(x, this.y).isEmpty()) return false
		}

		return true
	}

	isEmptyDiagonal(target: ChessCell) {
		const absX = Math.abs(target.x - this.x)
		const absY = Math.abs(target.y - this.y)
		if (absX !== absY) return false

		const dy = this.y < target.y ? 1 : -1
		const dx = this.x < target.x ? 1 : -1

		for (let i = 1; i < absY; i++) {
			if (!this.board.getCell(this.x + dx * i, this.y + dy * i).isEmpty())
				return false
		}
		return true
	}

	moveFigure(target: ChessCell) {
		if (this.figure && this.figure.canMove(target)) {
			this.figure.moveFigure(target)
			target.setFigure(this.figure)
			this.figure = null
		}
	}
}
