import React from 'react'

const Actions = ({getRepos, getStarred}) => {
  return (
    <div className='row'>
      <div className='col-md-6'>
        <button className='btn btn-secondary btn-lg btn-block' onClick={getRepos}>See repositories</button>
      </div>
      <div className='col-md-6'>
        <button className='btn btn-secondary btn-lg btn-block' onClick={getStarred}>See starred</button>
      </div>
    </div>
  )
}

Actions.propTypes = {
  getRepos: React.PropTypes.func.isRequired,
  getStarred: React.PropTypes.func.isRequired
}

export default Actions
