import React from 'react'
import { Button as MuiButton, styled, ButtonProps } from '@mui/material';

const GreenButtonContainer = styled(MuiButton)({
	color: 'black',
	backgroundColor: 'transparent',
	minWidth: '0',
	':hover': {
		color: 'green',
	},
});



export const GreenButton = (props: ButtonProps) => {
	return <GreenButtonContainer {...props}>{props.children}</GreenButtonContainer>;
};
