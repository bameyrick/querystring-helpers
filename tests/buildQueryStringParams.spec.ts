import { buildQueryStringParams } from '../src';

describe('buildQueryStringParams()', () => {
	it('Correctly returns an url with parameters from a supplied object', () => {
		// Arrange
		const source = {
			a: 'yes',
			b: 'no',
		};
		const expected = '?a=yes&b=no';

		// Act
		const result = buildQueryStringParams(source);

		// Assert
		expect(result).toBe(expected);
	});

	it('Correctly returns an url without a ? with parameters from a supplied object', () => {
		// Arrange
		const source = {
			a: 'yes',
			b: 'no',
		};
		const expected = 'a=yes&b=no';

		// Act
		const result = buildQueryStringParams(source, false);

		// Assert
		expect(result).toBe(expected);
	});
});
