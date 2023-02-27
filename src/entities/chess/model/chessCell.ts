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

	moveFigure(target: ChessCell) {
		if (this.figure && this.figure.canMove(target)) {
			this.figure.moveFigure(target)
			target.figure = this.figure
			this.figure = null
		}
	}
}
