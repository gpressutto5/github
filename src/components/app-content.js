import React from 'react'
import Search from './search'
import UserInfo from './user-info'
import Actions from './actions'
import Repos from './repos'

const AppContent = ({userinfo, repos, starred, handleSearch, getRepos, getStarred}) => {
  return (
    <div className='app'>
      <Search handleSearch={handleSearch} />
      {!!userinfo && <UserInfo userinfo={userinfo} />}
      {!!userinfo && <Actions getRepos={getRepos} getStarred={getStarred} />}

      {!!repos.length && <Repos
        classname='repos'
        title='Repositories:'
        repos={repos}
      />}

      {!!starred.length && <Repos
        classname='starred'
        title='Starred:'
        repos={starred}
      />}
    </div>
  )
}

AppContent.propTypes = {
  userinfo: React.PropTypes.object,
  repos: React.PropTypes.array.isRequired,
  starred: React.PropTypes.array.isRequired,
  handleSearch: React.PropTypes.func.isRequired,
  getRepos: React.PropTypes.func.isRequired,
  getStarred: React.PropTypes.func.isRequired
}

export default AppContent
