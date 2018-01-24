import React, { Component } from 'react'
import Search from './components/search'
import UserInfo from './components/user-info'
import Actions from './components/actions'
import Repos from './components/repos'

class App extends Component {
  render () {
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
}

export default App
