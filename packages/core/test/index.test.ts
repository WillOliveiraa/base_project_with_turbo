import { somar } from '../src';

test('Deve fazer uma soma', () => {
	const total = somar(1, 9);

	expect(total).toBe(10);
});
