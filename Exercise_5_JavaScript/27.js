function sumEvenNumbers(numbers) {
    return numbers.reduce((sum, num) => {
        if (num % 2 === 0) {
            return sum + num
        }
        return sum
    }, 0)
}
