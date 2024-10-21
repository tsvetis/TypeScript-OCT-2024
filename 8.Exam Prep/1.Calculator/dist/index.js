function solve(first, operator, second) {
    let result = 0;
    const CalculatorMap = {
        "+": first + second,
        "-": first - second,
        "/": first / second,
        "*": first * second,
    };
    result = CalculatorMap[operator];
    return result.toFixed(2);
}
console.log(solve(25, "/", 3));
