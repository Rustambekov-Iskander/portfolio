import React from 'react'
import { DirectionType } from '@/features/keydown/arrows'

interface ArrowsLayoutProps {
	getDirection: (direction: DirectionType) => void
}

export const ArrowsKeyDown: React.FC<ArrowsLayoutProps> = ({
	getDirection,
}) => {
	const giveArrowDirection = (e: KeyboardEvent) => {
		switch (e.key) {
			case 'ArrowUp':
				getDirection('up')
				break
			case 'ArrowDown':
				getDirection('down')
				break
			case 'ArrowLeft':
				getDirection('left')
				break
			case 'ArrowRight':
				getDirection('right')
				break
		}
	}

	React.useEffect(() => {
		window.addEventListener('keydown', giveArrowDirection)
		return () => window.removeEventListener('keydown', giveArrowDirection)
	}, [])

	return <></>
}
