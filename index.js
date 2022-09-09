function sum(a, b) {
    return a + b;
}

/* console.log(sum(3,2))
console.log(sum(-3,-6))
console.log(sum(7,3)) */

function hoursIntoSeconds(hours) {

    return hours * 60 * 60;

}

/* console.log(hoursIntoSeconds(2));
console.log(hoursIntoSeconds(10));
console.log(hoursIntoSeconds(24)); */

function perimeterOfRectangle(a, b) {
    return (a + b) * 2;
}

/* console.log(perimeterOfRectangle(6,7));
console.log(perimeterOfRectangle(20,10));
console.log(perimeterOfRectangle(2,9)); */

function calcTriangleArea(base, height) {
    return (1 / 2) * base * height
}

/* console.log(calcTriangleArea(3,2));
console.log(calcTriangleArea(10,10));
console.log(calcTriangleArea(20,20)); */

function extendString(word) {
    return word + "Frontend"
}

/* console.log(extendString('Apple'));
console.log(extendString('Banana'));
console.log(extendString('Matas')); */

function isItGreater(num1, num2) {
    return num1 + num2 > 100;
}

/* console.log(isItGreater(20,10))
console.log(isItGreater(50,60))
console.log(isItGreater(100,-50)) */

function numLessOrEqualToZero(num) {
    return num <= 0
}

/* console.log(numLessOrEqualToZero(3))
console.log(numLessOrEqualToZero(0))
console.log(numLessOrEqualToZero(-2)) */

function returnOpositeBool(bool) {
    return !bool
}

/* console.log(returnOpositeBool(false))
console.log(returnOpositeBool(true)) */

function isNotZero(num) {
    return num !== 0
}

/* console.log(isNotZero(3)) */

function remainder(num1, num2) {
    return num1 % num2
}

/* console.log(remainder(7, 8)) */

function isNumOdd(num) {
    return num % 2 !== 0
}

/* console.log(isNumOdd(3))
 */

function numberAdd(num) {
    return num % 2 === 0 ? 1 : -1
}

/* console.log(numberAdd(2))
console.log(numberAdd(1))
console.log(numberAdd(5)) */

function isLoggedAndSubbed(logged, subbed) {
    return (logged === "LOGGED_IN") && (subbed === "SUBSCRIBED")

}

/* console.log(isLoggedAndSubbed("LOGGED_IN", "SUBSCRIBED")) */

function isLoggedAndSubbed(logged, subbed) {
    return (logged === "LOGGED_IN") || (subbed === "SUBSCRIBED")

}

console.log(isLoggedAndSubbed("LOGGED_OUT", "UNSUBSCRIBED"))