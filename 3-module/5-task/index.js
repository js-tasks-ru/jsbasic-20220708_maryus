function getMinMax(str) {
  const elements = str
    .split(" ")
    .filter((elem) => isFinite(elem))
    .map((elem) => +elem);
  return {
    min: Math.min(...elements),
    max: Math.max(...elements),
  };
  //
  // Find min/max using Reduce:
  //
  // return {
  //   min: elements.reduce((previousElem, currentElem) => {
  //     return currentElem < previousElem ? currentElem : previousElem;
  //   }),
  //   max: elements.reduce((previousElem, currentElem) => {
  //     return currentElem > previousElem ? currentElem : previousElem;
  //   }),
  // };
  //
}
