import React from 'react'
import { Button as MuiButton, List as MuiList, Box as MuiBox, styled } from '@mui/material'
import { useGetHeaderElems } from './useGetHeaderElems';

const HeaderContainer = styled(MuiBox)({
    display: 'flex',
    gap: '10px',
    backgroundColor: 'white',
    padding: '10px'
});

const NavBar = styled(MuiList)({
	display: 'flex',
	gap: '10px'
});

const NavButton = styled(MuiButton)({
	backgroundColor: 'transparent',
	padding: 0,
	minWidth: 0,
	textTransform: 'none'
});

export const AppHeader = () => {
	const headerElems = useGetHeaderElems({});
	return (
		<HeaderContainer>
			<NavBar>
				{headerElems.map((elem, index) => (
					<li key={index}>
						<NavButton onClick={elem.onClick}>{elem.name}</NavButton>
					</li>
				))}
			</NavBar>
		</HeaderContainer>
	);
}
