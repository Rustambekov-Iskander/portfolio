import { ChessCell } from '@/entities/chess/model'
import { ChessColors } from '@/entities/chess/config'
import {
	Bishop,
	King,
	Knight,
	Pawn,
	Queen,
	Rook,
} from '@/entities/chess/model/figures'

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

	getCell(x: number, y: number) {
		return this.cells[y][x]
	}

	private addPawns() {
		for (let i = 0; i < 8; i++) {
			new Pawn(ChessColors.WHITE, this.getCell(i, 6))
			new Pawn(ChessColors.BLACK, this.getCell(i, 1))
		}
	}
	private addKings() {
		new King(ChessColors.WHITE, this.getCell(4, 7))
		new King(ChessColors.BLACK, this.getCell(4, 0))
	}
	private addRooks() {
		new Rook(ChessColors.WHITE, this.getCell(0, 7))
		new Rook(ChessColors.WHITE, this.getCell(7, 7))

		new Rook(ChessColors.BLACK, this.getCell(0, 0))
		new Rook(ChessColors.BLACK, this.getCell(7, 0))
	}
	private addKnights() {
		new Knight(ChessColors.WHITE, this.getCell(1, 7))
		new Knight(ChessColors.WHITE, this.getCell(6, 7))

		new Knight(ChessColors.BLACK, this.getCell(1, 0))
		new Knight(ChessColors.BLACK, this.getCell(6, 0))
	}
	private addQueens() {
		new Queen(ChessColors.WHITE, this.getCell(3, 7))
		new Queen(ChessColors.BLACK, this.getCell(3, 0))
	}
	private addBishops() {
		new Bishop(ChessColors.WHITE, this.getCell(2, 7))
		new Bishop(ChessColors.WHITE, this.getCell(5, 7))

		new Bishop(ChessColors.BLACK, this.getCell(2, 0))
		new Bishop(ChessColors.BLACK, this.getCell(5, 0))
	}

	addFigures() {
		this.addKings()
		this.addPawns()
		this.addBishops()
		this.addQueens()
		this.addRooks()
		this.addKnights()
	}
}
