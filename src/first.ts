function first_answer(): void {
  let index: number = 13;
  let sum: number = 0;
  let k: number = 0;

  while ( k < index) {
    k++;
    sum += k;
  }

  console.log(sum);
}

first_answer();
