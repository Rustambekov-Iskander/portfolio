import React from 'react'
import { WithLayout } from '@/app/providers/layout'
import Board from '@/widgets/2048/board/Board'
import { NextPageWithLayout } from '@/pages/_app'

const Game2048: NextPageWithLayout = () => {
	return <Board />
}

Game2048.getLayout = function getLayout(page) {
	return <WithLayout>{page}</WithLayout>
}

export default Game2048
