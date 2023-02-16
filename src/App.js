//Using class component

import './App.css';
import SearchBox from './components/search-box/search-box.component';
import CardList from './components/card-list/card-list.component';
import { Component } from 'react';

class App extends Component{
  constructor(){
    super();
    this.state={
      monsters:[],
      searchField:''
    };
    
  }
//componentDidMount() is a lifecycle method which runs after the rendering of the component to the DOM
componentDidMount(){
  fetch('https://jsonplaceholder.typicode.com/users')
  .then((response)=>response.json()
  .then((users)=>{
    this.setState(
      ()=>{
        return{monsters:users};
      }
    )
  }))
}
onSearchChange=(event)=>{
  const searchField=event.target.value.toLocaleLowerCase();
  this.setState(()=>{
    return {searchField}
  });
};
  render(){
    const {monsters,searchField}=this.state;
    const {onSearchChange}=this;
    const filteredMonsters=monsters.filter((monster)=>{
      return monster.name.toLocaleLowerCase().includes(searchField);
    });
    return(
      <div className='App'>
      <h1 className='app-title'>Monsters Rolodex</h1>
        <SearchBox 
          className='search'
          placeholder='Search monsters'        
          onChangeHandler={onSearchChange} />
        <CardList monsters={filteredMonsters}/>

      </div>
    );
  }
}
export default App;

//Using functional components

// import { useState, useEffect} from 'react';
// import './App.css';
// import SearchBox from './components/search-box/search-box.component';
// import CardList from './components/card-list/card-list.component';

// const App=()=>{
//   const [searchField,setSearchField]=useState('');
//   const [monsters,setMonsters]=useState([]);
//   const [filteredMonsters,setFilterMonsters]=useState(monsters);

//   useEffect(()=>{
//     fetch('https://jsonplaceholder.typicode.com/users')
//       .then((response)=>response.json()
//       .then((users)=>{setMonsters(users)}
//     ))
//   },[]);

//   useEffect(()=>{
//     const newFilteredMonsters=monsters.filter((monster)=>{
//       return monster.name.toLocaleLowerCase().includes(searchField);
//       });
//       setFilterMonsters(newFilteredMonsters);
//   },[monsters, searchField]);

//   const onSearchChange=(event)=>{
//     const searchFieldString=event.target.value.toLocaleLowerCase();
//     setSearchField(searchFieldString);
//   };
  
//   return(
//     <div className='App'>
//     <h1 className='app-title'>Monsters Rolodex</h1>
//       <SearchBox 
//         className='search'
//         placeholder='Search monsters'        
//         onChangeHandler={onSearchChange} />
//       <CardList monsters={filteredMonsters}/>

//     </div>
//   );
// }
// export default App;
