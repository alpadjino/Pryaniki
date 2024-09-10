import { Dictionaries, DictionaryNames } from '@models/dictionaries';
import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RootState } from '@store/store';

const initialState: Dictionaries = {
	clientsTable: [
		{ name: 'documentStatus', value: 'Статус документа' },
		{ name: 'employeeNumber', value: 'Номер исполнителя' },
		{ name: 'documentType', value: 'Тип документа' },
		{ name: 'documentName', value: 'Название документа' },
		{ name: 'companySignatureName', value: 'Имя подписавшего от компании' },
		{ name: 'employeeSignatureName', value: 'Имя подписавшего сотрудника' },
		{ name: 'employeeSigDate', value: 'Дата подписи сотрудника' },
		{ name: 'companySigDate', value: 'Дата подписи компании' },
	],
};

const dictionariesSlice = createSlice({
	name: 'dictionarySlice',
	initialState,
	reducers: {
		setDictionaries: (_, action: PayloadAction<Dictionaries>) => action.payload,
	},
});

export const dictionariesSelector = (name: DictionaryNames) => (state: RootState) => state.dictionaries[name];
export const { setDictionaries } = dictionariesSlice.actions;
export default dictionariesSlice.reducer;
export { dictionariesSlice };
