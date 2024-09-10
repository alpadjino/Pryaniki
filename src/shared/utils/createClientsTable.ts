import { ClientsQueryModel } from "@models/clients";
import { getDictionaryValueByName } from "./dictionaryParsing";
import { Dictionary, TranslatedHeaders } from "@models/dictionaries";

type CreateTableProps<T> = {
	tableData: T[],
	dictionary: Dictionary[],
}

function createTableHeader<T extends Record<string, any>>({ tableData, dictionary }: CreateTableProps<T>): TranslatedHeaders[] {
	if (tableData.length === 0) return [];
	const tableHeaders = Object.keys(tableData[0]).filter((header) => header !== 'id');
	
	const translatedHeaders: TranslatedHeaders[] = tableHeaders.map((header) => ({
		headerName: header,
		translated: getDictionaryValueByName(dictionary, header),
	}));

	return translatedHeaders;
};

export { createTableHeader };