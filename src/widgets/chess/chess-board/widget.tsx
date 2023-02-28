import React from 'react'
import { ChessBoard, ChessPlayer } from '@/entities/chess/model'
import { ChessColors } from '@/entities/chess/config'
import { ChessBoardComponent } from './ChessBoardComponent'

export const ChessBoardWidget = () => {
	const [chessBoard, setChessBoard] = React.useState(new ChessBoard())
	const [whitePlayer, setWhitePlayer] = React.useState<ChessPlayer>(
		new ChessPlayer(ChessColors.WHITE)
	)
	const [blackPlayer, setBlackPlayer] = React.useState<ChessPlayer>(
		new ChessPlayer(ChessColors.BLACK)
	)
	const [currentPlayer, setCurrentPlayer] = React.useState<ChessPlayer | null>(
		null
	)

	const restart = () => {
		const newBoard = new ChessBoard()
		newBoard.initCells()
		newBoard.addFigures()
		setChessBoard(newBoard)
	}

	const changePlayer = () => {
		setCurrentPlayer(
			currentPlayer?.color == ChessColors.WHITE ? blackPlayer : whitePlayer
		)
	}

	React.useEffect(() => {
		restart()
		setCurrentPlayer(whitePlayer)
	}, [])

	return (
		<ChessBoardComponent
			board={chessBoard}
			setBoard={setChessBoard}
			currentPlayer={currentPlayer}
			changePlayer={changePlayer}
		/>
	)
}
