function isPalindrome(str) {
  str = str.toLowerCase(); //capital !== low case value
  var noSpaces = str.split(" ").join("");
  var mid = Math.floor(noSpaces.length/2);
  var last = noSpaces.length - 1;

  for (var i = 0; i < mid; i++) {
    if (noSpaces[i] !== noSpaces[last - i]) return false; //last-1
  }
return true;
}


console.log(isPalindrome('p') === true);
console.log(isPalindrome('foo') === false);
console.log(isPalindrome('racecar') === true);
console.log(isPalindrome('Kayak') === true);
console.log(isPalindrome('a santa at NASA') === true); //lower_case
console.log(isPalindrome('live without evil') === false);
console.log(isPalindrome('just some random words') === false);

