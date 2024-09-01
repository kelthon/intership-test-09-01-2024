function second_answer(num: number): void {
  let fibo: number[] = [0, 1];
  let index: number = fibo.length - 1;
  let next: number;

  while (fibo[index] < num) {
    next = fibo[index - 1] + fibo[index];
    fibo.push(next);
    index++;
  }

  if (fibo.includes(num)) {
    console.log(`The number ${num} is in Fibonacci's sequence`);
  } else {
    console.log(`The number ${num} isn't in Fibonacci's sequence`);
  }
}

second_answer(15);
