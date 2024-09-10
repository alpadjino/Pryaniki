function toStringObject<T extends Object>(o: T): { [K in keyof T]: string } {
	const result = {} as { [K in keyof T]: string };

	Object.keys(o).forEach((key) => {
		const value = o[key as keyof T];

		if (value && typeof value === 'object' && value instanceof Date) {
			result[key as keyof T] = value.toISOString();
		} else if (value && typeof value === 'object') {
			result[key as keyof T] = JSON.stringify(toStringObject(value as Record<string, unknown>));
		} else {
			result[key as keyof T] = String(value);
		}
	});

	return result;
}


export { toStringObject };