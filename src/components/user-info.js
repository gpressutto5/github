import React from 'react'

const UserInfo = ({userinfo}) => {
  return (
    <div style={{
      textAlign: 'center'
    }}>
      <img className='img-fluid' src={userinfo.avatar} style={{
        width: '200px',
        heigth: 'auto',
        borderRadius: '50%'
      }} />
      <h1>
        <a href={`https://github.com/${userinfo.username}`}>{userinfo.name}</a>
      </h1>

      <ul className='list-group list-group-flush'>
        <li className='list-group-item'>Repositories: {userinfo.repos}</li>
        <li className='list-group-item'>Followers: {userinfo.followers}</li>
        <li className='list-group-item'>Following: {userinfo.following}</li>
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
