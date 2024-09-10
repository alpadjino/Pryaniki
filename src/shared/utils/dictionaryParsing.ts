import { Dictionary } from '@models/dictionaries';

/**
 * Извлечение значения из словаря по коду
 * @param dictionary Массив словарей
 * @param name Код в формате строки
 */

const getDictionaryValueByName = (dictionary: Dictionary[], name: string) => {
	if (!dictionary.length || !name) return '';
	return dictionary.find((el) => el.name === name)?.value || name;
};

export { getDictionaryValueByName };
