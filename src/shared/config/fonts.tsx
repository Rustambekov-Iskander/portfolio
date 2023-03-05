import { Global } from '@emotion/react'
import React from 'react'

export const Fonts = () => {
	return (
		<Global
			styles={`
      @import url('https://fonts.googleapis.com/css2?family=M+PLUS+Rounded+1c:wght@300;400;500;700&display=swap')
    `}
		/>
	)
}
