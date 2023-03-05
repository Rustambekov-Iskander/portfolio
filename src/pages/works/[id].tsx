import React from 'react'
import { WithLayout } from '@/widgets/layout'
import { NextPageWithLayout } from '@/pages/_app'
import { GetStaticPaths, GetStaticProps } from 'next'
import { worksList } from '@/sections-pages/works/config'
import { WorkDetail } from '@/sections-pages/works'

export const getStaticPaths: GetStaticPaths = async () => {
	const paths = []
	const worksListArray = Object.values(worksList)
	for (let i = 0; i < worksListArray.length; i++) {
		if (worksListArray[i].link !== '2048' && worksListArray[i].link !== 'chess')
			paths.push({ params: { id: worksListArray[i].link } })
	}

	return {
		paths,
		fallback: false,
	}
}

export const getStaticProps: GetStaticProps = async ({ params }) => {
	return { props: { id: params?.id } }
}

const WorksDetailPage: NextPageWithLayout<{ id: string }> = ({ id }) => {
	return <WorkDetail work={worksList[id]} />
}

WorksDetailPage.getLayout = function getLayout(page) {
	return <WithLayout>{page}</WithLayout>
}

export default WorksDetailPage
