import React from 'react';

// для классовых компонентов this.setState({a:1}) -> this.render()

function App() {
  return (
    <div>
     <h1>Counter</h1>
     <button className="btn btn-primary">Add</button>
     <button className="btn btn-danger">Delete</button>
    </div>
  );
}

export default App;
