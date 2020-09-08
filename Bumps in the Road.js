function bump(x) {
    let count = 0;
    for (let i = 0; i < x.length; i++) {
        if (x[i] === 'n') {
            count++;
        }
    }
    if (count > 15) {
        return 'Car Dead';
    } else {
        return 'Woohoo!';
    }
}