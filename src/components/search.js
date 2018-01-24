import React from 'react'

const Search = ({handleSearch}) => {
  return (
    <div className='input-group mb-3'>
      <input
        type='search'
        className='form-control'
        placeholder='Type the username'
        data-js='search-input'
        onKeyUp={handleSearch}
        />
      <div className='input-group-append'>
        <button
          className='btn btn-primary'
          onClick={handleSearch}
          >
            Search
          </button>
      </div>
    </div>
  )
}

Search.propTypes = {
  handleSearch: React.PropTypes.func.isRequired
}

export default Search
