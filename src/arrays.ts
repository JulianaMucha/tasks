/**
 * Consume an array of numbers, and return a new array containing
 * JUST the first and last number. If there are no elements, return
 * an empty array. If there is one element, the resulting list should
 * the number twice.
 */
export function bookEndList(numbers: number[]): number[] {
    let numElements: number = numbers.length;
    if (numElements === 0) {
        return numbers;
    } else if (numElements === 1) {
        const twoNumbers = [...numbers, ...numbers];
        return twoNumbers;
    }
    const twoNumbers = [...numbers];
    twoNumbers.splice(1, numElements - 2);
    return twoNumbers;
}

/**
 * Consume an array of numbers, and return a new array where each
 * number has been tripled (multiplied by 3).
 */
export function tripleNumbers(numbers: number[]): number[] {
    let numElements: number = numbers.length;
    if (numElements === 0) {
        return numbers;
    }
    const tripledNumbers = numbers.map((num: number): number => num * 3);
    return tripledNumbers;
}

/**
 * Consume an array of strings and convert them to integers. If
 * the number cannot be parsed as an integer, convert it to 0 instead.
 */
export function stringsToIntegers(numbers: string[]): number[] {
    const numArray = numbers.map((num: string): number =>
        isNaN(parseInt(num)) ? 0 : parseInt(num),
    );

    // or...
    // const numArray = numbers.map((num: string): number => {
    //      const parsed = parseInt(num);
    //      return isNaN(parsed) ? 0 : parsed;
    //  });
    return numArray;
}

/**
 * Consume an array of strings and return them as numbers. Note that
 * the strings MAY have "$" symbols at the beginning, in which case
 * those should be removed. If the result cannot be parsed as an integer,
 * convert it to 0 instead.
 */
// Remember, you can write functions as lambdas too! They work exactly the same.
export const removeDollars = (amounts: string[]): number[] => {
    const numArray = amounts.map((num: string): number => {
        const cleaned = num.startsWith("$") ? num.slice(1) : num;
        return isNaN(parseInt(cleaned)) ? 0 : parseInt(cleaned);
    });
    return numArray;
};

/**
 * Consume an array of messages and return a new list of the messages. However, any
 * string that ends in "!" should be made uppercase. Also, remove any strings that end
 * in question marks ("?").
 */
export const shoutIfExclaiming = (messages: string[]): string[] => {
    const shoutDontAsk = messages
        .filter((message: string): boolean => {
            const rmvQuestions = !message.endsWith("?");
            return rmvQuestions;
        })
        .map((message: string): string => {
            const addCaps =
                message.endsWith("!") ? message.toUpperCase() : message;
            return addCaps;
        });

    return shoutDontAsk;
};

/**
 * Consumes an array of words and returns the number of words that are LESS THAN
 * 4 letters long.
 */
export function countShortWords(words: string[]): number {
    const shortWords = words
        // keep only the words < 4 letters
        .filter((word: string): boolean => {
            const swl = word.length < 4;
            return swl;
        });
    return shortWords.length;
}

/**
 * Consumes an array of colors (e.g., 'red', 'purple') and returns true if ALL
 * the colors are either 'red', 'blue', or 'green'. If an empty list is given,
 * then return true.
 */
export function allRGB(colors: string[]): boolean {
    const allColorsRBG = colors.reduce((allValid: boolean, color: string) => {
        return (
            allValid &&
            (color === "red" ||
                color === "blue" ||
                color === "green" ||
                color === "")
        );
    }, true);
    // if there are colors left in the array, they are not RBG, therefore making this false
    return allColorsRBG;
}

/*   THIS ALSO WORKS
export function allRGB(colors: string[]): boolean {
    const invalidColors = colors.filter((color: string): boolean => {
        // delete red, blue, & green from array
        const invalid =
            color !== "red" &&
            color !== "blue" &&
            color !== "green" &&
            color !== "";
        return invalid;
    });
    // if there are colors left in the array, they are not RBG, therefore making this false
    return invalidColors.length === 0;
}
*/

/**
 * Consumes an array of numbers, and produces a string representation of the
 * numbers being added together along with their actual sum.
 *
 * For instance, the array [1, 2, 3] would become "6=1+2+3".
 * And the array [] would become "0=0".
 */
export function makeMath(addends: number[]): string {
    return "";
}

/**
 * Consumes an array of numbers and produces a new array of the same numbers,
 * with one difference. After the FIRST negative number, insert the sum of all
 * previous numbers in the list. If there are no negative numbers, then append
 * the sum to the list.
 *
 * For instance, the array [1, 9, -5, 7] would become [1, 9, -5, 10, 7]
 * And the array [1, 9, 7] would become [1, 9, 7, 17]
 */
export function injectPositive(values: number[]): number[] {
    return [];
}
