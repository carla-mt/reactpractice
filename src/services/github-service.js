import axios from 'axios'

class GitHubService {
  constructor() {
    this.gitHubApi = axios.create({ baseURL: 'https://api.github.com/search' });
  }
  findUsers(term) {
    console.log(term)
    return this.gitHubApi.get('/users?q=' + term);
  }
  // findUsers() {
  //   return this.gitHubApi.get('/repos?q=tom');
  // }
  // findUsers() {
  //   return this.gitHubApi.get('/projects?q=tom');
  // }
}
//users/repos/projects info de la misma API. Por cada API hay que crear un doc como este.

const gitHubService = new GitHubService();
//exportar una instancia de esta clase

export default gitHubService;