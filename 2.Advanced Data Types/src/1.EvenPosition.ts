function solve(input: string[]): void {
  const result: string[] = [];

  input.forEach((el, index) => {
    if (index % 2 === 0) {
      result.push(el);
    }
  });

  console.log(result.join(" "));
}

solve(["40", "50", "60"]);
