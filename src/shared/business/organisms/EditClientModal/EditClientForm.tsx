import React from 'react';
import { Controller, useFormContext } from 'react-hook-form';
import { Box as MuiBox, styled } from '@mui/material';
import TextInput from '@common/atoms/inputs/TextInput';
import DateInput from '@common/atoms/inputs/DateInput';
import { EditClientRequestModel } from './EditClientSettings';

const FormContainer = styled(MuiBox)(({ theme }) => ({
	display: 'grid',
	gridTemplateColumns: 'repeat(3, 1fr)',
	gridTemplateRows: 'repeat(3, 1fr)',
	gap: '10px',
	width: '100%',
	height: '100%',
	[theme.breakpoints.down('sm')]: {
		gridTemplateColumns: '1fr',
		gridTemplateRows: 'auto',
	},
}));

const InputContainer = styled(MuiBox)(({ theme }) => ({
	display: 'grid',
	width: '100%',
	gridTemplateColumns: 'repeat(3, 1fr)',
	gap: '10px',
	padding: '10px',
	[theme.breakpoints.down('sm')]: {
		gridTemplateColumns: '1fr',
		gridTemplateRows: 'auto',
	},
}));

export const EditClientForm = () => {
	const { control } = useFormContext<EditClientRequestModel>();
	return (
		<FormContainer>
			<InputContainer gridRow={'1'}>
				<Controller
					name="documentName"
					control={control}
					render={({ field, fieldState }) => (
						<TextInput
							value={field.value}
							onChange={field.onChange}
							error={!!fieldState.error?.message}
							helperText={fieldState.error?.message}
							sx={{ width: 296 }}
							label="Название документа"
							placeholder="Название документа"
						/>
					)}
				/>
				<Controller
					name="documentStatus"
					control={control}
					render={({ field, fieldState }) => (
						<TextInput
							value={field.value}
							onChange={field.onChange}
							error={!!fieldState.error?.message}
							helperText={fieldState.error?.message}
							sx={{ width: 296 }}
							label="Статус документа"
							placeholder="Статус документа"
						/>
					)}
				/>

				<Controller
					name="documentType"
					control={control}
					render={({ field, fieldState }) => (
						<TextInput
							value={field.value}
							onChange={field.onChange}
							error={!!fieldState.error?.message}
							helperText={fieldState.error?.message}
							sx={{ width: 296 }}
							label="Тип документа"
							placeholder="Тип документа"
						/>
					)}
				/>
			</InputContainer>
			<InputContainer gridRow={'2'}>
				<Controller
					name="companySignatureName"
					control={control}
					render={({ field, fieldState }) => (
						<TextInput
							value={field.value}
							onChange={field.onChange}
							error={!!fieldState.error?.message}
							helperText={fieldState.error?.message}
							sx={{ width: 296 }}
							label="Название компании"
							placeholder="Название компании"
						/>
					)}
				/>
				<Controller
					name="companySigDate"
					control={control}
					render={({ field, fieldState }) => (
						<DateInput
							value={field.value}
							onChange={field.onChange}
							error={fieldState.error?.message}
							sx={{ width: 296 }}
							label="Дата подписи от компании"
						/>
					)}
				/>
			</InputContainer>
			<InputContainer gridRow={'3'}>
				<Controller
					name="employeeSignatureName"
					control={control}
					render={({ field, fieldState }) => (
						<TextInput
							value={field.value}
							onChange={field.onChange}
							error={!!fieldState.error?.message}
							helperText={fieldState.error?.message}
							sx={{ width: 296 }}
							label="Наименование исполнителя"
							placeholder="Наименование исполнителя"
						/>
					)}
				/>
				<Controller
					name="employeeNumber"
					control={control}
					render={({ field, fieldState }) => (
						<TextInput
							value={field.value}
							onChange={field.onChange}
							error={!!fieldState.error?.message}
							helperText={fieldState.error?.message}
							sx={{ width: 296 }}
							label="Номер исполнителя"
							placeholder="Номер исполнителя"
						/>
					)}
				/>
				<Controller
					name="employeeSigDate"
					control={control}
					render={({ field, fieldState }) => (
						<DateInput
							value={field.value}
							onChange={field.onChange}
							error={fieldState.error?.message}
							sx={{ width: 296 }}
							label="Дата подписи исполнителя"
						/>
					)}
				/>
			</InputContainer>
		</FormContainer>
	);
};
