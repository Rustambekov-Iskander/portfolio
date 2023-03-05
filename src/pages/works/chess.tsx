import React from 'react'
import { WithLayout } from '@/app/providers/layout'
import { NextPageWithLayout } from '@/pages/_app'
import { ChessBoardWidget } from '@/widgets/chess'
import styled from 'styled-components'

const Chess: NextPageWithLayout = () => {
	return (
		<Wrapper>
			<ChessBoardWidget />
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
