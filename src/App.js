import React from "react";
import { CardList } from './components/card-list/card-list.jsx'
import './index.css';
import { Search } from './components/search-box/search.jsx'
import { Loader } from './components/loader/loader.jsx'
class App extends React.Component {
  
  constructor(){
    super();
    this.state = {
      monsters: [],
      searchParam: "",
      loading: true
    };
  }
  
  async componentDidMount() {
    try {
      const response = await fetch('https://jsonplaceholder.typicode.com/users');
      const users = await response.json();
      this.setState({ monsters: users, loading: false });
    } catch (error) {
      console.error('Failed to fetch monsters:', error);
      this.setState({ loading: false });
    }
  }

  render() {
    const { monsters, searchParam, loading } = this.state;
    const filteredArray = monsters.filter(monster =>
      monster.name.toLowerCase().includes(searchParam.toLowerCase())
    );

    return (
      <div className="monster-app">
        {loading ? (
          <div className="loading-section">
            <h1>Monster Hive</h1> 
            <Search
            placeholder = "Search monster"
            handleChange = { e => this.setState({ searchParam: e.target.value }) }
            />
            <Loader />
          </div>
        ) : (
          <div className="monster-section">
            <h1>Monster Hive</h1>
            <Search 
              placeholder="Search monster" 
              handleChange={e => this.setState({ searchParam: e.target.value })}
            />
            <CardList monsters={filteredArray} />
          </div>
        )}
      </div>
    );
  }
}

export default App;
