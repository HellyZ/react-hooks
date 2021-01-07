import React, {useState} from 'react';

// для классовых компонентов this.setState({a:1}) -> this.render()

function computeInitialCounter(){
  console.log('Some calculations...');
  return Math.trunc(Math.random() * 20);
}

function App() {

  // const [counter, setCounter] = useState(0);
  // const [counter, setCounter] = useState(computeInitialCounter());
  const [counter, setCounter] = useState(() => {
    return computeInitialCounter()
  })

  function increment(){
    // setCounter(counter + 1);
    // setCounter(counter + 1);
    setCounter((prevCounter) => {
      return prevCounter + 1
    });
    // setCounter(prev => prev + 1);
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
