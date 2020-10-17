import { FizzBuzz } from "./game";

describe("FizzBuzz game", () => {
    it("should return the number", () => {
        expect(FizzBuzz.robotVerifier(1)).toBe('1');
        expect(FizzBuzz.robotVerifier(2)).toBe('2');
        expect(FizzBuzz.robotVerifier(4)).toBe('4');
    });

    it('should return Fizz', () => {
        expect(FizzBuzz.robotVerifier(3)).toBe('Fizz');
        expect(FizzBuzz.robotVerifier(6)).toBe('Fizz');
        expect(FizzBuzz.robotVerifier(9)).toBe('Fizz');
    });

    it('should return Buzz', () => {
        expect(FizzBuzz.robotVerifier(5)).toBe('Buzz');
        expect(FizzBuzz.robotVerifier(10)).toBe('Buzz');
        expect(FizzBuzz.robotVerifier(20)).toBe('Buzz');
    });

    it('should return FizzBuzz', () => {
        expect(FizzBuzz.robotVerifier(15)).toBe('FizzBuzz');
        expect(FizzBuzz.robotVerifier(30)).toBe('FizzBuzz');
        expect(FizzBuzz.robotVerifier(45)).toBe('FizzBuzz');
    });

});
