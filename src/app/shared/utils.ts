export const distinct = (inputArr: any[]) => {
  const outputArr = [];
  for (let i = 0; i < inputArr.length; i++) {
    const json = JSON.stringify(inputArr[i]);
    if (outputArr.indexOf(json) < 0) {
      outputArr.push(json);
    }
  }
  return outputArr.map(el => JSON.parse(el));
}
