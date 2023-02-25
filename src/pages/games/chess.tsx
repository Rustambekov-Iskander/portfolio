import React from 'react'
import { WithLayout } from '@/app/providers/layout'
import { NextPageWithLayout } from '@/pages/_app'
import { ChessBoardComponent } from '@/widgets/chess'
import styled from 'styled-components'
import { ChessBoard } from '@/entities/chess/model'

const Chess: NextPageWithLayout = () => {
	const [chessBoard, setChessBoard] = React.useState(new ChessBoard())

	const restart = () => {
		const newBoard = new ChessBoard()
		newBoard.initCells()
		newBoard.addFigures()
		setChessBoard(newBoard)
	}

	React.useEffect(() => {
		restart()
	}, [])

	return (
		<Wrapper>
			<ChessBoardComponent board={chessBoard} setBoard={setChessBoard} />
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
