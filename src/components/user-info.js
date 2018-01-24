import React from 'react'

const UserInfo = () => {
  return (
    <div className='user-info'>
      <img src='https://avatars2.githubusercontent.com/u/12385501?v=4' />
      <h1>
        <a href='https://github.com/gpressutto5'>Guilherme Pressutto</a>
      </h1>

      <ul className='repos-info'>
        <li>Repositories: 0</li>
        <li>Followers: 0</li>
        <li>Following: 0</li>
      </ul>
    </div>
  )
}

export default UserInfo
