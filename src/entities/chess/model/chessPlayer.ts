import { ChessColors } from '@/entities/chess/config'

export class ChessPlayer {
	public color: ChessColors

	constructor(color: ChessColors) {
		this.color = color
	}
}
