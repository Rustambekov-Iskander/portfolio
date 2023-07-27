import React from 'react'
import styled from 'styled-components'
import { mainPageContacts } from './config'
import { theme } from '@/shared/config'
import { motion } from 'framer-motion'
import { standardAnimationVariantAside } from '@/shared/animations'

export const MainPageContacts = () => {
	return (
		<Wrapper>
			<motion.h3
				variants={standardAnimationVariantAside('y', 100)}
				initial={'hidden'}
				whileInView={'visible'}
				viewport={{ once: true }}
				custom={0}
			>
				Контакты
			</motion.h3>
			{mainPageContacts.map(({ contact, title }, i) => (
				<motion.p
					variants={standardAnimationVariantAside('y', 100)}
					initial={'hidden'}
					whileInView={'visible'}
					viewport={{ once: true }}
					custom={i + 1}
				>
					{title}: <span>{contact}</span>
				</motion.p>
			))}
		</Wrapper>
	)
}

const Wrapper = styled.div`
	display: grid;

	p {
		font-weight: 700;
	}
	span {
		color: ${theme.colors.pink};
	}
`
