import { getBaseURL } from '../src';

describe('getBaseURL()', () => {
	it('Correctly removes querystring from a supplied url', () => {
		// Arrange
		const source = 'https://example.co.uk?param=test';
		const expected = 'https://example.co.uk';

		// Act
		const result = getBaseURL(source);

		// Assert
		expect(result).toBe(expected);
	});
});
