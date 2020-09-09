function differenceOfSquares(n){
    let sum1 = 0;
    let sum2 = 0;
    let i = 1;
    while(i <= n) {
        sum1 += i;
        sum2 += i ** 2;
        i++;
    }
    sum1 = sum1 ** 2;
    return sum1 - sum2;
}
console.log(differenceOfSquares(15));