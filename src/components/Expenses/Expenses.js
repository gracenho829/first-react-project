import React, {useState} from 'react';
import ExpenseItem from './ExpenseItem';
import Card from '../UI/Card.js'
import './Expenses.css'
import ExpenseFilter from './ExpenseFilter.js'
function Expenses(props){
  const [filteredYear, setFilteredYear] = useState('2022');

  const saveFilterSelectHandler = (selectedFilter) => {
    setFilteredYear(selectedFilter);
  }
  const filteredExpenses = props.expenses.filter(expense => {return expense.date.getFullYear().toString() === filteredYear;})

    return(
      <div>
        <Card className = "expenses">
        <ExpenseFilter onFilterSelect = {saveFilterSelectHandler} expenses = {props.expenses}/>
        {filteredExpenses.map((expenses) => 
          <ExpenseItem 
            key={expenses.id}
            title ={expenses.title}
            amount = {expenses.amount}
            date = {expenses.date} />)
        }

      </Card>
      </div>
    ); 
}
export default Expenses;