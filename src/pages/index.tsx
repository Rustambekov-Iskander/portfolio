import React from 'react'
import { WithLayout } from '@/app/providers/layout'
import { NextPageWithLayout } from '@/pages/_app'
import styled from 'styled-components'

const Home: NextPageWithLayout = () => {
	return <Wrapper>Hello world</Wrapper>
}

const Wrapper = styled.div`
	min-height: 80vh;
	display: flex;
	align-items: center;
	justify-content: center;
`
Home.getLayout = function getLayout(page) {
	return <WithLayout>{page}</WithLayout>
}

export default Home
