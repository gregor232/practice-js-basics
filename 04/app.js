/*const arr = createArray(1, 100);
const min = 1;
const max = 100;
const create = createArray(min, max);
function createArray(a, b) {

    function randomNumber(a, b) {
        return Math.round((Math.random() * a - b) + b);
    }
    for (var a=[],i=0;i<20;++i) {
        a[i]=randomNumber(min, max);
        return a;
    }

}
console.log(arr); // */
const arr = createArray(1, 100);
function createArray(min, max) {
var arr = [];
for (var i=0, t=20,m = max,n = min; i<t; i++) {
    arr.push(Math.round(Math.random() * (m - n)) + n);
    // nie wiem co zrobic, by losowalo od 1, probowalem z if oraz z math.random i dodawaniem badz odejmowanie w poszczegolnych miejscach nawiasu, ale nie dziala
}
console.log(arr);
return arr;
}
const largest = getLargest(arr);
function getLargest(x) {
    const y = x.sort(function(a, b) {
        return a - b;
    })
    
    console.log(y, 'y');
    return y.slice(0, 10);
}
const numbers = [1, 2, 3, 4, 5];
function getAvg(avg) {
    const total = avg.reduce((acc, c) => acc + c, 0);
    return total / avg.length;
}
const average = getAvg(numbers);
console.log(average);

function getAverage () {
    const a = 10;
    const b = 200;
    const getArr = createArray(a, b);
    console.log(getArr)
    largestTen = getLargest(getArr);
    const averageTen = getAvg(largestTen);
    console.log(averageTen);
    return averageTen;
}
