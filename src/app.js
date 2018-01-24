import React, { Component } from 'react'
import AppContent from './components/app-content'

class App extends Component {
  constructor () {
    super()
    this.state = {
      userinfo: {
        avatar: 'https://avatars2.githubusercontent.com/u/12385501?v=4',
        username: 'gpressutto5',
        name: 'Guilherme Pressutto',
        repos: 0,
        followers: 0,
        following: 0
      },
      repos: [{
        name: 'gpressutto5/repo-name',
        link: '#'
      }],
      starred: [{
        name: 'gpressutto5/repo-name',
        link: '#'
      }]
    }
  }
  render () {
    return (
      <AppContent
        userinfo={this.state.userinfo}
        repos={this.state.repos}
        starred={this.state.starred}
      />
    )
  }
}

export default App
