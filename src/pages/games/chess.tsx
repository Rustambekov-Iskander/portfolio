import React from 'react'
import { WithLayout } from '@/app/providers/layout'
import Board from '@/widgets/2048/board/Board'
import { NextPageWithLayout } from '@/pages/_app'
import { ChessBoard } from '@/widgets/chess'
import styled from 'styled-components'

const Chess: NextPageWithLayout = () => {
	return (
		<Wrapper>
			<ChessBoard />
		</Wrapper>
	)
}

const Wrapper = styled.div`
	display: flex;
	align-items: center;
	justify-content: center;
`

Chess.getLayout = function getLayout(page) {
	return <WithLayout>{page}</WithLayout>
}

export default Chess
