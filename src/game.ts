export class FizzBuzz {
    static robotVerifier(num: number): string | ("Fizz" | "Buzz" | "FizzBuzz") {
        let result: string | ("Fizz" | "Buzz" | "FizzBuzz") = num.toString();
        if (
            this.numberIsDivisibleBy(num, 3) &&
            this.numberIsDivisibleBy(num, 5)
        ) {
            result = "FizzBuzz";
        } else if (this.numberIsDivisibleBy(num, 5)) {
            result = "Buzz";
        } else if (this.numberIsDivisibleBy(num, 3)) {
            result = "Fizz";
        }
        return result;
    }

    private static numberIsDivisibleBy(num: number, base: number): boolean {
        return num % base === 0;
    }
}
