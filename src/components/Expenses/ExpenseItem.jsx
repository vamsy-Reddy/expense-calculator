import Card from "./Card";
import ExpenseDate from "./ExpenseDate";
import React, {useState} from "react";

const ExpenseItem = (props) => {

  const[title,setTtitle] = useState(props.title)

  const clickHandler =() => {
    setTtitle('changed')
  }
   
  return (
    <Card className="expense-item">
      <div>
        <ExpenseDate date={props.date} />
      </div>
      <div className="expense-item__description">
        <h2>{title}</h2>
      </div>
      <div className="expense-item__price">₹ {props.amount}</div>
      <button onClick={clickHandler}>change title</button>
    </Card>
  );
};

export default ExpenseItem;
