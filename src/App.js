import React, {useState, useEffect} from 'react';

function App() {
  const [type, setType] = useState('users');
  const [data, setData] = useState('data');
  // useEffect(() => {
  //   console.log('render');
  // })

  useEffect(() => {
    fetch(`https://jsonplaceholder.typicode.com/${type}`)
      .then(response => response.json())
      .then(json => setData(json))
  }, [type]); //rerender if type was changed

  useEffect(() => {
    console.log('ComponentDidMount')
  }, [])
  
  return (
    <div>
      <h1>Resource: {type}</h1>

      <button class="btn btn-primary" onClick={()=> setType('users')}>Users</button>
      <button class="btn btn-warning" onClick={()=> setType('todos')}>Todos</button>
      <button class="btn btn-info" onClick={()=> setType('posts')}>Posts</button>

      <pre>{JSON.stringify(data, null, 2)}</pre>

    </div>
  );
}

export default App;
