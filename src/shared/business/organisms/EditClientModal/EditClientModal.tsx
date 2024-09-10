import React from 'react';
import { ModalTemplate } from '@common/molecules/ModalTemplate';
import { useEditClientMutation } from '@api/clientsApi';
import { FormProvider, Resolver, useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup/dist/yup';
import { EditClientRequestModel, useEditClientFormSchema } from './EditClientSettings';
import { EditClientForm } from './EditClientForm';
import { toStringObject } from '@utils/object/toStringObject';
import { convertObjectToIdBody } from '@utils/object/convertObjectToIdBody';
import { enqueueSnackbar, EnqueueSnackbar } from 'notistack';

interface EditClientModalProps {
	setOpen: React.Dispatch<React.SetStateAction<boolean>>;
	open: boolean;
	currentId: string;
}

export default function EditClientModal({ setOpen, open, currentId }: EditClientModalProps) {
    const { schema, defaultValues } = useEditClientFormSchema();
	const [editClient] = useEditClientMutation();
    
	const handleClose = () => setOpen(false);

	const formContext = useForm<EditClientRequestModel>({
		defaultValues,
		mode: 'onSubmit',
		resolver: yupResolver(schema, undefined, {
			mode: 'async',
			raw: true,
		}) as Resolver<EditClientRequestModel>,
	});

	const handleEditClient = (data: EditClientRequestModel) => {
        data['id'] = currentId;
		editClient(convertObjectToIdBody(toStringObject(data)))
			.unwrap()
			.then(() => {
				setOpen(false);
				enqueueSnackbar('Успех!', {
					action: 'Изменение пользователя',
					anchorOrigin: { vertical: 'top', horizontal: 'right' },
					variant: 'success',
				});
			})
			.catch((err) =>
				enqueueSnackbar('Серверная ошибка!', {
					action: 'Изменение пользователя',
					anchorOrigin: { vertical: 'top', horizontal: 'right' },
					variant: 'error',
				}),
			);
	};

	return (
		<ModalTemplate
			handleClose={handleClose}
			open={open}
			title="Изменить пользователя"
			submitButtonHandler={formContext.handleSubmit(handleEditClient)}
			submitButtonLabel="Изменить"
		>
			<FormProvider {...formContext}>
				<form id="edit-client" name="edit-client" noValidate>
					<EditClientForm />
				</form>
			</FormProvider>
		</ModalTemplate>
	);
}
