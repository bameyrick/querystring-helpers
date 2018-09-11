import { getQueryStringParams } from './getQueryStringParams';
import { getBaseURL } from './getBaseUrl';
import { buildQueryStringParams } from './buildQueryStringParams';

export function setQueryStringParams(params: Object, url?: string): string {
	url = url || window.location.href;

	const urlParams = getQueryStringParams(url) || {};

	for (const key in params) {
		if (params.hasOwnProperty(key)) {
			(<any>urlParams)[key] = (<any>params)[key];
		}
	}

	return getBaseURL(url) + buildQueryStringParams(urlParams);
}
