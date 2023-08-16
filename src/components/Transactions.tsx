// Transactions.tsx

import React, { useState } from "react";

const transactionsData = [
  {
    id: 1,
    date: "2023-06-01",
    amount: 100,
    status: "Processing",
    transactionType: "Deposit",
  },
  {
    id: 2,
    date: "2023-06-02",
    amount: 200,
    status: "Completed",
    transactionType: "Purchase",
  },
  {
    id: 3,
    date: "2023-06-03",
    amount: 150,
    status: "Declined",
    transactionType: "Deposit",
  },
];

const Transactions: React.FC = () => {
  const [filter, setFilter] = useState("all");

  const filteredTransactions =
    filter === "all"
      ? transactionsData
      : transactionsData.filter(
          (transaction) =>
            transaction.status.toLowerCase() === filter.toLowerCase()
        );

  return (
    <div className="flex flex-col p-8 lg:mt-0">
      <h2 className="text-lg font-semibold mb-4">Transactions</h2>
      <div className="hidden lg:block mb-4">
        <button
          className={`mr-4 ${filter === "all" ? "font-semibold" : ""}`}
          onClick={() => setFilter("all")}
        >
          View All
        </button>
        <button
          className={`mr-4 ${filter === "deposit" ? "font-semibold" : ""}`}
          onClick={() => setFilter("deposit")}
        >
          Deposit
        </button>
        <button
          className={`mr-4 ${filter === "purchased" ? "font-semibold" : ""}`}
          onClick={() => setFilter("purchased")}
        >
          Purchased
        </button>
      </div>
      <table className="w-full">
        <thead>
          <tr>
            <th className="px-4 py-2">Date</th>
            <th className="px-4 py-2">Transaction</th>
            <th className="px-4 py-2">Amount</th>
            <th className="hidden lg:block px-4 py-2">Status</th>
          </tr>
        </thead>
        <tbody>
          {filteredTransactions.map((transaction) => (
            <tr key={transaction.id}>
              <td className="border px-4 py-2">{transaction.date}</td>
              <td className="border px-4 py-2">{transaction.transactionType}</td>
              <td className="border px-4 py-2">{transaction.amount}</td>
              <td className="hidden lg:block border px-4 py-2">{transaction.status}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Transactions;
