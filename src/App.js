import React, {useState, useMemo} from 'react';

function complexCompute(num){
  console.log('complexCompute')
  let i = 0
  while (i < 1000000000) i++ //for delay
  return num * 2
}

function App() {
  const [number, setNumber] = useState(42)
  const [colored, setColored] = useState(false)
  const computed = complexCompute(number)

  const styles = {
    color: colored ? 'gold' : 'green'
  }

  return (
    <div>
      <h1 style={styles}>Computed number: {number}</h1>
      <button className="btn btn-success" onClick={() => setNumber(prev => prev + 1)}>Add</button>
      <button className="btn btn-danger" onClick={() => setNumber(prev => prev - 1)}>Delete</button>
      <button className="btn btn-warning" onClick={() => setColored(prev => !prev)}>Change</button>
    </div>
  );
}

export default App;
