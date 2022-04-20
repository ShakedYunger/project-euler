const maxNum = 20;

for (let multiple = 1; isDivided(multiple) === false; multiple++) {}

function isDivided(multiple) {
  for (let i = 1; i <= maxNum; i++) {
    if (multiple % i !== 0) return false;
  }
  console.log(multiple);
  return true;
}
