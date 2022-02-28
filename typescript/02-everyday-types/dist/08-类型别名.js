"use strict";
function printCoord(pr) {
}
printCoord({
    x: 200,
    y: 100
});
function printId(id) {
}
printId(100);
printId('hello');
function sanitizedInput(str) {
    return str.slice(0, 2);
}
let userInput = sanitizedInput('hello');
userInput = 'new Input';
