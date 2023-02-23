import React from 'react'
import { DirectionType } from '@/features/swipe/config'

interface SwipeLayoutProps {
	getSwipeDirection: (direction: DirectionType) => void
	children: React.ReactNode
}

export const SwipeLayout: React.FC<SwipeLayoutProps> = ({
	getSwipeDirection,
	children,
}) => {
	let mouseDown = false
	let direction: DirectionType | null
	let x1: number
	let y1: number

	const handleMouseDown = (e: MouseEvent) => {
		if (!mouseDown) mouseDown = true
		x1 = e.clientX
		y1 = e.clientY
	}

	const handleTouchStart = (e: TouchEvent) => {
		x1 = e.touches[0].clientX
		y1 = e.touches[0].clientY
	}

	const getDirection = (x2: number, y2: number) => {
		let xDiff = x2 - x1
		let yDiff = y2 - y1

		if (Math.abs(xDiff) > Math.abs(yDiff)) {
			if (xDiff > 0 && Math.abs(xDiff) > 40) direction = 'right'
			else if (xDiff < 0 && Math.abs(xDiff) < 40) direction = 'left'
		} else {
			if (yDiff > 0 && Math.abs(yDiff) > 40) direction = 'down'
			else if (yDiff < 0 && Math.abs(yDiff) < 40) direction = 'up'
		}
	}

	const handleTouchMove = (e: TouchEvent) => {
		if (!x1 || !y1) return false
		let x2 = e.touches[0].clientX
		let y2 = e.touches[0].clientY
		getDirection(x2, y2)
	}

	const handleMouseMove = (e: MouseEvent) => {
		if (!mouseDown) return false
		if (!x1 || !y1) return false

		let x2 = e.clientX
		let y2 = e.clientY
		getDirection(x2, y2)
	}

	const handleMouseUp = () => {
		if (mouseDown) mouseDown = false
		if (direction) getSwipeDirection(direction)
		direction = null
	}
	const handleTouchEnd = () => {
		if (direction) getSwipeDirection(direction)
		direction = null
	}

	return (
		<div
			onMouseDown={handleMouseDown as any}
			onMouseMove={handleMouseMove as any}
			onMouseUp={handleMouseUp}
			onTouchStart={handleTouchStart as any}
			onTouchMove={handleTouchMove as any}
			onTouchEnd={handleTouchEnd}
		>
			{children}
		</div>
	)
}
