import React, { useState } from 'react';
import { ClientsQueryModel } from '@models/clients';
import { TableTemplate } from '@common/molecules/TableTemplate';
import { TranslatedHeaders } from '@models/dictionaries';
import { useDeleteClientMutation } from '@api/clientsApi';
import AddClientModal from '../organisms/AddClientModal/AddClientModal';
import EditClientModal from '@business/organisms/EditClientModal/EditClientModal';
import { enqueueSnackbar } from 'notistack';

interface ClientsTableProps {
	clients: ClientsQueryModel[];
	headers: TranslatedHeaders[];
}

export default function ClientsTable({ clients, headers }: ClientsTableProps) {
	const [open, setOpen] = useState(false);
	const [editOpen, setEditOpen] = useState(false);
	const [currentId, setCurrentId] = useState('') 
	const [deleteClient] = useDeleteClientMutation();

	const handleEditClient = (row: ClientsQueryModel) => {
		const { id } = row;
		setEditOpen(true);
		setCurrentId(id);
	};

	const handleDeleteClient = (row: ClientsQueryModel) => {
		const { id } = row;
		deleteClient(id)
			.unwrap()
			.then(() => {
				enqueueSnackbar('Успех!', {
					action: 'Удаление пользователя',
					anchorOrigin: { vertical: 'top', horizontal: 'right' },
					variant: 'success',
				});
			})
			.catch((err) =>
				enqueueSnackbar('Серверная ошибка!', {
					action: 'Удаление пользователя',
					anchorOrigin: { vertical: 'top', horizontal: 'right' },
					variant: 'error',
				}),
			);
	};

	const handleAddClient = () => setOpen(true);

	return (
		<TableTemplate
			headers={headers}
			tableData={clients}
			handleEditButton={handleEditClient}
			handleDeleteButton={handleDeleteClient}
			handleAddButton={handleAddClient}
		>
			<AddClientModal setOpen={setOpen} open={open} />
			<EditClientModal currentId={currentId} setOpen={setEditOpen} open={editOpen} />
		</TableTemplate>
	);
}
