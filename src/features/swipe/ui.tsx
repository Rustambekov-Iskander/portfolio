import React from 'react'
import { DirectionType } from '@/features/swipe/config'

interface Ui {
	getSwipeDirection: (direction: DirectionType) => void
	children: React.ReactNode
}

export const SwipeLayout: React.FC<Ui> = ({ getSwipeDirection, children }) => {
	let mouseDown = false
	let direction: DirectionType | null
	let x1: number
	let y1: number

	const handleMouseDown = (e: MouseEvent) => {
		if (!mouseDown) mouseDown = true
		x1 = e.clientX
		y1 = e.clientY
	}

	const handleMouseMove = (e: MouseEvent) => {
		if (!mouseDown) return false
		if (!x1 || !y1) return false

		let x2 = e.clientX
		let y2 = e.clientY

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

	const handleMouseUp = () => {
		if (mouseDown) mouseDown = false
		if (direction) getSwipeDirection(direction)
		direction = null
	}

	return (
		<div
			onMouseDown={handleMouseDown as any}
			onMouseMove={handleMouseMove as any}
			onMouseUp={handleMouseUp as any}
		>
			{children}
		</div>
	)
}
