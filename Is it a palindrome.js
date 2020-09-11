function isPalindrome(x) {
    let str = '';
    x = x.toLowerCase();
    for (let i = x.length - 1; i >= 0; i--) {
        str += x[i];
    }
    return str === x;
}