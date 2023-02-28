import React from 'react'
import styled from 'styled-components'
import { ChessBoard, ChessCell, ChessPlayer } from '@/entities/chess/model'
import { ChessCellComponent } from '@/entities/chess/ui'
import { ChessColors } from '@/entities/chess/config'

interface ChessBoardComponentProps {
	board: ChessBoard
	setBoard: (board: ChessBoard) => void
	currentPlayer: ChessPlayer | null
	changePlayer: () => void
}

export const ChessBoardComponent: React.FC<ChessBoardComponentProps> = ({
	board,
	setBoard,
	changePlayer,
	currentPlayer,
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
			changePlayer()
			return
		} else {
			// if click twice on the same cell we will clear selectedCell
			if (cell === selectedCell) setSelectedCell(null)
			// can only walk with your own figures
			else if (cell.figure && currentPlayer?.color === cell.figure.color)
				setSelectedCell(cell)

			// clear selectedCell if click on empty cell
			if (!cell?.figure && selectedCell) setSelectedCell(null)
		}
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
