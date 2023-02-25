import { ChessColors, chessImg } from '@/entities/chess/config'
import { ChessCell } from '@/entities/chess/model'

export enum FigureNames {
	FIGURE = 'Figure',
	KING = 'King',
	QUEEN = 'Queen',
	KNIGHT = 'Knight',
	ROOK = 'Rook',
	BISHOP = 'Bishop',
	PAWN = 'Pawn',
}

export class ChessFigure {
	color: ChessColors
	logo: typeof chessImg.blackBishop | null
	cell: ChessCell
	name: FigureNames
	id: number

	constructor(color: ChessColors, cell: ChessCell) {
		this.color = color
		this.cell = cell
		this.cell.figure = this
		this.logo = null
		this.name = FigureNames.FIGURE
		this.id = Math.random()
	}

	canMove(target: ChessCell): boolean {
		return true
	}

	moveFigure(target: ChessCell) {}
}
