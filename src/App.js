import { Component } from "react";
import "./App.css";
import CardList from "./components/card-list/card-list.component";
import SearchBox from "./components/search-box/search-box.component";

class App extends Component {
  constructor() {
    super();
    this.state = {
      monsters: [],
      searchField: "",
    };
  }

  componentDidMount() {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((Response) => Response.json())
      .then((users) =>
        this.setState(() => {
          return { monsters: users };
        })
      );
    // , () => console.log(this.state)));
  }

  ontextChange = (event) => {

    const searchField = event.target.value.toLocaleLowerCase();
    this.setState(() => {
      return { searchField };
    });
  };

  render() {
    const { monsters, searchField } = this.state;
    const { ontextChange } = this;

    const FilteredMonsters = monsters.filter((monster) => {
      return monster.name.toLocaleLowerCase().includes(searchField);
    });
    

    return (
      <div className="App">
        <header className="App-header">
          <h1 className="app-title">Monsters Rolodex</h1>
          <SearchBox onChangehandler={ontextChange} placeholder= 'Go Search Monsters' />
          
          {/*{FilteredMonsters.map((items) => (
            <p key={items.id}>{items.name}</p>
          ))}*/}
        </header>
        <CardList monsterlist={FilteredMonsters}></CardList>
      </div>
    );
  }
}

export default App;
