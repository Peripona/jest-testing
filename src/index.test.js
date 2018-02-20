import {counter} from './index.js';

describe("Test jest", () => {
	it("Should sum two numbers", () => {
		expect(1+2).toBe(3);	
	});
	it("Schould return default state on no actinos to the counter", () => {
		expect(counter()).toBe(0);
	})
})