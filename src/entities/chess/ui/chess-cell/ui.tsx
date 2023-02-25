import React from 'react'
import styled from 'styled-components'
import { theme } from '@/shared/config'
import { ChessCell } from '@/entities/chess/model'

interface ChessCellComponentProps {
	cell: ChessCell
}

export const ChessCellComponent: React.FC<ChessCellComponentProps> = ({
	cell,
}) => {
	return (
		<Cell color={cell.color}>
			{cell?.figure?.logo ? (
				<img src={cell.figure.logo.src} alt={cell.figure?.name} />
			) : null}
		</Cell>
	)
}

interface CellStyleProps {
	color: 'black' | 'white'
}
const Cell = styled.div<CellStyleProps>`
	background-color: ${(props) =>
		props.color === 'black' ? theme.colors.darkGreen : '#edeed1'};
	color: antiquewhite;
	display: flex;
	align-items: center;
	justify-content: center;

	img {
		width: 9vmin;
		height: 9vmin;
		object-fit: contain;
	}
`
