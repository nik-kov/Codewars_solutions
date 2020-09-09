function largestPower(n){
    let k;
    for (k = 0; 3 ** k < n; k++) {
    }
    return k - 1;
}
console.log(largestPower(5));