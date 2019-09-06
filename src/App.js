import React from 'react';
import { useInput } from './hooks/input-hook'
import './App.css';

function App() {
  const {value, bind, reset} = useInput("");

  const handleSubmit = (evt) => {
    evt.preventDefault();
    alert(`Welcome ${value}`);
    reset()
  }

  return (
    <div className="App">
      <header className="App-header">
        <form onSubmit={handleSubmit}>
          <label>
            <h1> What's your name? </h1>
            <input 
              type="text" {... bind}
              style={{ height: 40, width: 200, fontSize: 20, fontWeight: "bold", color: "white", backgroundColor: "#5C5C5C"}}
          />
          </label>
        </form>
      </header>
    </div>
  );
}

export default App

// style={{ height: 40, width: 200, fontSize: 20, fontWeight: "bold", color: "white", backgroundColor: "#5C5C5C"}} 
//               onKeyPress={(e) => {
//                 if (e.key === 'Enter') {
//                   setName(e.target.value)
//                 }
//               }}
//                 />
//             <h1>{name}</h1>