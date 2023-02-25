import { ChessCell } from '@/entities/chess/model'
import { ChessColors } from '@/entities/chess/config'

export class ChessBoard {
	cells: ChessCell[][] = []

	public initCells() {
		for (let i = 0; i < 8; i++) {
			const row: ChessCell[] = []
			for (let j = 0; j < 8; j++) {
				if ((i + j) % 2 != 0) {
					row.push(new ChessCell(this, j, i, ChessColors.BLACK, null)) // black cell
				} else {
					row.push(new ChessCell(this, j, i, ChessColors.WHITE, null)) // white cell
				}
			}
			this.cells.push(row)
		}
	}
}
