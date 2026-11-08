// Оголоси функцію makeArray, яка очікує три параметри:

// firstArray — масив
// secondArray — масив
// maxLength — максимальна довжина результату

// Функція створює новий масив, який містить спочатку всі елементи з firstArray, а потім усі елементи з secondArray.

// Якщо кількість елементів у новому масиві перевищує maxLength, функція повертає копію масиву довжиною maxLength елементів.
// В іншому випадку функція повертає весь новий масив.

function makeArray(firstArray, secondArray, maxLength) {
  const newArray = [];
  const concatArray = firstArray.concat(secondArray);
  if (concatArray.length > maxLength) {
    for (let i = 0; i < maxLength; i++) {
      newArray.push(concatArray[i]);
    }
  } else {
    return concatArray;
  }
  return newArray;
}

console.log(makeArray(['Mango', 'Poly'], ['Ajax', 'Chelsea'], 3)); // ["Mango", "Poly", "Ajax"]
console.log(makeArray(['Mango', 'Poly', 'Houston'], ['Ajax', 'Chelsea'], 4)); // ["Mango", "Poly", "Houston", "Ajax"]
console.log(makeArray(['Mango'], ['Ajax', 'Chelsea', 'Poly', 'Houston'], 3)); // ["Mango", "Ajax", "Chelsea"]
console.log(makeArray(['Earth', 'Jupiter'], ['Neptune', 'Uranus'], 2)); // ["Earth", "Jupiter"]
console.log(makeArray(['Earth', 'Jupiter'], ['Neptune', 'Uranus'], 4)); // ["Earth", "Jupiter", "Neptune", "Uranus"]
console.log(makeArray(['Earth', 'Jupiter'], ['Neptune', 'Uranus', 'Venus'], 0)); // []
