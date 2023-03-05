import React from 'react'
import { Card as CardMui } from '@mui/material'
import styled from 'styled-components'

interface SimpleCardProps {
	img?: string
	title?: string
	description?: string
	axis?: 'vertical' | 'horizontal'
}
export const SimpleCard: React.FC<SimpleCardProps> = ({
	img,
	description,
	title,
	axis = 'vertical',
}) => {
	return (
		<Card axis={axis}>
			{img && (
				<div>
					<img src={img} alt="" />
				</div>
			)}
			<div>
				<h4>{title}</h4>
				<p>{description}</p>
			</div>
		</Card>
	)
}

interface CardStyleProps {
	axis: 'vertical' | 'horizontal'
}
const Card = styled(CardMui)<CardStyleProps>`
	display: flex;
	align-items: center;
	justify-content: center;
	flex-direction: ${({ axis }) => (axis === 'vertical' ? 'column' : 'row')};
	gap: 0 10px;
	color: white;
	padding: 20px 25px;
	background-color: transparent;
	transition: 0.2s;
	box-shadow: 0 0 6px black;

	&:hover {
		background-color: rgb(0, 0, 0, 0.2);
		box-shadow: none;
	}

	div img {
		width: 100%;
		height: 100%;
		max-width: 200px;
		max-height: 200px;
		object-fit: contain;
	}
`
