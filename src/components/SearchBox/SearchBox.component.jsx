import React from 'react';

import './SearchBox.styles.scss';

const SearchBox = () => {
  return (
    <div className="d-flex justify-content-center search-box-container">
      <input
        className="search-box rounded"
        type="search"
        placeholder="Digita la parola chiave"
        // onChange={onChangeSearch}
      />
    </div>
  );
};

export default SearchBox;
