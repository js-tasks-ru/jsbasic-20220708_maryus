function checkSpam(str) {
  const spamFilters = ['1xBet', 'XXX'];
  const stringToCheckOnSpam = str.toLowerCase();

  for (const spamItem of spamFilters) {
    if (stringToCheckOnSpam.includes(spamItem.toLowerCase())) {
      return true;
    }
  }
  return false;
}
