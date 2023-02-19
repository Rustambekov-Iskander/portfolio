import { Global } from '@emotion/react'
import React from 'react'

export const Fonts = () => {
	return (
		<Global
			styles={`
      @import url('https://fonts.googleapis.com/css2?family=Montserrat:wght@100;200;300;500;700;800&display=swap');
      @import url('https://fonts.googleapis.com/css2?family=Source+Code+Pro:wght@300;500;700&display=swap');
    `}
		/>
	)
}
