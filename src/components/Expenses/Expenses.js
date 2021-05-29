import React, {useState} from 'react';
import ExpenseItem from './ExpenseItem';
import Card from '../UI/Card.js'
import './Expenses.css'
import ExpenseFilter from './ExpenseFilter.js'
function Expenses(props){
  const [filteredYear, setFilteredYear] = useState('2020');

  const saveFilterSelectHandler = (selectedFilter) => {
    setFilteredYear (selectedFilter);
    console.log(selectedFilter);
  }
    return(
      <div>
        <Card className = "expenses">
        <ExpenseFilter onFilterSelect = {saveFilterSelectHandler}/>
        <ExpenseItem
          title={props.expenses[0].title}
          amount={props.expenses[0].amount}
          date={props.expenses[0].date}
        ></ExpenseItem>
          <ExpenseItem
          title={props.expenses[1].title}
          amount={props.expenses[1].amount}
          date={props.expenses[1].date}
        ></ExpenseItem>  
        <ExpenseItem
        title={props.expenses[2].title}
        amount={props.expenses[2].amount}
        date={props.expenses[2].date}
      ></ExpenseItem>
        <ExpenseItem
          title={props.expenses[3].title}
          amount={props.expenses[3].amount}
          date={props.expenses[3].date}
        ></ExpenseItem>
      </Card>
      </div>
    ); 
}
export default Expenses;