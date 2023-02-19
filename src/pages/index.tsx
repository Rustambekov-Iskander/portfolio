import React from 'react'
import { WithLayout } from '@/app/providers/layout'
import styled from 'styled-components'
import Board from '@/widgets/2048/board/ui'

const Home = () => {
	return (
		<WithLayout>
			<Wrapper>
				<Board />
			</Wrapper>
		</WithLayout>
	)
}

const Wrapper = styled.div`
	display: flex;
	align-items: center;
	justify-content: center;
	background-color: #333;
	padding: 20px;
`

export default Home
