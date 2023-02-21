import React from 'react'
import styled from 'styled-components'
import TileComponent from '@/entities/2048/ui/Tile'
import { Grid, Tile } from '@/entities/2048/model'
import { removeInputOnce, setupInputOnce } from '@/entities/2048/config'
import { AlertModal } from '@/features/modal'

const Board: React.FC = () => {
	const [board, setBoard] = React.useState(new Grid())

	const rerenderBoard = () => {
		setBoard(board.getCopyBoard())
		setupInputOnce(board, rerenderBoard)
	}

	React.useEffect(() => {
		rerenderBoard()
		board.getRandomEmptyCell()?.linkTile(new Tile())
		return () => {
			removeInputOnce(board, rerenderBoard)
		}
	}, [])

	return (
		<Wrapper>
			<GameBoard gridSize={4}>
				{board.cells.map((cell) => (
					<Cell key={`${cell.x}-${cell.y}`} />
				))}

				{board.cells.map((cell) =>
					cell.linkedTile ? (
						<TileComponent
							linkedTile={cell.linkedTile}
							key={cell.linkedTile.id}
						/>
					) : null
				)}
			</GameBoard>
			{board.status === 'defeat' ? (
				<AlertModal title={"You've lost(("} />
			) : null}
		</Wrapper>
	)
}

interface GameBoardProps {
	gridSize?: number
}

const Wrapper = styled.div`
	display: flex;
	align-items: center;
	justify-content: center;
	background-color: #333;
	padding: 20px;
`

const GameBoard = styled.div<GameBoardProps>`
	position: relative;
	display: grid;
	grid-template-columns: repeat(${(props) => props?.gridSize || 4}, 20vmin);
	grid-template-rows: repeat(${(props) => props?.gridSize || 4}, 20vmin);
	gap: 2vmin;
	border-radius: 1vmin;
`

const Cell = styled.div`
	background-color: #444;
	border-radius: 1vmin;
`

export default Board
