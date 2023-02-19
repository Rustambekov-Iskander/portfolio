import React from 'react'
import { Typography } from '@mui/material'
import styled from 'styled-components'

export const Footer = () => {
	return (
		<FooterStyle>
			<Typography variant={'h3'}>Iskander Rustambekov</Typography>
		</FooterStyle>
	)
}

const FooterStyle = styled.header`
	width: 100%;
	background-color: #e9e9e9;
	opacity: 0.5;

	border-bottom: 1px solid #e9e9e9;
`
