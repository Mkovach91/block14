 const userInput = prompt (`Enter your lucky numbers here` , `7, 13, 25, 99, 100`);

const luckyNum = userInput.split(`,`).map(Number);
console.log(luckyNum);

for( let index = 0; index < luckyNum.length; index = index + 1) {
  console.log(luckyNum[index]);
  const getLength = luckyNum.length;
  console.log(getLength)
}

let getSum = 0

for(let index = 0; index < luckyNum.length; index = index + 1){
  getSum += luckyNum[index];
}

console.log(`All numbers added together`, getSum)

const getMean = getSum / luckyNum.length
console.log(getMean)

let getMin = luckyNum[0]

for (let index = 0; index < luckyNum.length; index += 1){
  if (luckyNum[index] < getMin) {
    getMin = luckyNum[index];
  }
}

console.log(getMin)

let getMax = luckyNum[0]

for (let index = 0; index < luckyNum.length; index += 1){
  if (luckyNum[index] > getMax) {
    getMax = luckyNum[index];
  }
}

console.log(getMax)

let getRange = getMax - getMin;
console.log(getRange)

const evenNumbers = [];

for(let index = 0; index < luckyNum.length; index += 1) {
  if (luckyNum[index] % 2 === 0) {
    evenNumbers.push(luckyNum[index]);
  }
}

console.log(evenNumbers)

const oddNumbers = [];

for(let index = 0; index < luckyNum.length; index += 1) {
  if (luckyNum[index] % 2 !== 0) {
    oddNumbers.push(luckyNum[index]);
  }
}

console.log(oddNumbers)



