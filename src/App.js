import { useEffect, useState } from "react";
import "./App.css";
import CardList from "./components/card-list/card-list.component";
import SearchBox from "./components/search-box/search-box.component";

const App = () => {
  const [ monsters, setMonsters ] = useState([]);
  const [ searchField, setSearchField ] = useState("");

  console.log('Im here');

  const ontextChange = (event) => {
    const searchField = event.target.value.toLocaleLowerCase();
    setSearchField(searchField);
  };


  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
    .then((Response) => Response.json())
    .then((users) => setMonsters(users));
  },[]);
    

  // const { monsters, searchField } = this.state;
  // const { ontextChange } = this;

  const FilteredMonsters = monsters.filter((monster) => {
    return monster.name.toLocaleLowerCase().includes(searchField);
  });

  return (
    <div className="App">
      <header className="App-header">
        <h1 className="app-title">Monsters Rolodex</h1>
        <SearchBox
          onChangehandler={ontextChange}
          placeholder="Go Search Monsters"
        />
      </header>
      <CardList monsterlist={FilteredMonsters}></CardList>
    </div>
  );
};

export default App;
