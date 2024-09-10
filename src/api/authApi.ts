import { setToken } from '@store/slices/auth';
import { rtkQueryApi } from './rtkQueryApi';
import { LoginRequestModel } from '@models/auth';
import { ApiResponse } from '@models/api';

const authApi = rtkQueryApi.injectEndpoints({
	endpoints: (build) => ({
		login: build.mutation<Object, LoginRequestModel>({
			query: (body) => ({
				url: `/login`,
				method: 'POST',
				body,
			}),
			async onQueryStarted(arg, { dispatch, queryFulfilled }) {
				try {
					const { data } = await queryFulfilled;
					
					const typedData = data as ApiResponse;
					const responceData = typedData.data;
					
					if (!('token' in responceData)) throw new Error('Ошибка запроса данных');

					const token = responceData.token as string;					
					dispatch(setToken(token));
				} catch (error) {
					console.error('Login failed:', error);
				}
			},
		}),
	}),
});

export const { useLoginMutation } = authApi;

export default authApi;
