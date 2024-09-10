import { yupResolver } from '@hookform/resolvers/yup/dist/yup';
import { Box as MuiBox, styled } from '@mui/material';
import { FormProvider, Resolver, useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';
import { LoginRequestModel, useLoginSchema } from './LoginFormSettings';
import { LoginRequestModel as NonNullLogin } from '@models/auth';
import { useLoginMutation } from '@api/authApi';
import { LoginForm } from './LoginForm';
import { enqueueSnackbar } from 'notistack';

const LoginContainer = styled(MuiBox)({
	display: 'flex',
	alignItems: 'center',
	justifyContent: 'center',
	height: '100vh',
	backgroundColor: 'white',
});

const ensureNonNullable = (data: LoginRequestModel): NonNullLogin => {
	return {
		username: data.username ?? '',
		password: data.password ?? '',
	};
};

export const Login = () => {
  	const navigate = useNavigate();
	const { schema, defaultValues } = useLoginSchema();

	const [login] = useLoginMutation();

	const formContext = useForm<LoginRequestModel>({
		defaultValues,
		mode: 'onSubmit',
		resolver: yupResolver(schema, undefined, {
			mode: 'async',
			raw: true,
		}) as Resolver<LoginRequestModel>,
	});

	const handleSubmit = (data: LoginRequestModel) => {
		login(ensureNonNullable(data))
			.unwrap()
			.then(() => navigate('/'))
			.catch((error) =>
				enqueueSnackbar('Ошибка входа.', {
					action: 'Вход в систему',
					anchorOrigin: { vertical: 'top', horizontal: 'right' },
					variant: 'error',
				}),
			);
	};

	return (
		<LoginContainer>
			<FormProvider {...formContext}>
				<form id="user-login" name="user-login" noValidate>
					<LoginForm submitFormName="user-login" buttonHandlerSubmit={formContext.handleSubmit(handleSubmit)} />
				</form>
			</FormProvider>
		</LoginContainer>
	);
};