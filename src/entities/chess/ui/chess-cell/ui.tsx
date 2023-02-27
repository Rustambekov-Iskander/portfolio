import React from 'react'
import styled from 'styled-components'
import { theme } from '@/shared/config'
import { ChessCell } from '@/entities/chess/model'

interface ChessCellComponentProps {
	cell: ChessCell
	selected: ChessCell | null
	onClick: (cell: ChessCell) => void
}

export const ChessCellComponent: React.FC<ChessCellComponentProps> = ({
	cell,
	selected,
	onClick,
}) => {
	const handleClick = () => {
		onClick(cell)
	}

	return (
		<Cell
			color={cell.color}
			selected={cell.x === selected?.x && cell.y === selected?.y}
			onClick={handleClick}
			available={cell?.available && !cell.figure}
		>
			{cell?.available ? <Motion figure={!!cell.figure} /> : null}
			{cell?.figure?.logo ? (
				<img src={cell.figure.logo.src} alt={cell.figure?.name} />
			) : null}
		</Cell>
	)
}

interface CellStyleProps {
	color: 'black' | 'white'
	selected: boolean
	available: boolean
}
const Cell = styled.div<CellStyleProps>`
	position: relative;
	background-color: ${(props) => {
		if (props.selected) {
			if (props.color === 'black') return 'rgb(237,225,98)'
			else return 'rgba(255,243,95, 1)'
		}
		if (props.color === 'black') return theme.colors.darkGreen
		else return '#edeed1'
	}};
	color: antiquewhite;
	display: flex;
	align-items: center;
	justify-content: center;

	img {
		width: 9vmin;
		height: 9vmin;
		object-fit: contain;
		cursor: pointer;
	}
`

interface MotionProps {
	figure: boolean
}
const Motion = styled.div<MotionProps>`
	content: '';
	cursor: pointer;
	position: absolute;
	margin: 0 auto;
	${(props) =>
		props.figure
			? `
		width: 95%;
		height: 95%;
		border: 6px solid rgb(0, 0, 0, 0.1);
		border-radius: 50%;`
			: `
		width: 2.5vmin;
		height: 2.5vmin;
		background-color: rgb(0, 0, 0, 0.2);
		border-radius: 50%;
	`}
`
