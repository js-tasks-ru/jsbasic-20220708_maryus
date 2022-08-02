function camelize(str) {
  const arrayOfStr = str.split("-");
  // have to uppercase first letter of words start from second
  // if str starts with "-" - the first element is empty, so it works correctly
  for (let i = 1; i < arrayOfStr.length; i++) {
    const word = arrayOfStr[i];
    arrayOfStr[i] = word[0].toUpperCase() + word.slice(1);
  }
  return arrayOfStr.join("");
}
