function sumOfTripledEvens(tab) {
  let sum = 0;
  for (let i = 0; i < tab.length; i++) {
    if (tab[i] % 2 === 0) {
      sum += tab[i] * 3;
    }
  }
  return sum;
}

function sumOfTripledEvensV2(tab) {
  return tab
    .filter((num) => num % 2 === 0)
    .map((num) => num * 3)
    .reduce((total, currentItem) => total + currentItem);
}

const tab = [0, 1, 2, 3, 4, 5];
console.log(sumOfTripledEvens(tab));
console.log(sumOfTripledEvensV2(tab));
