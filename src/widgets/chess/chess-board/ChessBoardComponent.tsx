import React from 'react'
import styled from 'styled-components'
import { ChessBoard, ChessCell } from '@/entities/chess/model'
import { ChessCellComponent } from '@/entities/chess/ui'

interface ChessBoardComponentProps {
	board: ChessBoard
	setBoard: (board: ChessBoard) => void
}

export const ChessBoardComponent: React.FC<ChessBoardComponentProps> = ({
	board,
	setBoard,
}) => {
	const [selectedCell, setSelectedCell] = React.useState<ChessCell | null>(null)

	const handleClick = (cell: ChessCell) => {
		//move figure
		if (
			selectedCell &&
			selectedCell !== cell &&
			selectedCell.figure?.canMove(cell)
		) {
			selectedCell.moveFigure(cell)
			setSelectedCell(null)
			return
		}

		// if click twice on the same cell we will clear selectedCell
		else if (cell === selectedCell) setSelectedCell(null)
		else if (cell?.figure) setSelectedCell(cell)

		// if (!cell?.figure && selectedCell) setSelectedCell(null)
	}

	const updateBoard = () => {
		setBoard(board.getCopyBoard())
	}

	const highLightCells = () => {
		board.highLightCells(selectedCell)
		updateBoard()
	}

	React.useEffect(() => {
		highLightCells()
	}, [selectedCell])

	return (
		<Board>
			{board.cells?.map((cellRow, index) => (
				<React.Fragment key={index}>
					{cellRow.map((cell) => (
						<ChessCellComponent
							key={cell.id}
							cell={cell}
							selected={selectedCell}
							onClick={handleClick}
						/>
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
