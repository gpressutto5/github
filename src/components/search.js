import React from 'react'

const Search = ({handleSearch}) => {
  return (
    <div className='search'>
      <input
        type='search'
        placeholder='Type the username'
        onKeyUp={handleSearch}
      />
    </div>
  )
}

Search.propTypes = {
  handleSearch: React.PropTypes.func.isRequired
}

export default Search
