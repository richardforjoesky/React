import "./ExpenseList.css";
import ExpenseItem from "./../ExpenseItem/ExpenseItem";

function ExpenseList(props) {
    console.log(props.items)
  return (
    <div className="expenses">
      <ExpenseItem
        title={props.items[0].title}
        amount={props.items[0].amount}
        price={props.items[0].amount}
        date={props.items[0].date}
      ></ExpenseItem>
      <ExpenseItem
        title={props.items[1].title}
        amount={props.items[1].amount}
        price={props.items[1].amount}
        date={props.items[1].date}
      ></ExpenseItem>
    </div>
  );
}

export default ExpenseList;