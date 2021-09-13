import { useEffect, useState } from 'react';
import './App.css';
import Transaction from './types/Transaction';
import getTransactions from './utility/getTransactions';
import TransactionTable from './components/TransactionTable';
import UserPointsTable from './components/UserPointsTable';

const dateStart: Date = new Date('2021-06-01');
const dateEnd: Date = new Date('2021-09-01');

function App() {
    const [transactionList, setTransactionList] = useState<Array<Transaction>>();

    useEffect(() => {
        getTransactions(dateStart, dateEnd).then((transactionList: Array<Transaction>) => {
            setTransactionList(transactionList);
        });
    }, []);

    return (
        <div className="App">
            <h1>Orders for date range from: {dateStart.toUTCString()} to {dateEnd.toUTCString()}</h1>
            {!transactionList ? 'Loading...' : (
                <>
                    <UserPointsTable data={transactionList} />
                    <TransactionTable data={transactionList} />
                </>
            )}
        </div>
    );
}

export default App;
