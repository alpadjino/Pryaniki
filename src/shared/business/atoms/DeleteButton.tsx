import React from 'react'
import HighlightOffIcon from '@mui/icons-material/HighlightOff';
import { ButtonProps, styled } from '@mui/material';
import { RedButton } from '@common/atoms/buttons/RedButton';

export const DeleteButton = (props: ButtonProps) => {
  return (
		<RedButton {...props}>
			<HighlightOffIcon />
		</RedButton>
	);
}
