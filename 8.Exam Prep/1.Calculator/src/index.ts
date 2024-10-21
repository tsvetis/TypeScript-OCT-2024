type MapType = {
  [key: string]: number;
};
//   type MapType = Record<string, number>;

function solve(first: number, operator: string, second: number): string {
  let result: number = 0;

  //   switch (operator) {
  //     case "+":
  //       result = first + second;
  //       break;
  //     case "-":
  //       result = first - second;
  //       break;
  //     case "/":
  //       result = first / second;
  //       break;
  //     case "*":
  //       result = first * second;
  //       break;
  //   }

  const CalculatorMap: MapType = {
    "+": first + second,
    "-": first - second,
    "/": first / second,
    "*": first * second,
  };

  result = CalculatorMap[operator];
  return result.toFixed(2);
}

console.log(solve(25, "/", 3));
