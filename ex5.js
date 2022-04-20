// 2520 is the smallest number that can be divided by each of the numbers from 1 to 10 without any remainder.
// What is the smallest positive number that is evenly divisible by all of the numbers from 1 to 20?

const maxNum = 20;

function isDivided(multiple) {
  for (let i = 1; i <= maxNum; i++) {
    if (multiple % i !== 0) return false;
  }
  console.log(multiple);
  return true;
}

for (let multiple = 1; isDivided(multiple) === false; multiple++) {}
