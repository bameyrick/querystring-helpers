export function getQueryStringParams(url?: string, paramToLowerCase: boolean = false): Object {
	url = url || window.location.href;

	const args = (url.split('?')[1] || '').split('&');

	const params = {};

	args.forEach(arg => {
		const argParts = arg.split('=');
		let value = '';

		if (argParts.length === 2) {
			value = decodeURIComponent(argParts[1].replace(/\+/g, ' '));
		}

		const param = paramToLowerCase ? argParts[0].toLowerCase() : argParts[0];

		(<any>params)[param] = value;
	});

	return params;
}
