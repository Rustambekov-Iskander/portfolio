import React from 'react'
import { NextPageWithLayout } from '@/pages/_app'
import styled from 'styled-components'
import {
	MainPageBanner,
	MainPageAboutMe,
	MainPageSkills,
	MainPageContacts,
} from '@/sections-pages/main'
import { WithLayout } from '@/widgets/layout'

const Home: NextPageWithLayout = () => {
	return (
		<Wrapper>
			<div>
				<MainPageBanner />
				<MainPageAboutMe />
				<MainPageSkills />
				<MainPageContacts />
			</div>
		</Wrapper>
	)
}

const Wrapper = styled.div`
	min-height: 80vh;
	display: flex;
	align-items: center;
	justify-content: center;
	padding: 20px;
`
Home.getLayout = function getLayout(page) {
	return <WithLayout>{page}</WithLayout>
}

export default Home
