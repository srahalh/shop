import { useEffect, useState } from 'react';
import PropTypes from 'prop-types';

function useSearch(elements) {

  const [searchValue, setSearchValue] = useState('');
  const [elementsSearched, setElementsSearched] = useState(elements);

  useEffect(() => {
    if (elements && elements.length !== 0) {
      if (searchValue === '') {
        setElementsSearched(elements);
      } else {
        setElementsSearched(
          elements.filter((product) => {
            return product.category //cuidado aca que puede explotar
              .toLocaleLowerCase()
              .includes(searchValue.toLocaleLowerCase());
          })
        );
      }
    }
  }, [elements, searchValue]);

  return {elementsSearched, setSearchValue};

}

useSearch.propTypes = {
  elements: PropTypes.arrayOf(PropTypes.object),
};

export default useSearch;
