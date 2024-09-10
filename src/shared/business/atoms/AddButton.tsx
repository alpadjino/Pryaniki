import React from 'react';
import { ButtonProps } from '@mui/material';
import { GreenButton } from '@common/atoms/buttons/GreenButton';
import AddIcon from '@mui/icons-material/Add';

export const AddButton = (props: ButtonProps) => {
	return (
		<GreenButton {...props}>
			<AddIcon />
		</GreenButton>
	);
};
