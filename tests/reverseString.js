function reverseString(str) {
    return [...str].reduceRight((reversed, c) => reversed + c, '');
}

export default reverseString;