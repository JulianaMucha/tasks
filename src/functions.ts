/**
 * Consumes a single temperature in Fahrenheit (a number) and converts to Celsius
 * using this formula:
 *      C = (F - 32) * 5/9
 */
export function fahrenheitToCelius(temperature: number): number {
    let c: number = temperature - 32;
    c = (c * 5) / 9;
    return c;
}

/**
 * Consumes three numbers and produces their sum. BUT you should only add a number
 * if the number is greater than zero.
 */
export function add3(first: number, second: number, third: number): number {
    let s: number = 0;
    if (first > 0) {
        if (second > 0) {
            if (third > 0) return first + second + third;
            return first + second;
        }
        if (third > 0) return first + third;
        return first;
    } else if (second > 0) {
        if (third > 0) return second + third;
        return second;
    } else if (third > 0) return third;
    return s;
}

/**
 * Consumes a string and produces the same string in UPPERCASE and with an exclamation
 * mark added to the end.
 */
export function shout(message: string): string {
    let oldMessage: string = message;
    let newMessage: string = "";
    for (let char of oldMessage) {
        char = char.toUpperCase();
        newMessage += char;
    }
    return newMessage + "!";
}

/**
 * Consumes a string (a message) and returns a boolean if the string ends in a question
 * mark. Do not use an `if` statement in solving this question.
 */
export function isQuestion(message: string): boolean {
    let m: string = message;
    let len: number = message.length;
    return m.endsWith("?", len);
}

/**
 * Consumes a word (a string) and returns either `true`, `false`, or `null`. If the string
 * is "yes" (upper or lower case), then return `true`. If the string is "no" (again, either
 * upper or lower case), then return `false`. Otherwise, return `null`.
 */
export function convertYesNo(word: string): boolean | null {
    let w: string = word.toUpperCase();
    if (w === "YES") {
        return true;
    } else if (w === "NO") {
        return false;
    }
    return null;
}
