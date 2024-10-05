function multiples(num1, num2) {
    if (num2 === 0) {
        return false
    }
    return num1 % num2 === 0
}