import React from 'react';
import PropTypes from 'prop-types';

import './Search.scss';

const Search = ({setSearchValue}) => {
  return (
    <div className="Search__container">
      <input 
        type="text"
        label="search"
        placeholder="Search article by category or title"
        onChange={(event) => setSearchValue(event.target.value)}
      />
    </div>
  )
}

Search.propTypes = {
  setSearchValue: PropTypes.func
}

export default Search