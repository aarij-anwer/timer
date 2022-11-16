// console.log('.');

//get the parameters
let input = process.argv;

//start at 2 because the first two are not parameters that we will use
for (let i = 2; i < input.length; i++) {
  let delay = Number(input[i]);
  if (delay >= 0) {
    //also filters out NaN
    setTimeout(() => {
      process.stdout.write('.');
    }, delay * 1000);
  }
}