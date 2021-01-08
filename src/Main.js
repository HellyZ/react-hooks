import React from 'react';

export default function Main({ toggle }) {
  return (
    <>
      <h1>  Hello! It's example with useContext</h1>
      <button onClick={toggle} className="btn btn-success">Show alert</button>
    </>
  )
}
