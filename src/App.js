import React, {useState, useEffect, useRef} from 'react';


function App() {
  // const [renderCount, setRenderCount] = useState(1);
  const [value, setValue] = useState('initial')
  const renderCount = useRef(1) // object with .current
  const inputRef = useRef(null) //binding to DOM element input

  useEffect(() => {
    renderCount.current++ //didnt rerendered
    console.log(inputRef.current.value);
  })

  const focus = () => inputRef.current.focus()

  return (
    <div>
      <div className="container">
      <h1>Amount of renders: {renderCount.current}</h1>
        <div className="row justify-content-start">
          <div className="col-6">
            <input ref={inputRef} type="text" onChange={(e) => setValue(e.target.value)} value={value} />
            <button className="btn btn-success" onClick={focus}>Focus</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
