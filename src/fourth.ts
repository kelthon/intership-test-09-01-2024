function getBills(billing: Map<string, number>): number[] {
  let bills: number[] = [];

  for (let bill of billing.values()) {
    bills.push(bill); 
  }

  return bills;
}

function sum(list: number[]): number {
  let total = 0;

  for (let num of list) {
    total += num;  
  }

  return total;
}

function percentOf(value: number, total: number) {
  return value * 100 / total;
}

function fourth_answer(billingPerProvince: Map<string, number>): void {
  let total = sum(getBills(billingPerProvince));

  for (let [province, billing] of billingPerProvince.entries()) {
    console.log(`The billing percent of ${province.toUpperCase()} is ${percentOf(billing, total).toFixed(2)}`);
  }
}

let billingPerProvince: Map<string, number> = new Map();

billingPerProvince.set("sp", 67786.43);
billingPerProvince.set("rj", 36678.66);
billingPerProvince.set("mg", 29229.88);
billingPerProvince.set("es", 27165.48);
billingPerProvince.set("others", 19849.53);

fourth_answer(billingPerProvince);