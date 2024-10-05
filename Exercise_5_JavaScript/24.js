function findDivisors(num) {
    if (num === 0) {
        return "Zero has infinitely many divisors (all non-zero integers).";
    }

    const divisors = []

    for (let i = 1; i <= num; i++) {
        if (num % i === 0) {
            divisors.push(i)
        }
    }

    return divisors
}