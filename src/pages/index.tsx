import React from 'react'
import { WithLayout } from '@/app/providers/layout'
import Board from '@/widgets/2048/board/Board'
import { NextPageWithLayout } from '@/pages/_app'

const Home: NextPageWithLayout = () => {
	return (
		<>
			<Board />
		</>
	)
}

Home.getLayout = function getLayout(page) {
	return <WithLayout>{page}</WithLayout>
}

export default Home
