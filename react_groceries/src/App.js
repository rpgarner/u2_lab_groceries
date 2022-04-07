import React from 'react'
import './App.css';
import groceries from './data/groceries.json'
import GroceryList from './data/components/GroceryList';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <div>
          <h1>Grocery list</h1>
          {groceries.map((item) => (
              <GroceryList item={item} key={item.item}/>
          ))}

        </div>
       
      </header>
    </div>
  );
}

export default App;
