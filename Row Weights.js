function rowWeights(array){
    let sum1 = 0;
    let sum2 = 0;
    for (let i = 0; i < array.length; i++) {
        if (i % 2) {
            sum2 += array[i];
        } else {
            sum1 += array[i];
        }
    }
    return [sum1, sum2];
}