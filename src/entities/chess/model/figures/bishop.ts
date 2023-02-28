import {
	ChessFigure,
	FigureNames,
} from '@/entities/chess/model/figures/chessFigure'
import { ChessColors, chessImg } from '@/entities/chess/config'
import { ChessCell } from '@/entities/chess/model'

export class Bishop extends ChessFigure {
	constructor(color: ChessColors, cell: ChessCell) {
		super(color, cell)
		this.logo =
			color === ChessColors.WHITE ? chessImg.whiteBishop : chessImg.blackBishop
		this.name = FigureNames.BISHOP
	}

	canMove(target: ChessCell): boolean {
		if (!super.canMove(target)) return false
		if (this.cell.isEmptyDiagonal(target)) return true
		return false
	}
}
