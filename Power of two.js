function isPowerOfTwo(n){
    //.. should return true or false ..
    let power = 0;
    while (2 ** power <= n) {
        if (2 ** power === n) return true;
        power++;
    }
    return false;
}