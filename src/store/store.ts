import { rtkQueryApi } from '@api/rtkQueryApi';
import { configureStore } from '@reduxjs/toolkit';
import { rtkQueryErrorHandler } from './errorMiddleware';
import dictionariesReducer from './slices/dictionaries';
import authReducer from './slices/auth';
import storage from 'redux-persist/lib/storage';
import { persistStore, persistReducer } from 'redux-persist';

const persistConfig = {
	key: 'root',
	version: 1,
	storage,
};

const persistedAuthReducer = persistReducer(persistConfig, authReducer);

const store = configureStore({
	reducer: {
		[rtkQueryApi.reducerPath]: rtkQueryApi.reducer,
		dictionaries: dictionariesReducer,
		auth: persistedAuthReducer,
	},
	middleware: (getDefaultMiddleware) =>
		getDefaultMiddleware({ serializableCheck: false }).concat([rtkQueryApi.middleware, rtkQueryErrorHandler]),
});

export const persistor = persistStore(store);
export default store;
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
