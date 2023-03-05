import { Variants } from 'framer-motion'

export const standardAnimationVariant: Variants = {
	hidden: {
		opacity: 0,
		scale: 0,
	},

	visible: (sec) => ({
		scale: 1,
		opacity: 1,
		transition: {
			delay: sec ? sec * 0.1 : 0,
		},
	}),
}

export const standardAnimationVariantAside = (
	axis: 'y' | 'x' = 'y',
	px: number = -100
): Variants => {
	return {
		hidden: {
			opacity: 0,
			[axis]: px,
		},

		visible: (sec) => ({
			[axis]: 0,
			opacity: 1,
			transition: {
				delay: sec ? sec * 0.1 : 0,
			},
		}),
	}
}
