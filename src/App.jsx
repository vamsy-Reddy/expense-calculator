import "./index.css";
import React, { useState } from "react";
import Expenses from "./components/Expenses/Expenses";
import NewExpense from "./components/New Expenses/NewExpense";

const dummyExpenses = [
  {
    id: "e1",
    title: "Bike Fuel",
    amount: 3000.12,
    date: new Date(2020, 7, 14),
  },
  {
    id: "e2",
    title: "PlayStation 5",
    amount: 49999.99,
    date: new Date(2021, 2, 12),
  },  {
    id: "e3",
    title: "Car Insurance",
    amount: 5000.67,
    date: new Date(2021, 2, 28),
  },
  {
    id: "e4",
    title: "Electricity Bill",
    amount: 450,
    date: new Date(2021, 5, 12),
  },
];

function App() {
  const [expenses, setExpenses] = useState(dummyExpenses);

  const addExpenseHandler = (expense) => {
    setExpenses((prevExpenses) => {
      return [expense, ...prevExpenses];
    });
  };

  return (
    <div>
      <center>
        <h1>LET'S GET STARTED..!!</h1>
        <NewExpense onAddExpense={addExpenseHandler} />
        <Expenses items={expenses} />
      </center>
    </div>
  );
}

export default App;
