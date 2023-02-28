import {
	ChessFigure,
	FigureNames,
} from '@/entities/chess/model/figures/chessFigure'
import { ChessColors, chessImg } from '@/entities/chess/config'
import { ChessCell } from '@/entities/chess/model'

export class Pawn extends ChessFigure {
	isFirstStep: Boolean = true

	constructor(color: ChessColors, cell: ChessCell) {
		super(color, cell)
		this.logo =
			color === ChessColors.WHITE ? chessImg.whitePawn : chessImg.blackPawn
		this.name = FigureNames.PAWN
	}
	canMove(target: ChessCell): boolean {
		if (!super.canMove(target)) return false
		const direction = this.color === ChessColors.BLACK ? 1 : -1
		const firstStepDirection = this.color === ChessColors.BLACK ? 2 : -2

		// Y-axis movement
		if (
			(target.y === this.cell.y + direction ||
				(this.isFirstStep && target.y === this.cell.y + firstStepDirection)) &&
			this.cell.x === target.x &&
			this.cell.board.getCell(this.cell.x, this.cell.y + direction).isEmpty() &&
			this.cell.board.getCell(target.x, target.y).isEmpty()
		) {
			return true
		}

		// eat a figure
		if (
			target.y === this.cell.y + direction &&
			(target.x === this.cell.x + 1 || target.x === this.cell.x - 1) &&
			this.cell.isEnemy(target)
		) {
			return true
		}

		return false
	}

	moveFigure(target: ChessCell) {
		super.moveFigure(target)
		this.isFirstStep = false
	}
}
