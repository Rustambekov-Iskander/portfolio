import React from 'react'
import styled from 'styled-components'

export const ChessBoard = () => {
	return (
		<Board>
			<Cell color={'white'} />
			<Cell color={'black'} />
			<Cell color={'white'} />
			<Cell color={'black'} />
			<Cell color={'white'} />
			<Cell color={'black'} />
			<Cell color={'white'} />
			<Cell color={'black'} />

			<Cell color={'black'} />
			<Cell color={'white'} />
			<Cell color={'black'} />
			<Cell color={'white'} />
			<Cell color={'black'} />
			<Cell color={'white'} />
			<Cell color={'black'} />
			<Cell color={'white'} />

			<Cell color={'white'} />
			<Cell color={'black'} />
			<Cell color={'white'} />
			<Cell color={'black'} />
			<Cell color={'white'} />
			<Cell color={'black'} />
			<Cell color={'white'} />
			<Cell color={'black'} />

			<Cell color={'black'} />
			<Cell color={'white'} />
			<Cell color={'black'} />
			<Cell color={'white'} />
			<Cell color={'black'} />
			<Cell color={'white'} />
			<Cell color={'black'} />
			<Cell color={'white'} />

			<Cell color={'white'} />
			<Cell color={'black'} />
			<Cell color={'white'} />
			<Cell color={'black'} />
			<Cell color={'white'} />
			<Cell color={'black'} />
			<Cell color={'white'} />
			<Cell color={'black'} />

			<Cell color={'black'} />
			<Cell color={'white'} />
			<Cell color={'black'} />
			<Cell color={'white'} />
			<Cell color={'black'} />
			<Cell color={'white'} />
			<Cell color={'black'} />
			<Cell color={'white'} />

			<Cell color={'white'} />
			<Cell color={'black'} />
			<Cell color={'white'} />
			<Cell color={'black'} />
			<Cell color={'white'} />
			<Cell color={'black'} />
			<Cell color={'white'} />
			<Cell color={'black'} />

			<Cell color={'black'} />
			<Cell color={'white'} />
			<Cell color={'black'} />
			<Cell color={'white'} />
			<Cell color={'black'} />
			<Cell color={'white'} />
			<Cell color={'black'} />
			<Cell color={'white'} />
		</Board>
	)
}

const Board = styled.div`
	border: black solid;
	display: grid;
	grid-template: repeat(8, 10vmin) / repeat(8, 10vmin);
`

interface CellProps {
	color: 'black' | 'white'
}
const Cell = styled.div<CellProps>`
	background-color: ${(props) =>
		props.color === 'black' ? '#5d825d' : 'antiquewhite'};
	color: antiquewhite;
	display: flex;
	align-items: center;
	justify-content: center;
`
