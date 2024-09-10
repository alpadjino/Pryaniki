import { rtkQueryApi } from './rtkQueryApi';
import { TagTypesEnum } from './apiTagTypes';
import { ClientsQueryModel, ClientAddModel, ClientEditModel } from '@models/clients';
import { ApiResponse } from '@models/api';

const clientsApi = rtkQueryApi.injectEndpoints({
	endpoints: (build) => ({
		getClients: build.query<ClientsQueryModel[], void>({
			query: () => ({
				url: `/userdocs/get`,
				method: 'GET',
			}),
			transformResponse: (response: ApiResponse) => response.data,
			providesTags: [TagTypesEnum.Clients],
		}),
		addClient: build.mutation<void, ClientAddModel>({
			query: (body) => ({
				url: `/userdocs/create`,
				method: 'POST',
				body,
			}),
			invalidatesTags: [{ type: TagTypesEnum.Clients }],
		}),
		editClient: build.mutation<void, ClientEditModel>({
			query: ({ id, body }) => ({
				url: `/userdocs/set/${id}`,
				method: 'POST',
				body,
			}),
			invalidatesTags: [{ type: TagTypesEnum.Clients }],
		}),
		deleteClient: build.mutation<void, string>({
			query: (id) => ({
				url: `/userdocs/delete/${id}`,
				method: 'POST',
			}),
			invalidatesTags: [{ type: TagTypesEnum.Clients }],
		}),
	}),
});

export const { useGetClientsQuery, useAddClientMutation, useEditClientMutation, useDeleteClientMutation } = clientsApi;

export default clientsApi;
