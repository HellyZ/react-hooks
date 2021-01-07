import React, { useState, useCallback} from 'react';
import ItemList from './itemsList';


function App() {
  const [colored, setColored] = useState(false);
  const [count, setCount] = useState(1)

  const styles = {
    color: colored ? 'gold' : 'green'
  }

  const generateItemsFromAPI = useCallback(() => {
    return new Array(count).fill('').map((_, i) => `Element ${i+1}`) //fake server call
  }, [count])

  return (
    <div>
      <h1 style={styles}>Elements amount: {count}</h1>
      <button className="btn btn-success" onClick={() => setCount(prev => prev + 1)}>Add</button>
      <button className="btn btn-warning" onClick={() => setColored(prev => !prev)}>Change</button>
      <ItemList getItems={generateItemsFromAPI} />
    </div>
  );
}

export default App;
