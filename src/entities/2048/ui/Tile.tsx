import React from 'react'
import styled from 'styled-components'
import { Tile as TileType } from '@/entities/2048/model'

interface TileProps {
	linkedTile: TileType
}

const Tile: React.FC<TileProps> = ({ linkedTile }) => {
	return <TileDiv linkedTile={linkedTile}>{linkedTile.value}</TileDiv>
}

const TileDiv = styled.div<TileProps>`
	display: flex;
	align-items: center;
	justify-content: center;

	position: absolute;
	top: calc(${(props) => props.linkedTile.y} * (20vmin + 2vmin));
	left: calc(${(props) => props.linkedTile.x} * (20vmin + 2vmin));
	width: 20vmin;
	height: 20vmin;

	background-color: hsl(
		25,
		60%,
		${(props) => props.linkedTile?.bgLightness || 10}%
	);
	color: hsl(25, 25%, ${(props) => props.linkedTile?.textLightness || 10}%);

	border-radius: 1vmin;
	font-size: 7.5vmin;
	font-weight: bold;

	transition: 100ms;
	animation: show 200ms;

	@keyframes show {
		from {
			opacity: 0;
			transform: scale(0);
		}
	}
`

export default Tile
