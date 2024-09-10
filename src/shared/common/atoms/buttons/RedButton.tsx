import React from 'react';
import { Button as MuiButton, styled, ButtonProps } from '@mui/material';

const RedButtonContainer = styled(MuiButton)({
	color: 'black',
	backgroundColor: 'transparent',
	minWidth: '0',
	':hover': {
		color: 'red',
	},
});

export const RedButton = (props: ButtonProps) => {
	return <RedButtonContainer {...props}>{props.children}</RedButtonContainer>;
};
