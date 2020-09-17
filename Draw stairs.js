//Given a number n, draw stairs using the letter "I", n tall and n wide,
// with the tallest in the top left.
//    For example n = 3 result in "I\n I\n I", or printed:
//"I
//  I
//   I"

//Учитывая число n, нарисуйте лестницу, используя букву «I», n высотой и n шириной,
// причем самая высокая находится в верхнем левом углу.
//    Например, n = 3 приведет к "I \ n I \ n I" или напечатано:
//"I
//  I
//   I"


function drawStairs(n) {
    let str = '';
    for (let i = 0; i < n; i++) {
        str += ' '.repeat(i) + 'I';
        if (i < n - 1) str += '\n';
    }
    return str;
}
console.log(drawStairs(7));




describe("Some simple stairs", function() {
    it("Draw stairs with only 1 step", () => assert.equal(drawStairs(1), "I", "The first step has no padding on the left, just an 'I'"));
    it("Draw stairs with 3 steps", () => assert.equal(drawStairs(3), "I\n I\n  I", "There's something wrong with these 3 steps"));
    it("Draw stairs with 5 steps", () => assert.equal(drawStairs(5), "I\n I\n  I\n   I\n    I", "5-step stairs no good"));
});