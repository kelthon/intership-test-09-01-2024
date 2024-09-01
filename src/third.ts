function min(billing: number[]): number {
  let minimum: number = Infinity;
  
  for(let bill of billing) {
    if (bill < minimum) {
      minimum = bill;
    }
  }

  return minimum;
}

function max(billing: number[]): number {
  let maximum: number = -Infinity;

  for(let bill of billing) {
    if (bill > maximum) {
      maximum = bill;
    }
  }

  return maximum;
}

function average(billing: number []): number {
  let avg: number = 0;
  let length = billing.length;

  for (let bill of billing) {
    avg += bill / length;
  }

  return avg
}

function numOfDays(billing: number[]): number {
  let numOfDays = 0;
  let avg = average(billing);

  for(let bill of billing) {
    if (bill > avg) {
      numOfDays++;
    }
  }

  return numOfDays;
}

function third_answer(billing: number[]): void {
  console.log(`the minimum bill is ${min(billing)}`);
  console.log(`the maximum bill is ${max(billing)}`);
  console.log(`the number of days that the billing was greater than average is ${numOfDays(billing)}`);
}

third_answer([5, 1, 4]);
