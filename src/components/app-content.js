import React from 'react'
import Search from './search'
import UserInfo from './user-info'
import Actions from './actions'
import Repos from './repos'

const AppContent = () => {
  return (
    <div className='app'>
      <Search />
      <UserInfo />
      <Actions />

      <Repos
        classname='repos'
        title='Repositories:'
        repos={[{
          name: 'gpressutto5/repo-name',
          link: '#'
        }]}
      />

      <Repos
        classname='starred'
        title='Starred:'
        repos={[{
          name: 'gpressutto5/repo-name',
          link: '#'
        }]}
      />
    </div>
  )
}

export default AppContent
