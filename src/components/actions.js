import React from 'react'

const Actions = ({getRepos, getStarred}) => {
  return (
    <div className='actions'>
      <button onClick={getRepos}>See repositories</button>
      <button onClick={getStarred}>See starred</button>
    </div>
  )
}

Actions.propTypes = {
  getRepos: React.PropTypes.func.isRequired,
  getStarred: React.PropTypes.func.isRequired
}

export default Actions
