import {
	ChessFigure,
	FigureNames,
} from '@/entities/chess/model/figures/chessFigure'
import { ChessColors, chessImg } from '@/entities/chess/config'
import { ChessCell } from '@/entities/chess/model'

export class Knight extends ChessFigure {
	constructor(color: ChessColors, cell: ChessCell) {
		super(color, cell)
		this.logo =
			color === ChessColors.WHITE ? chessImg.whiteKnight : chessImg.blackKnight
		this.name = FigureNames.KNIGHT
	}
	canMove(target: ChessCell): boolean {
		if (!super.canMove(target)) return false

		const dx = Math.abs(this.cell.x - target.x)
		const dy = Math.abs(this.cell.y - target.y)

		return (dx === 1 && dy === 2) || (dx === 2 && dy === 1)
	}
}
