import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { setFilters } from '../redux/moviesSlice';
import Select from 'react-select';
import makeAnimated from 'react-select/animated';

const animatedComponents = makeAnimated();

const Filter = () => {
  const movies = useSelector(state => state.movies.movies);
  const dispatch = useDispatch();

  const categories = [...new Set(movies.map(movie => movie.category))];

  const options = categories.map(category => ({
    value: category,
    label: category
  }));

  const handleFilterChange = (selectedOptions) => {
    const selectedCategories = selectedOptions ? selectedOptions.map(option => option.value) : [];
    dispatch(setFilters(selectedCategories));
  };

  return (
    <div>
      <Select
        placeholder= "Select category..."
        isMulti
        name="categories"
        components={animatedComponents}
        options={options}
        className="basic-multi-select"
        classNamePrefix="select"
        onChange={handleFilterChange}
      />
    </div>
  );
};

export default Filter;
