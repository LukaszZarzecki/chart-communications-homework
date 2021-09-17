import getTransactions from './getTransactions';

describe('getTransactions', () => {
    test('should throw TypeError for invalid dateStart parameter', async () => {
        await expect(getTransactions(null, new Date())).rejects.toThrow(TypeError);
    });

    test('should throw TypeError for invalid dateEnd parameter', async () => {
        await expect(getTransactions(new Date(), null)).rejects.toThrow(TypeError);
    });

    test('should throw TypeError for invalid dates parameters', async () => {
        await expect(getTransactions(null, null)).rejects.toThrow(TypeError);
    });

    test('should return and array', async () => {
        const transactions = await getTransactions(new Date('2021-09-01'), new Date('2021-10-01'));
        expect(transactions).toEqual(expect.any(Array));
    });
});
