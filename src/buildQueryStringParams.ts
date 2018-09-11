export function buildQueryStringParams(params: Object, addQuestionMarkSeparator?: boolean): string {
	if (typeof addQuestionMarkSeparator !== 'boolean') {
		addQuestionMarkSeparator = true;
	}

	let queryString = '';

	for (const property in params) {
		if (params.hasOwnProperty(property) && typeof property === 'string' && property) {
			queryString += `${property}=${(<any>params)[property]}&`;
		}
	}

	if (queryString.length > 0) {
		queryString = (addQuestionMarkSeparator ? '?' : '') + queryString.substring(0, queryString.length - 1);
	}
	return queryString;
}
