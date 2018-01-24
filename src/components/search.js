import React from 'react'
import ajax from '@fdaciuk/ajax'

const Search = () => {
  return (
    <div className='search'>
      <input
        type='search'
        placeholder='Type the username'
        onKeyUp={(e) => {
          const key = e.which || e.keyCode
          const ENTER = 13
          if (key !== ENTER) {
            return
          }
          ajax().get(`https://api.github.com/users/${e.target.value}`)
          .then((result) => { console.log(result) })
        }}
      />
    </div>
  )
}

export default Search
