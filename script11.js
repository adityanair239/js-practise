const temperature = [3, -2, -6, -1, "error", 9, 13, 17];

const calcTemp = function (temps) {
  let max = temps[0];
  let min = temps[0];
  for (let i = 1; i < temps.length; i++) {
    if (typeof temps[i] === "number")
      if (max < temps[i]) {
        max = temps[i];
      }
    if (min > temps[i]) {
      min = temps[i];
    }
  }
  console.log(max, min);
  return max - min;
};

const c = calcTemp(temperature);
console.log(c);
