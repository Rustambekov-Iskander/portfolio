import React from 'react'
import styled from 'styled-components'
import { ChessBoard } from '@/entities/chess/model'
import { ChessCellComponent } from '@/entities/chess/ui'

interface ChessBoardComponentProps {
	board: ChessBoard
	setBoard: (board: ChessBoard) => void
}

export const ChessBoardComponent: React.FC<ChessBoardComponentProps> = ({
	board,
	setBoard,
}) => {
	return (
		<Board>
			{board.cells?.map((cellRow, index) => (
				<React.Fragment key={index}>
					{cellRow.map((cell) => (
						<ChessCellComponent key={cell.id} cell={cell} />
					))}
				</React.Fragment>
			))}
		</Board>
	)
}

const Board = styled.div`
	border: black solid;
	display: grid;
	grid-template: repeat(8, 10vmin) / repeat(8, 10vmin);
`
