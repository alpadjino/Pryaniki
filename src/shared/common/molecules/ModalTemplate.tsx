import React from 'react';
import { Typography as MuiTypography, Modal, Box as MuiBox, styled, Button } from '@mui/material';

const ModalContainer = styled(MuiBox)(({ theme }) => ({
	position: 'absolute' as 'absolute',
	top: '50%',
	left: '50%',
	transform: 'translate(-50%, -50%)',
	display: 'flex',
	flexDirection: 'column',
	padding: theme.spacing(0, 5),
	backgroundColor: '#F1F3F8',
	borderRadius: '10px',
}));

const ModalTitle = styled(MuiTypography)(({ theme }) => ({
	color: '#74767C',
	fontFamily: 'InterBold',
	padding: theme.spacing(3.5, 0, 3.5, 0),
}));

const HeaderTemplate = styled(MuiBox)({});

const BodyTemplate = styled(MuiBox)(({ theme }) =>({
	flexGrow: 1,
    backgroundColor: 'white',
    padding: theme.spacing(3.5, 2, 3.5, 2),
    borderRadius: '10px',
}));

const FooterTemplate = styled(MuiBox)(({ theme }) => ({
	paddingBottom: theme.spacing(8),
	marginLeft: 'auto',
	marginTop: theme.spacing(4),
}));

interface ModalTemplateProps {
	title?: string;
	children: React.ReactNode;
	open: boolean;
	handleClose: React.Dispatch<React.SetStateAction<boolean>>;
	submitFormName?: string;
	submitButtonLabel?: string;
	isFormDirty?: boolean;
	submitButtonHandler?: () => void;
}

export const ModalTemplate = ({
	children,
	title,
	open,
	handleClose,
	submitFormName,
	submitButtonLabel,
	submitButtonHandler,
}: ModalTemplateProps) => {
	return (
		<Modal
			open={open}
			onClose={handleClose}
			aria-labelledby="modal-modal-title"
			aria-describedby="modal-modal-description"
		>
			<ModalContainer>
				<HeaderTemplate>
					<ModalTitle variant="h4">{title}</ModalTitle>
				</HeaderTemplate>
				<BodyTemplate>{children}</BodyTemplate>
				<FooterTemplate>
					<Button
						onClick={() => handleClose(false)}
						sx={{
							marginRight: 9,
						}}
						variant="outlined"
						color="secondary"
					>
						Отмена
					</Button>
					<Button
						type="submit"
						onClick={submitButtonHandler}
						form={submitFormName}
						name={submitFormName}
						variant="contained"
						color="secondary"
					>
						{submitButtonLabel}
					</Button>
				</FooterTemplate>
			</ModalContainer>
		</Modal>
	);
};