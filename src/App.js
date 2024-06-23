
import Expenses from './components/Expenses';

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
    ];

    return( 
        <div>
            <h2>Let's get started</h2>
            <Expenses item={expenses} />
        </div>
    );
}

export default App;