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
  getGitHubApiUrl (username, type) {
    const internalUsername = username ? `/${username}` : ''
    const internalType = type ? `/${type}` : ''
    return `https://api.github.com/users${internalUsername}${internalType}`
  }
  handleSearch (e) {
    const key = e.which || e.keyCode
    const ENTER = 13
    if (key !== ENTER) {
      return
    }
    ajax().get(this.getGitHubApiUrl(e.target.value))
      .then((result) => {
        this.setState({
          userinfo: {
            avatar: result.avatar_url,
            username: result.login,
            name: result.name || result.login,
            repos: result.public_repos,
            followers: result.followers,
            following: result.following
          },
          repos: [],
          starred: []
        })
      })
  }
  getRepos (type) {
    return (e) => {
      ajax().get(this.getGitHubApiUrl(this.state.userinfo.username, type))
        .then((result) => {
          this.setState({
            [type]: result.map((repo) => ({
              name: repo.name,
              link: repo.html_url
            })
            )
          })
        })
    }
  }
  render () {
    return (
      <AppContent
        userinfo={this.state.userinfo}
        repos={this.state.repos}
        starred={this.state.starred}
        handleSearch={(e) => this.handleSearch(e)}
        getRepos={this.getRepos('repos')}
        getStarred={this.getRepos('starred')}
      />
    )
  }
}

export default App
