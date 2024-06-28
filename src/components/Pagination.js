import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { setPage, setItemsPerPage } from '../redux/moviesSlice';
import { PaginationButton } from '../styles';

const Pagination = () => {
  const dispatch = useDispatch();
  const currentPage = useSelector(state => state.movies.currentPage);
  const itemsPerPage = useSelector(state => state.movies.itemsPerPage);
  const totalItems = useSelector(state => state.movies.movies.length);

  const totalPages = Math.ceil(totalItems / itemsPerPage);

  return (
    <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', marginTop: '16px' }}>
      <PaginationButton disabled={currentPage === 1} onClick={() => dispatch(setPage(currentPage - 1))}>
        Previous
      </PaginationButton>
      <span style={{ margin: '0 16px' }}>{currentPage} / {totalPages}</span>
      <PaginationButton disabled={currentPage === totalPages} onClick={() => dispatch(setPage(currentPage + 1))}>
        Next
      </PaginationButton>
      <select value={itemsPerPage} onChange={(e) => dispatch(setItemsPerPage(Number(e.target.value)))} style={{ marginLeft: '16px' }}>
        <option value={4}>4</option>
        <option value={8}>8</option>
        <option value={12}>12</option>
      </select>
    </div>
  );
};

export default Pagination;
