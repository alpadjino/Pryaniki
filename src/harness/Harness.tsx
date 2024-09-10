import React from 'react'
import { Box as MuiBox, styled } from '@mui/material';
import { AppHeader } from './portal/app-header/AppHeader';


const Workspace = styled(MuiBox)({
    minHeight: '100vh',
});

interface HarnessProps {
    children: React.ReactNode;
}

export const Harness = ({ children }: HarnessProps) => {
	return (
		<Workspace>
			<AppHeader />
			{children}
		</Workspace>
	);
};
