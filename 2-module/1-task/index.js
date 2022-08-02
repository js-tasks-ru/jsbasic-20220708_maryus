function sumSalary(salaries) {
  let result = 0;
  for (let i in salaries) {
    if (isFinite(salaries[i])) {
      result += salaries[i];
    }
  }
  return result;
}
