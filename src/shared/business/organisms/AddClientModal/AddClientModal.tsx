import React from 'react';
import { ModalTemplate } from '@common/molecules/ModalTemplate';
import { useAddClientMutation } from '@api/clientsApi';
import { AddClientRequestModel, useAddClientFormSchema } from './AddClientSettings';
import { FormProvider, Resolver, useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup/dist/yup';
import { AddClientForm } from './AddClientForm';
import { toStringObject } from '@utils/object/toStringObject';
import { enqueueSnackbar } from 'notistack';

interface AddClientModalProps {
	setOpen: React.Dispatch<React.SetStateAction<boolean>>;
	open: boolean;
};

export default function AddClientModal({ setOpen, open }: AddClientModalProps) {
	const { schema, defaultValues } = useAddClientFormSchema();
	const [addClient] = useAddClientMutation();    

	const handleClose = () => setOpen(false);

	const formContext = useForm<AddClientRequestModel>({
		defaultValues,
		mode: 'onSubmit',
		resolver: yupResolver(schema, undefined, {
			mode: 'async',
			raw: true,
		}) as Resolver<AddClientRequestModel>,
	});

    const handleAddClient = (data: AddClientRequestModel) => {
		addClient(toStringObject<AddClientRequestModel>(data))
			.unwrap()
			.then(() => {
				setOpen(false);
				enqueueSnackbar('Успех!', {
					action: 'Добавление пользователя',
					anchorOrigin: { vertical: 'top', horizontal: 'right' },
					variant: 'success',
				});
			})
			.catch((err) =>
				enqueueSnackbar('Серверная ошибка!', {
					action: 'Добавление пользователя',
					anchorOrigin: { vertical: 'top', horizontal: 'right' },
					variant: 'error',
				}),
			);
	};

	return (
		<ModalTemplate
			handleClose={handleClose}
			open={open}
			title="Добавить пользователя"
			submitButtonHandler={formContext.handleSubmit(handleAddClient)}
			submitButtonLabel='Добавить'
		>
			<FormProvider {...formContext}>
				<form id="add-client" name="add-client" noValidate>
					<AddClientForm />
				</form>
			</FormProvider>
		</ModalTemplate>
	);
}
