function gridTraveler(m, n, memo = {}) {
  const key = m + "," + "n";
  if (key in memo) return memo[key];
  if (m < 1) return 0;
  if (n < 1) return 0;
  if (m === 1 && n === 1) return 1;
  memo[key] = gridTraveler(m - 1, n, memo) + gridTraveler(n - 1, m, memo);
  return memo[key];
}

console.log(gridTraveler(1, 1));
console.log(gridTraveler(2, 3));
console.log(gridTraveler(3, 2));
console.log(gridTraveler(3, 3));
console.log(gridTraveler(18, 18));
