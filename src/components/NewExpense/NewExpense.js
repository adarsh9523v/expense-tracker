import React from "react";

import ExpenseForm from "./ExpenseForm";

import './NewExpense.css';

const newExpense = (props) =>{

    const saveExpenseDataHandler = (enteredExpenseData) => {
        const expenseData = {
            ...enteredExpenseData,
            id: Math.random().toString()
        }

        props.onAddExpense(expenseData);
    };

    return(
        <div className="new-expense">
            <ExpenseForm onSaveExpenseData=
            {saveExpenseDataHandler}/>
        </div>
    );
}

export default newExpense;