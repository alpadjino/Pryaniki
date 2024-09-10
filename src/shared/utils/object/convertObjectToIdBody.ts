function convertObjectToIdBody<T extends Object>(o: T): { id: string; body: Omit<T, 'id'> } {
	if (!('id' in o)) throw new Error('В объекте нет id');
	if (typeof o['id'] !== 'string') throw new Error('ID имеет не строковый формат');

	const { id, ...body } = o;

	return { id, body };
}


export { convertObjectToIdBody };