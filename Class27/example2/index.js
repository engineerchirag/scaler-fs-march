const transactions = [
  { customerId: 1, amount: 100, type: "CREDIT", date: "2024-03-01" },
  { customerId: 2, amount: 150, type: "CREDIT", date: "2024-03-01" },
  { customerId: 1, amount: 200, type: "CREDIT", date: "2024-03-02" },
  { customerId: 3, amount: 50, type: "DEBIT", date: "2024-03-02" },
  { customerId: 2, amount: 120, type: "CREDIT", date: "2024-03-03" },
];

// Step 1: Calculate the total number of transactions.
console.log(transactions.length);

// Step 2: Calculate the total balance of all transactions.
const balanceAmount = transactions.reduce((acc, item) => {
    acc = item.type === "CREDIT" ? acc + item.amount : acc - item.amount;
    return acc;
}, 0);


// Step 3: Calculate the average amount of transactions.
const totalAmount = transactions.reduce((acc, item) => {
    acc += item.amount;
    return acc;
}, 0);

console.log(totalAmount / transactions.length);


// Step 4: Group transactions by date.

const groupByDate = transactions.reduce((acc, item) => {
    if (!acc[item.date]) {
        acc[item.date] = [];
    }

    acc[item.date].push(item);
    return acc;
}, {});
