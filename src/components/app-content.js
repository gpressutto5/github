import React from 'react'
import Search from './search'
import UserInfo from './user-info'
import Actions from './actions'
import Repos from './repos'

const AppContent = ({userinfo, repos, starred}) => {
  return (
    <div className='app'>
      <Search />
      {!!userinfo && <UserInfo userinfo={userinfo} />}
      {!!userinfo && <Actions />}

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
  userinfo: React.PropTypes.object.isRequired,
  repos: React.PropTypes.array.isRequired,
  starred: React.PropTypes.array.isRequired
}

export default AppContent
