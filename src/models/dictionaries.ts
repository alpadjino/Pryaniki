type DictionaryNames = 'clientsTable';

type Dictionary = {
	name: string;
	value: string;
};

type Dictionaries = Record<DictionaryNames, Dictionary[]>;

type TranslatedHeaders = {
	headerName: string;
	translated: string;
};

export { Dictionary, Dictionaries, DictionaryNames, TranslatedHeaders };