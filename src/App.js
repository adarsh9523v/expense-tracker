
import ExpenseItem from './components/ExpenseItem';

function App(){
    let expenses = [
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
    ]

    return( 
        <div>
            <h2>Let's get started</h2>
            <ExpenseItem
                date={ expenses[0].date }
                title={ expenses[0].title } 
                amount={ expenses[0].amount }>
            </ExpenseItem>
            <ExpenseItem
                date={ expenses[1].date }
                title={ expenses[1].title } 
                amount={ expenses[1].amount }>
            </ExpenseItem>
            <ExpenseItem
                date={ expenses[2].date }
                title={ expenses[2].title } 
                amount={ expenses[2].amount }>
            </ExpenseItem>
            <ExpenseItem
                date={ expenses[3].date }
                title={ expenses[3].title } 
                amount={ expenses[3].amount }>
            </ExpenseItem>v
        </div>
    );
}

export default App;