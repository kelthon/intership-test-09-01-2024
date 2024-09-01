import fs from "fs";
import path from "path";

function min(billing: number[]): number {
  let minimum: number = Infinity;
  
  for(let bill of billing) {
    if (bill < minimum && bill > 0) {
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
  let length = 0;

  for (let bill of billing) {
    if (bill > 0) {
      length++;
    }
  }

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


let filename = path.resolve(__dirname, "month_billing .json");
let file = fs.readFileSync(filename, "utf-8");

let list = JSON.parse(file) as number[];

third_answer(list);
