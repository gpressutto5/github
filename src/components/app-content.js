import React from 'react'
import Search from './search'
import UserInfo from './user-info'
import Actions from './actions'
import Repos from './repos'

const AppContent = ({userinfo, repos, starred, isFetching, handleSearch, getRepos, getStarred}) => {
  return (
    <div>
      <div className='container'>
        <div className='row'>
          <div className='col-md-10 offset-md-1'>
            <div className='row'>
              <Search isDisabled={isFetching} handleSearch={handleSearch} />
            </div>
            <div className='row'>
              <div className='col-md-6'>
                {!!userinfo && <UserInfo userinfo={userinfo} />}
              </div>
              <div className='col-md-6'>
                {!!userinfo && <Actions getRepos={getRepos} getStarred={getStarred} />}

                <div className='row'>
                  <div className='col-md-6'>
                    {!!repos.length && <Repos
                      classname='repos'
                      title='Repositories:'
                      repos={repos}
                    />}
                  </div>
                  <div className='col-md-6'>
                    {!!starred.length && <Repos
                      classname='starred'
                      title='Starred:'
                      repos={starred}
                    />}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

AppContent.propTypes = {
  userinfo: React.PropTypes.object,
  repos: React.PropTypes.array.isRequired,
  starred: React.PropTypes.array.isRequired,
  isFetching: React.PropTypes.bool.isRequired,
  handleSearch: React.PropTypes.func.isRequired,
  getRepos: React.PropTypes.func.isRequired,
  getStarred: React.PropTypes.func.isRequired
}

export default AppContent
