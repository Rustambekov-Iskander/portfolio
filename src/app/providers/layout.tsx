import React from 'react'
import { Header } from '@/widgets/layout/header'
import styled from 'styled-components'
import { Container } from '@mui/material'

export const WithLayout: React.FC<{ children: React.ReactNode }> = ({
	children,
}) => {
	return (
		<>
			<Header />
			<Container>
				<Wrapper>{children}</Wrapper>
			</Container>
		</>
	)
}

const Wrapper = styled.div`
	width: 100%;
	border: 1px solid #64ffda;
	overflow-y: auto;
	background-color: #fff;
`
