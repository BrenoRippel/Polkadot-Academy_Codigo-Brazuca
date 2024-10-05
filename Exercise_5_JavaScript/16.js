function palindrome(str) {
    str = str.replace(/\s+/g, '').toLowerCase();

    let strInvert = str.split('').reverse().join('')

    return str === strInvert
}