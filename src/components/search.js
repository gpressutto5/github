import React from 'react'

const Search = ({handleSearch, isDisabled}) => {
  return (
    <div className='input-group mb-3'>
      <input
        type='search'
        className='form-control'
        placeholder='Type the username'
        disabled={isDisabled}
        data-js='search-input'
        onKeyUp={handleSearch}
        />
      <div className='input-group-append'>
        <button
          className='btn btn-primary'
          disabled={isDisabled}
          onClick={handleSearch}
          >
            Search
          </button>
      </div>
    </div>
  )
}

Search.propTypes = {
  handleSearch: React.PropTypes.func.isRequired,
  isDisabled: React.PropTypes.bool.isRequired
}

export default Search
