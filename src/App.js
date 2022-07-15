import './App.css';
import { Component } from 'react';

class App extends Component {
  constructor(){
    super();

    this.state ={
      monsters : [ ],
      searchField : ''
    };
   // console.log('constructor')
}

componentDidMount(){
  //console.log('componentDidMount')
  fetch('https://jsonplaceholder.typicode.com/users')
  .then((response) => response.json())  
  .then((users) => 
  this.setState( 
    () => {
      return {monsters : users};
    },
    () => {
      console.log(this.state);
    } 
    )
    );
  }
  onSearchChange = (e) =>{
      const searchField = e.target.value.toLowerCase();
            this.setState(() => {
                return {searchField};
            });
  };

  render(){
    //console.log('render');
    const {monsters,searchField} =this.state;
    const {onSearchChange} =this;

    const filteredMonsters = monsters.filter ((monster) => {
            return  monster.name.toLowerCase().includes(searchField);
          }); 
          //console.log(filteredMonsters)


    return (
      <div className="App">
      <input className="search-box" 
      type= 'search' 
      placeholder ='Search Monsters' 
      onChange ={onSearchChange}
      //console.log(searchFeild)
        />
        {filteredMonsters.map((monster) => {
            return (
              <div key ={monster.id}>
                <h1>{monster.name}</h1>
              </div> 
              );
          })
        }
      </div>
    );
  }
}

export default App;
