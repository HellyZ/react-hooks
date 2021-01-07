import React, {useState, useEffect} from 'react';

function App() {
  const [type, setType] = useState('users');
  return (
    <div>
      <h1>Resource: {type}</h1>

      <button class="btn btn-primary" onClick={()=> setType('users')}>Users</button>
      <button class="btn btn-warning" onClick={()=> setType('todo')}>Todo</button>
      <button class="btn btn-info" onClick={()=> setType('posts')}>Posts</button>

    </div>
  );
}

export default App;
