import React, {useState} from 'react';

// для классовых компонентов this.setState({a:1}) -> this.render()

function App() {

  const [counter, setCounter] = useState(0);

  function increment(){
    setCounter(counter + 1);
  }

  function decrement(){
    setCounter(counter - 1);
  }

  return (
    <div>
     <h1>Counter: {counter}</h1>
     <button onClick={increment} className="btn btn-primary">Add</button>
     <button onClick={decrement} className="btn btn-danger">Delete</button>
    </div>
  );
}

export default App;
