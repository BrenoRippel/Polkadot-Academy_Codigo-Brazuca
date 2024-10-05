function sumOfDigits(num) {
    return String(Math.abs(num))
        .split('')
        .map(Number)
        .reduce((sum, digit) => sum + digit, 0)
}