import React, {Component} from 'react';
import './App.css';
import { Cardlist } from './components/card-list/card-list.component';
import {SearchBox} from './components/search-box/search-box.component';
class App extends Component{
  constructor(){
    super();

    this.state = {
      monsters:[],
      searchField:''
    }
   

  }
  componentDidMount(){
    
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(response => response.json())
    .then(users => this.setState({monsters:users}))
    
    /*
    const monster = async () => {
      try{
      const userRespose = await fetch('https://jsonplaceholder.typicode.com/users');
      const user = await userRespose.json();
      const firstUser = user[0].id;
      console.log(firstUser)
      const userData = await fetch('https://jsonplaceholder.typicode.com/posts?userId='+firstUser);
      const userDataResponse = await userData.json();
      console.log(userDataResponse);
      }
      catch(err){
        console.log('there was an error')
      }

    }
    */

  }

  handleSearch = e => this.setState({searchField:e.target.value})

  render(){
     const {monsters, searchField} = this.state;
     const filterSearch = monsters.filter( e => e.name.toLowerCase().includes(searchField.toLowerCase()))

    return(
    <div className="App">
    <h1>Monsters Rolodex</h1>
    <SearchBox
      placeholder="Search monsters"
      handleChange={this.handleSearch}

    />
    <Cardlist monsters={filterSearch} />
     
    </div>
    )

  }


}

/*
function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}
*/
export default App;
