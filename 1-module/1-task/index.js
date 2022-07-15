function factorial(n) {
  if (n === 0 || n === 1) {
    return 1;
  }

  let result = 2;
  for (let i = 3; i <= n; i++) {
    result *= i;
  }
  return result;
}
