function countOddNumbers(list) {
    return list.reduce((count, num) => {
        if (num % 2 !== 0) {
            return count + 1
        }
        return count
    }, 0)
}
