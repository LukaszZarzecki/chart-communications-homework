import Transaction from '../types/Transaction';
import getAwardPoints from '../utility/getAwardPoints';

type Props = {
    data: Array<Transaction>
};

function TransactionTable({ data }: Props) {
    const userPoints = new Map<number, number>();

    data?.forEach((transaction: Transaction) => {
        let previousUserPoints = 0;

        if (userPoints.has(transaction.idUser)) {
            previousUserPoints = userPoints.get(transaction.idUser) || 0;
        }

        userPoints.set(transaction.idUser, previousUserPoints + getAwardPoints(transaction.value));
    });

    return (
        <>
            <h2>Points awarded to each customer in given date range</h2>
            <table>
                <thead>
                    <tr>
                        <th>User ID</th>
                        <th>Points Awarded</th>
                    </tr>
                </thead>
                <tbody>
                    {Array.from(userPoints).map(([idUser, points]: [number, number]) => (
                        <tr key={idUser}>
                            <td>{idUser}</td>
                            <td>{points} pts</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </>
    );
}

export default TransactionTable;
