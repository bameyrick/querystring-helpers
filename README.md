# querystring-helpers

## Install
You can install via npm or yarn.

### npm
```bash
npm install --save querystring-helpers
```

### yarn
```bash
yarn add querystring-helpers
```

## Usage
You can import using ES6 imports. If you are using typescript this package includes a typings file.
```javascript
import { getQueryStringParams } from 'querystring-helpers';
```

### getQueryStringParams
Returns an object of querystring parameters and values from a URL

**Parameters**

| Parameter        | Type    | Description                                                                    | Optional | Default                |
|------------------|---------|--------------------------------------------------------------------------------|----------|------------------------|
| url              | string  | A URL you want to get querystring parameters for                               | true     | `window.location.href` |
| paramToLowerCase | boolean | Sets whether the keys in the returned object should be converted to lower case | true     | `false`                |

```javascript
import { getQueryStringParams } from 'querystring-helpers';


getQueryStringParams('https://example.co.uk?a=duck&b=attack');

/* Result
{
	a: 'duck',
	b: 'attack',
}
*/
```

### setQueryStringParams
Returns an string with query string parameters set

**Parameters**

| Parameter        | Type   | Description                                             | Optional | Default                |
|------------------|--------|---------------------------------------------------------|----------|------------------------|
| params           | Object | A set of key value pairs for parameters you want to set | false    | n/a                    |
| url              | string | A URL you want to get querystring parameters for        | true     | `window.location.href` |

```javascript
import { getQueryStringParams } from 'querystring-helpers';


getQueryStringParams({ a: 'cow', b: 'attack' }, 'https://example.co.uk?a=duck');

/* Result
https://example.co.uk?a=cow&b=attack
*/
```

### buildQueryStringParams
Returns an string with query string parameters set to add to the end of a url

**Parameters**

| Parameter                | Type    | Description                                                      | Optional | Default |
|--------------------------|---------|------------------------------------------------------------------|----------|---------|
| params                   | Object  | A set of key value pairs for parameters you want to set          | false    | n/a     |
| addQuestionMarkSeparator | boolean | Whether to add a question mark to the start of the string or not | true     | `false` |

```javascript
import { buildQueryStringParams } from 'querystring-helpers';


buildQueryStringParams({ a: 'pig', b: 'attack' }, true);

/* Result
?a=pig&b=attack
*/
```

### getBaseURL
Returns an url without a query string
*
Parameters**

| Parameter | Type   | Description                                   | Optional | Default                |
|-----------|--------|-----------------------------------------------|----------|------------------------|
| url       | string | A URL you want to get without the querystring | true     | `window.location.href` |

```javascript
import { getBaseURL } from 'querystring-helpers';


getBaseURL('https://example.co.uk?a=goose');

/* Result
https://example.co.uk
*/
```
