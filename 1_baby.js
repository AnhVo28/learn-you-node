var newArr = [];
for (i = 2; i < process.argv.length; i++) {
  var element = Number(process.argv[i]);
  newArr.push(element);
}
console.log(newArr.reduce((acc, curr)=> acc+curr ,0));

