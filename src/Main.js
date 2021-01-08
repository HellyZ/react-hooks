import React from 'react';
import { useAlert } from './alert/AlertContext';

export default function Main() {
  const {toggle} = useAlert();
  return (
    <>
      <h1>  Hello! It's example with useContext</h1>
      <button onClick={toggle} className="btn btn-success">Show alert</button>
    </>
  )
}
