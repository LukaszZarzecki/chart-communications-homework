import './Pagination.css';
import ReactPaginate from 'react-paginate';

type Props = {
    pageCount: number,
    onPageChange: (pageNumber: number) => void,
};

function Pagination({ pageCount, onPageChange }: Props) {
    function handlePageChange(data: { selected: number }) {
        onPageChange(data.selected);
    }

    return (
        <ReactPaginate
            pageCount={pageCount}
            marginPagesDisplayed={2}
            pageRangeDisplayed={5}
            onPageChange={handlePageChange}
            containerClassName={'Pagination'}
            breakClassName={'Pagination__break'}
            previousLinkClassName={'Pagination__page'}
            nextLinkClassName={'Pagination__page'}
            disabledClassName={'Pagination__disabled'}
            pageLinkClassName={'Pagination__page'}
            activeLinkClassName={'Pagination__page--active'}
        />
    );
}

export default Pagination;