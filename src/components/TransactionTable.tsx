import Transaction from '../types/Transaction';
import getAwardPoints from '../utility/getAwardPoints';

type Props = {
    data: Array<Transaction>
};

function TransactionTable({ data }: Props) {
    return (
        <>
            <h2>Order list</h2>
            <table className="TransactionTable">
                <thead>
                    <tr>
                        <th>Transaction ID</th>
                        <th>User ID</th>
                        <th>Transaction Date</th>
                        <th>Transaction Value</th>
                        <th>Points Awarded</th>
                    </tr>
                </thead>
                <tbody>
                    {data.map(transaction => (
                        <tr key={transaction.id}>
                            <td>{transaction.id}</td>
                            <td>{transaction.idUser}</td>
                            <td>{transaction.date.toUTCString()}</td>
                            <td>${transaction.value}</td>
                            <td>{getAwardPoints(transaction.value)} pts</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </>
    );
}

export default TransactionTable;
