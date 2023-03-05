import React from 'react'
import { NextPageWithLayout } from '@/pages/_app'
import { WithLayout } from '@/widgets/layout'
import { WorksPageWorksList } from '@/sections-pages/works/works-list'
import { motion } from 'framer-motion'
import { standardAnimationVariantAside } from '@/shared/animations'

const Works: NextPageWithLayout = () => {
	return (
		<motion.div
			initial={'hidden'}
			animate={'visible'}
			variants={standardAnimationVariantAside()}
		>
			<WorksPageWorksList />
		</motion.div>
	)
}

Works.getLayout = function (page) {
	return <WithLayout>{page}</WithLayout>
}

export default Works
