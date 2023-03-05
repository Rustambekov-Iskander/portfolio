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
	max-width: 700px;
	width: 100%;
	margin: 10vh auto;
`
