export function getBaseURL(url?: string): string {
	url = url || window.location.href;

	if (url.indexOf('?') > -1) {
		url = url.substr(0, url.indexOf('?'));
	}

	return url;
}
