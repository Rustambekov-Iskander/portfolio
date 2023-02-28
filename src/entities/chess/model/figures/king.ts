import {
	ChessFigure,
	FigureNames,
} from '@/entities/chess/model/figures/chessFigure'
import { ChessColors, chessImg } from '@/entities/chess/config'
import { ChessCell } from '@/entities/chess/model'

export class King extends ChessFigure {
	constructor(color: ChessColors, cell: ChessCell) {
		super(color, cell)
		this.logo =
			color === ChessColors.WHITE ? chessImg.whiteKing : chessImg.blackKing
		this.name = FigureNames.KING
	}
	canMove(target: ChessCell): boolean {
		if (!super.canMove(target)) return false

		const absX = Math.abs(target.x - this.cell.x)
		const absY = Math.abs(target.y - this.cell.y)
		if (absX <= 1 && absY <= 1) return true
		return false
	}
}
