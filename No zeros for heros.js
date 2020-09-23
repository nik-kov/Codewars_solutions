function noBoringZeros(n) {
    while (n !== 0 && n % 10 === 0) {
        n = n / 10;
    }
    return n;
}