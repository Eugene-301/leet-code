export default function test(result, expectedResult) {
  const stringifiedResult = JSON.stringify(result),
    stringifiedExpectedResult = JSON.stringify(expectedResult);

  if (stringifiedResult !== stringifiedExpectedResult) {
    console.log(
      `Error! expected result: ${stringifiedExpectedResult}, but function returned ${stringifiedResult}`
    );
  } else if (stringifiedResult === stringifiedExpectedResult) {
    console.log("Succes! expected result and result match!");
  } else {
    console.log("Unkown error!");
  }
}
