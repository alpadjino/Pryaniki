import React from 'react'
import { Box, Button, styled } from '@mui/material';
import { Controller, useFormContext } from 'react-hook-form';
import { LoginRequestModel } from './LoginFormSettings';
import TextInput from '@common/atoms/inputs/TextInput';
import PasswordInput from '@common/atoms/inputs/PasswordInput';

const LoginFormBox = styled(Box)({
	display: 'flex',
	flexDirection: 'column',
	gap: '10px',
	width: '396px'
});

const LoginInputForm = styled(Box)({
	display: 'flex',
	flexDirection: 'column',
	alignItems: 'center',
	justifyContent: 'center',
	backgroundColor: 'white',
	padding: '50px',
	borderRadius: '10px',
	gap: '30px',
});

interface LoginFormProps {
	buttonHandlerSubmit?: () => void;
	submitFormName: string;
}

export const LoginForm = ({ buttonHandlerSubmit, submitFormName }: LoginFormProps) => {
	const { control } = useFormContext<LoginRequestModel>();

	return (
		<LoginFormBox>
			<LoginInputForm>
				<Controller
					name="username"
					control={control}
					render={({ field, fieldState }) => (
						<TextInput
							value={field.value}
							onChange={field.onChange}
							error={!!fieldState.error?.message}
							helperText={fieldState.error?.message}
							sx={{ width: 296 }}
							label="Логин"
							placeholder=""
						/>
					)}
				/>
				<Controller
					name="password"
					control={control}
					render={({ field, fieldState }) => (
						<PasswordInput
							value={field.value}
							onChange={field.onChange}
							error={!!fieldState.error?.message}
							helperText={fieldState.error?.message}
							sx={{ width: 296 }}
							label="Пароль"
							placeholder=""
						/>
					)}
				/>
			</LoginInputForm>
			<Box sx={{ display: 'flex', justifyContent: 'flex-end' }}>
				<Button
					type="submit"
					name={submitFormName}
					form={submitFormName}
					onClick={buttonHandlerSubmit}
					sx={{ minWidth: '0', width: '130px', borderRadius: '5px' }}
				>
					Войти
				</Button>
			</Box>
		</LoginFormBox>
	);
};
