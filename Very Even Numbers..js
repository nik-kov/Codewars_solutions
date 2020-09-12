function isVeryEvenNumber(n) {
    console.log(n);
    while (n > 9) {
        let str = n + '';
        let sum = 0;
        for (let i = 0; i < str.length; i++) {
            sum +=  +str[i]
        }
        n = sum;
        console.log(sum);
    }


    return n % 2 === 0;
}