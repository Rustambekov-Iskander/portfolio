import React from 'react'
import styled from 'styled-components'
import { aboutMeConfig } from './config'
import { motion } from 'framer-motion'
import { theme } from '@/shared/config'
import { standardAnimationVariantAside } from '@/shared/animations'

export const MainPageAboutMe = () => {
	return (
		<Wrapper>
			{aboutMeConfig.map((card, i) => (
				<Card
					variants={standardAnimationVariantAside('x')}
					initial={'hidden'}
					whileInView={'visible'}
					textAlign={i % 2 === 0 ? 'left' : 'right'}
					key={card.id}
					custom={i}
				>
					<h3>{card.title}</h3>
					<p dangerouslySetInnerHTML={{ __html: card.text }}></p>
				</Card>
			))}
		</Wrapper>
	)
}

const Wrapper = styled.div`
	display: flex;
	flex-direction: column;
	gap: 20px 0;
`

interface CardProps {
	textAlign: 'right' | 'left' | 'center' | 'justify'
}
const Card = styled(motion.div)<CardProps>`
	text-align: ${(props) => props.textAlign};
	color: #ffffffeb;

	p {
		line-height: 23px;
	}

	span {
		color: ${theme.colors.pink};
	}
`
