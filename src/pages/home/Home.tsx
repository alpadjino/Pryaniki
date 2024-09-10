import React from 'react'
import { useGetClientsQuery } from '@api/clientsApi'
import LoaderBox from '@common/atoms/LoaderBox';
import ClientsTable from '@business/molecules/ClientsTable';
import { createTableHeader } from '@utils/createClientsTable';
import { useAppSelector } from '@common/hooks/useAppSelector';
import { PageTemplate } from '@common/molecules/PageTemplate';

export const Home = () => {
  const { data, isLoading } = useGetClientsQuery();
  const clientsTable = useAppSelector((store) => store.dictionaries.clientsTable);
  
  if (isLoading) return <LoaderBox />

  const clientTable = data && <ClientsTable clients={data!} headers={createTableHeader({ tableData: data!, dictionary: clientsTable})} />;
  
  return (
		<PageTemplate title='Клиенты'>
			{clientTable}
		</PageTemplate>
	);
}
