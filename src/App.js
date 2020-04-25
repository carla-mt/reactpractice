import React, { Component } from 'react';
import './App.css';
import SearchTab from './components/SearchTab'
import gitHubService from './services/github-service';


class App extends Component {
  state = {
    users: [],
    loading: true,
    searchTerm: '',
  }

  searchTermOnGitHub = () => {
    gitHubService.findUsers(this.state.searchTerm)
      .then(response => {
        this.setState({ users: response.data.items, loading: false })
        //Con este cambio de estado guardo la info en el componente
      })

  }

  handleChange = (event) => {
    this.setState({ searchTerm: event.target.value });
  }

  handleSubmit = (event) => {
    event.preventDefault();
    this.searchTermOnGitHub();
  }

  render() {
    return (
      <div className="App">
        <SearchTab
          searchterm={this.state.searchTerm}
          handleChange={this.handleChange}
          handleSubmit={this.handleSubmit} />

        {this.state.users.map((user, index) => {
          return (
            <p key={index}>{user.login}</p>
          )
        })
        }

      </div>
    )
  }
}

export default App;

