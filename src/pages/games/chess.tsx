import React from 'react'
import { WithLayout } from '@/app/providers/layout'
import { NextPageWithLayout } from '@/pages/_app'
import { ChessBoardComponent } from '@/widgets/chess'
import styled from 'styled-components'
import { ChessBoard, ChessPlayer } from '@/entities/chess/model'
import { ChessColors } from '@/entities/chess/config'

const Chess: NextPageWithLayout = () => {
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
		<Wrapper>
			<ChessBoardComponent
				board={chessBoard}
				setBoard={setChessBoard}
				currentPlayer={currentPlayer}
				changePlayer={changePlayer}
			/>
		</Wrapper>
	)
}

const Wrapper = styled.div`
	display: flex;
	align-items: center;
	justify-content: center;
`

Chess.getLayout = function getLayout(page) {
	return <WithLayout>{page}</WithLayout>
}

export default Chess
