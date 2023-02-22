import { createTheme } from '@mui/material'

// mui
export const themeMui = createTheme({
	palette: {
		primary: {
			main: '#66ffdb',
		},
	},
})

// styled components
const breakpoints = {
	sm: 576,
	md: 768,
	lg: 992,
	xl: 1200,
	xxl: 1400,
}

const mq = (breakpoint: TBreakPoints) =>
	`@media (min-width: ${breakpoints[breakpoint]}px)`

const mqMax = (breakpoint: TBreakPoints) =>
	`@media (max-width: ${breakpoints[breakpoint] - 0.0001}px)`

export const theme = {
	mq,
	mqMax,
	breakpoints,
	colors: {
		green: '#66ffdb',
		darkBlue: 'rgb(10, 25, 47)',
	},
}

export type TBreakPoints = keyof typeof breakpoints
