import {
	ChessFigure,
	FigureNames,
} from '@/entities/chess/model/figures/chessFigure'
import { ChessColors, chessImg } from '@/entities/chess/config'
import { ChessCell } from '@/entities/chess/model'

export class Queen extends ChessFigure {
	constructor(color: ChessColors, cell: ChessCell) {
		super(color, cell)
		this.logo =
			color === ChessColors.WHITE ? chessImg.whiteQueen : chessImg.blackQueen
		this.name = FigureNames.QUEEN
	}
	canMove(target: ChessCell): boolean {
		if (!super.canMove(target)) return false
		if (this.cell.isEmptyVertical(target)) return true
		if (this.cell.isEmptyHorizontal(target)) return true
		if (this.cell.isEmptyDiagonal(target)) return true
		return false
	}
}
