import { getQueryStringParams } from '../src';

describe('getQueryStringParams()', () => {
	it('Correctly returns an object of parameters from a supplied url', () => {
		// Arrange
		const source = 'https://example.co.uk?a=yes&b=no';
		const expected = JSON.stringify({
			a: 'yes',
			b: 'no',
		});

		// Act
		const result = JSON.stringify(getQueryStringParams(source));

		// Assert
		expect(result).toBe(expected);
	});
});
