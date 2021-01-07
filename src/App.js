import React, {useState, useMemo} from 'react';

function complexCompute(num){
  let i = 0
  while (i < 1000000000) i++
  return num * 2
}

function App() {
  const [number, setNumber] = useState(42)

  const computed = complexCompute(number)

  return (
    <div>
      <h1>Computed number: {number}</h1>
      <button className="btn btn-success" onClick={() => setNumber(prev => prev + 1)}>Add</button>
      <button className="btn btn-danger" onClick={() => setNumber(prev => prev - 1)}>Delete</button>
    </div>
  );
}

export default App;
