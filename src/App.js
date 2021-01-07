import React, {useState, useEffect} from 'react';

function App() {
  const [type, setType] = useState('users');
  const [data, setData] = useState('data');
  const [pos, setPos] = useState({
    x:0, y: 0
  })
  // useEffect(() => {
  //   console.log('render');
  // })

  useEffect(() => {
    fetch(`https://jsonplaceholder.typicode.com/${type}`)
      .then(response => response.json())
      .then(json => setData(json))
  }, [type]); //rerender if type was changed

  const mouseMoveHandler = event => {
    setPos({
      x: event.clientX,
      y: event.clientY
    })
  }

  useEffect(() => {
    console.log('ComponentDidMount')

    window.addEventListener('mousemove', mouseMoveHandler)
    
    return () => {
      window.removeEventListener('mousemove', mouseMoveHandler)
    }
  
  }, [])

  return (
    <div>
      <h1>Resource: {type}</h1>

      <button class="btn btn-primary" onClick={()=> setType('users')}>Users</button>
      <button class="btn btn-warning" onClick={()=> setType('todos')}>Todos</button>
      <button class="btn btn-info" onClick={()=> setType('posts')}>Posts</button>

      {/* <pre>{JSON.stringify(data, null, 2)}</pre> */}
      <pre>{JSON.stringify(pos, null, 2)}</pre>

    </div>
  );
}

export default App;
