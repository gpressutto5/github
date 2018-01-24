import React from 'react'

const UserInfo = ({userinfo}) => {
  return (
    <div className='user-info'>
      <img src={userinfo.avatar} />
      <h1>
        <a href={`https://github.com/${userinfo.username}`}>{userinfo.name}</a>
      </h1>

      <ul className='repos-info'>
        <li>Repositories: 0</li>
        <li>Followers: 0</li>
        <li>Following: 0</li>
      </ul>
    </div>
  )
}

UserInfo.propTypes = {
  userinfo: React.PropTypes.shape({
    avatar: React.PropTypes.string.isRequired,
    username: React.PropTypes.string.isRequired,
    name: React.PropTypes.string.isRequired,
    repos: React.PropTypes.number.isRequired,
    followers: React.PropTypes.number.isRequired,
    following: React.PropTypes.number.isRequired
  })
}

export default UserInfo
