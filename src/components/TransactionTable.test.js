import TransactionTable from './TransactionTable';
import { mount } from 'enzyme';

describe('<TransactionTable />', () => {
    let transactionTable = null;

    beforeEach(() => {
        transactionTable = mount(<TransactionTable data={[]} itemsPerPage={10} />)
    });

    test('should display a table', () => {
        expect(transactionTable.find('table').length).toBe(1);
    });

    test('should display Pagination', () => {
        expect(transactionTable.find('Pagination').length).toBe(1);
    });
});
