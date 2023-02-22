import React from 'react'
import { NextPageWithLayout } from '@/pages/_app'
import { WithLayout } from '@/app/providers/layout'

const Games: NextPageWithLayout = () => {
	return <div>hello world!</div>
}

Games.getLayout = function (page) {
	return <WithLayout>{page}</WithLayout>
}

export default Games
