import React, { Component } from 'react'

class App extends Component {
  render () {
    return (
      <div className='app'>
        <div className='search'>
          <input type='search' placeholder='Type the username' />
        </div>
        <div className='user-info'>
          <img src='https://avatars2.githubusercontent.com/u/12385501?v=4' />
          <h1>
            <a href='https://github.com/gpressutto5'>Guilherme Pressutto</a>
          </h1>

          <ul className='repos-info'>
            <li>Repositories: 0</li>
            <li>Followers: 0</li>
            <li>Following: 0</li>
          </ul>

          <div className='actions'>
            <button>See repositories</button>
            <button>See starred</button>
          </div>
        </div>

        <div className='repos'>
          <h2>Repositories:</h2>
          <ul className='repos'>
            <li><a href='#'>gpressutto5/repository-name</a></li>
          </ul>
        </div>

        <div className='starred'>
          <h2>Starred:</h2>
          <ul className='starred'>
            <li><a href='#'>gpressutto5/repository-name</a></li>
          </ul>
        </div>
      </div>
    )
  }
}

export default App
