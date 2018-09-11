import { setQueryStringParams } from '../src';

describe('setQueryStringParams()', () => {
	it('Correctly returns a url with the parameters supplied', () => {
		// Arrange
		const sourceUrl = 'https://example.co.uk';
		const sourceParams = {
			a: 'yes',
			b: 'no',
		};

		const expected = 'https://example.co.uk?a=yes&b=no';

		// Act
		const result = setQueryStringParams(sourceParams, sourceUrl);

		// Assert
		expect(result).toBe(expected);
	});

	it('Correctly returns a url with the parameters supplied added but existing intact', () => {
		// Arrange
		const sourceUrl = 'https://example.co.uk?a=yes';
		const sourceParams = {
			b: 'no',
		};

		const expected = 'https://example.co.uk?a=yes&b=no';

		// Act
		const result = setQueryStringParams(sourceParams, sourceUrl);

		// Assert
		expect(result).toBe(expected);
	});

	it('Correctly returns a url with the parameters modified', () => {
		// Arrange
		const sourceUrl = 'https://example.co.uk?a=yes&b=no';
		const sourceParams = {
			a: 'no',
			b: 'yes',
		};

		const expected = 'https://example.co.uk?a=no&b=yes';

		// Act
		const result = setQueryStringParams(sourceParams, sourceUrl);

		// Assert
		expect(result).toBe(expected);
	});
});
