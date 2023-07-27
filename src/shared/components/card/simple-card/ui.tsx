import React from 'react'
import { Card as CardMui } from '@mui/material'
import styled from 'styled-components'
import Image from 'next/image'

interface SimpleCardProps {
	img?: string
	title?: string
	description?: string
	onClick?: () => void
}
export const SimpleCard: React.FC<SimpleCardProps> = ({
	img,
	description,
	title,
	onClick,
}) => {
	return (
		<Card onClick={onClick}>
			{img ? <Image width={400} height={400} src={img} alt="" /> : null}
			<div>
				<h4>{title}</h4>
				<p>{description}</p>
			</div>
		</Card>
	)
}

const Card = styled(CardMui)`
	display: flex;
	align-items: center;
	justify-content: center;
	flex-direction: column;
	gap: 0 10px;
	color: white;
	padding: 20px 25px;
	background-color: transparent;
	transition: 0.2s;
	box-shadow: 0 0 6px black;

	cursor: pointer;

	&:hover {
		background-color: rgb(0, 0, 0, 0.2);
		box-shadow: none;
	}

	img {
		width: 100%;
		height: 100%;
		max-width: 400px;
		max-height: 400px;
		object-fit: contain;
	}
`
