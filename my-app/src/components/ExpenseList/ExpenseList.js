import "./ExpenseList.css";
import ExpenseItem from "./../ExpenseItem/ExpenseItem";
import Card from "../ExpenseItem/Card";
import ExpensesFilter from "./../ExpensesFilter/ExpensesFilter";
import { useState} from 'react'
function ExpenseList(props) {

    const [filteredYear, setFiltered] = useState('2020');

    const filterChangeHandler = (selectedYear) => {
        console.log(selectedYear);
        setFiltered(selectedYear);
    }
  return (
    <Card className="expenses">
      <ExpensesFilter selected={filteredYear} onChangeFilter={filterChangeHandler}/>
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
