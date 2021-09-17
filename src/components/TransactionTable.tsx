import { useState } from 'react';
import Transaction from '../types/Transaction';
import getAwardPoints from '../utility/getAwardPoints';
import Pagination from '../components/Pagination';

type Props = {
    data: Array<Transaction>,
    itemsPerPage: number,
};

function TransactionTable({ data, itemsPerPage }: Props) {
    const [items, setItems] = useState<Array<Transaction>>(data.slice(0, itemsPerPage));
    const pageCount: number = Math.ceil(data.length / itemsPerPage);

    function handlePageChange(pageNumber: number) {
        const startIndex = Math.max(0, pageNumber - 1) * itemsPerPage;
        const endIndex = startIndex + itemsPerPage;

        setItems(data.slice(startIndex, endIndex));
    }

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
                    {items.map(transaction => (
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
            <Pagination pageCount={pageCount} onPageChange={handlePageChange} />
        </>
    );
}

export default TransactionTable;
