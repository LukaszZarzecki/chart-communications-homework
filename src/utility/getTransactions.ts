import Transaction from '../types/Transaction'

// fake transactions generation
async function getTransactions(dateStart: Date, dateEnd: Date): Promise<Array<Transaction>> {
    const transactionList: Array<Transaction> = [];
    
    let id = 1;
    for (let idUser: number = 1; idUser <= 5; idUser += 1) {
        const orderCount: number = Math.floor(Math.random() * 21) + 20; // 20 to 40 orders
        const dateDiff: number = Math.abs(dateEnd.getTime() - dateStart.getTime());
        const dates: Array<Date> = Array(orderCount).fill(0).map(() => {
            const randomTime = dateStart.getTime() + dateDiff * Math.random();
            const date = new Date(randomTime);

            return date;
        }).sort((a: Date, b: Date) => {
            const aTime = a.getTime();
            const bTime = b.getTime();

            if (aTime > bTime) {
                return 1;
            }
            if (aTime < bTime) {
                return -1;
            }

            return 0;
        });

        for (const date of dates) {
            transactionList.push({
                id,
                idUser,
                value: +(Math.random() * 250 + 10).toFixed(2), // 10 - 259
                date: date,
            });

            id += 1;
        }
    }

    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(transactionList);
        }, 1000);
    });
}

export default getTransactions;