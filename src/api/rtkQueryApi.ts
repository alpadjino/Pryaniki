import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { tagTypes } from './apiTagTypes';
import { RootState } from '@store/store';

const baseUrl = `https://test.v5.pryaniky.com/ru/data/v3/testmethods/docs`;

const rtkQueryApi = createApi({
	reducerPath: 'api',
	keepUnusedDataFor: 60,
	refetchOnMountOrArgChange: true,
	baseQuery: fetchBaseQuery({
		baseUrl,
		prepareHeaders: (headers, { getState }) => {
			headers.set('Accept', 'application/json');
			headers.set('Content-Type', 'application/json; charset=UTF-8');
			
			const rtkState = getState() as RootState; 
			
			if (rtkState.auth.token) headers.set('x-auth', rtkState.auth.token);
			else headers.delete('x-auth')
			
			return headers;
		},
	}),
	tagTypes: tagTypes,
	endpoints: () => ({}),
});

export { rtkQueryApi };
