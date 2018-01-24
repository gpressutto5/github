import React from 'react'

const Repos = ({className, title, repos}) => {
  return (
    <div className={className}>
      <h2>{title}</h2>
      <div className='list-group list-group-flush'>
        {repos.map((repo, index) => (
          <a key={index} className='list-group-item' href={repo.link}>{repo.name}</a>
        ))}
      </div>
    </div>
  )
}

Repos.defaultProps = {
  className: ''
}

Repos.propTypes = {
  className: React.PropTypes.string,
  title: React.PropTypes.string.isRequired,
  repos: React.PropTypes.array.isRequired
}

export default Repos
