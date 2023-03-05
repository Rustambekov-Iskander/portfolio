import React from 'react'
import styled from 'styled-components'
import { IWork } from '@/sections-pages/works/config'
import { theme } from '@/shared/config'
import { motion } from 'framer-motion'
import { standardAnimationVariantAside } from '@/shared/animations'

interface WorkDetailProps {
	work: IWork
}

export const WorkDetail: React.FC<WorkDetailProps> = ({ work }) => {
	return (
		<motion.div
			initial={'hidden'}
			animate={'visible'}
			variants={standardAnimationVariantAside()}
		>
			<Wrapper>
				<div>
					<h3>{work.title}</h3>
					<p>{work.text}</p>
				</div>
				<div>
					Стэк:{' '}
					{work.stack.map((technology) => (
						<React.Fragment key={technology}>
							<span>{technology}</span>,{' '}
						</React.Fragment>
					))}
				</div>
				<Wrapper>
					{work.images.map((img) => (
						<img key={img.link} src={img.link} alt={img.alt} />
					))}
				</Wrapper>
			</Wrapper>
		</motion.div>
	)
}

const Wrapper = styled.div`
	display: grid;
	grid-template-columns: 1fr;
	gap: 30px 0;

	span {
		color: ${theme.colors.pink};
		font-weight: 600;
	}

	img {
		max-width: 700px;
		width: 100%;

		object-fit: contain;
	}
`
