import React from 'react'
import { styled, ButtonProps } from '@mui/material'
import EditIcon from '@mui/icons-material/Edit';
import { GreenButton } from '@common/atoms/buttons/GreenButton';

export const EditButton = (props: ButtonProps) => {
	return (
		<GreenButton {...props}>
			<EditIcon />
		</GreenButton>
	);
};
