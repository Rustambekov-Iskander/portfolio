import React from 'react'
import { WithLayout } from '@/widgets/layout'
import { NextPageWithLayout } from '@/pages/_app'
import { Board2048 } from '@/widgets/2048/board'

const Game2048: NextPageWithLayout = () => {
	return <Board2048 />
}

Game2048.getLayout = function getLayout(page) {
	return <WithLayout>{page}</WithLayout>
}

export default Game2048
