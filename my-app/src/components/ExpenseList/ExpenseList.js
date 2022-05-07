import "./ExpenseList.css";
import ExpenseItem from "./../ExpenseItem/ExpenseItem";
import Card from "../ExpenseItem/Card";
function ExpenseList(props) {
    console.log(props.items)
  return (
    <Card className="expenses">
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
    </Card>
  );
}

export default ExpenseList;