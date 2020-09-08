function converter (mpg) {
    //code to convert miles per imperial gallon to kilometers per liter
    let literPerGallon = 4.54609188;
    let kmPerMile = 1.609344;
    return +(mpg * kmPerMile / literPerGallon).toFixed(2);
}