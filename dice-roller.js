var dicnum = process.argv[2];
dicnum = Number(dicnum);

function getRandomInt(max) {
  return  Math.floor(Math.random() * Math.floor(max));
}

function diceRoller(number) {
  var ary =[];
  for (i = 0; i < dicnum; i++){
   var intnum = getRandomInt(5) +1;
   ary.push(intnum);
  }
  return ary;
}

console.log(diceRoller(dicnum));

