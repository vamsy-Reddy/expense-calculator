import React from "react";
import ExpenseForm from "./NewExpenseForm";

const NewExpense = (props) => {
   const saveExpenseDataHandler =(enteredData) => {
    const expenseData = {
        ...enteredData,
        id : Math.random().toString(),
    }
       props.onAddExpense(expenseData)
   }
    

return (
    <div className="new-expense">
        <ExpenseForm onSaveExpenseData={saveExpenseDataHandler}/>
    </div>
)
}

export default NewExpense;