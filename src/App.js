import React, {useState} from 'react';

import NewExpense from './components/NewExpense/NewExpense';

import Expenses from './components/Expenses/Expenses';

let DUMMY_EXPENSE = [
    {
        id: 'e1',
        title: 'school fee',
        amount: 250,
        date: new Date(2021, 5, 12)
    },
    {
        id: 'e2',
        title: 'Books',
        amount: 20,
        date: new Date(2022, 2, 16)
    },
    {
        id: 'e3',
        title: 'House Rent',
        amount: 700,
        date: new Date(2021, 10, 17)
    },
    {
        id: 'e4',
        title: 'Food',
        amount: 500,
        date: new Date(2021, 4, 19)
    }
];

const App = () => {

    const [expenses, setExpenses] = useState(DUMMY_EXPENSE);
    
    const addExpenseHAndler = (expense) => {
        const updatedExpense = [expense, ...expenses];
        setExpenses(updatedExpense);
    };

    return( 
        <div>
            <NewExpense onAddExpense={addExpenseHAndler}/>
            <Expenses item={expenses} />
        </div>
    );
}

export default App; 