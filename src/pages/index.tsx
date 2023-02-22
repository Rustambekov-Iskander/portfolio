import React from 'react'
import { WithLayout } from '@/app/providers/layout'
import Board from '@/widgets/2048/board/Board'
import { NextPageWithLayout } from '@/pages/_app'
import { SwipeLayout } from '@/features/swipe'

const Home: NextPageWithLayout = () => {
	return (
		<>
			<SwipeLayout getSwipeDirection={(somth) => {}}>
				<Board />
			</SwipeLayout>
		</>
	)
}

Home.getLayout = function getLayout(page) {
	return <WithLayout>{page}</WithLayout>
}

export default Home
