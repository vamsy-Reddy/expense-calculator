const ExpenseItem = () => {

    const ExpenseDate = new Date();
    const ExpenseDescription =  "Car Insurance";
    const ExpensePrice = "249.5"


  return (
    <div className="expense-item">
      <div>{ExpenseDate.toISOString()}</div>
      <div className="expense-item__description">
        <h2>{ExpenseDescription}</h2>
      </div>
      <div className="expense-item__price">₹ {ExpensePrice}</div>
    </div>
  );
};

export default ExpenseItem;
