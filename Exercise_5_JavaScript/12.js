function factorial(num) {
    let factorial = 1
    if (num < 0) {
        return 'Factorial is not defined for negative numbers.'
    } else if (num == 0) {
        return 1
    } else {
        for(let i = 1; i <= num; i++) {
            factorial *= i
        }
        return factorial
    }
}