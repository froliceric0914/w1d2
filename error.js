
var globalVar = 1;
function someFunc() {
     var scopeVar = 2;
     otherVar = globalVar + scopeVar;
}
someFunc();


console.log('globalVar:'  + globalVar); // &gt;&gt; 1
console.log('otherVar: ' + otherVar); // &gt;&gt; 3
console.log('scopeVar: ' + scopeVar);

try {
     undefFunc();
} catch (err) {
     console.log('Error:');
     console.log(err);
     console.log('--------------------');
}

console.log('Error:');
console.log(err);