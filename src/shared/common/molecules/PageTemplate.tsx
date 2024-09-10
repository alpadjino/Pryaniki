import { styled, Box as MuiBox, Typography as MuiTypography } from '@mui/material';
import React from 'react'

const PageTitle = styled(MuiTypography)(({ theme }) => ({
	color: 'black',
	fontFamily: 'InterBold',
	padding: theme.spacing(4, 0, 3.5, 1),
}));

const PageContainer = styled(MuiBox)(({ theme }) => ({
	display: 'flex',
	flexDirection: 'column',
	width: '100vw',
}));

const BodyTemplate = styled(MuiBox)({
	flexGrow: 1,
});

interface PageTemplateProps {
    children: React.ReactNode;
    title: string;
};

export const PageTemplate = ({ children, title }: PageTemplateProps) => {
	return (
		<PageContainer>
			<BodyTemplate>
				<PageTitle variant="h4">{title}</PageTitle>
				{children}
			</BodyTemplate>
		</PageContainer>
	);
};
