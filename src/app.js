import React, { Component } from 'react'
import AppContent from './components/app-content'
import ajax from '@fdaciuk/ajax'

class App extends Component {
  constructor () {
    super()
    this.state = {
      userinfo: null,
      repos: [],
      starred: []
    }
  }
  handleSearch (e) {
    const key = e.which || e.keyCode
    const ENTER = 13
    if (key !== ENTER) {
      return
    }
    ajax().get(`https://api.github.com/users/${e.target.value}`)
      .then((result) => {
        this.setState({
          userinfo: {
            avatar: result.avatar_url,
            username: result.login,
            name: result.name || result.login,
            repos: result.public_repos,
            followers: result.followers,
            following: result.following
          }
        })
      })
  }
  render () {
    return (
      <AppContent
        userinfo={this.state.userinfo}
        repos={this.state.repos}
        starred={this.state.starred}
        handleSearch={(e) => this.handleSearch(e)}
      />
    )
  }
}

export default App
