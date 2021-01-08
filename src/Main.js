import React from 'react';
import { useAlertToggle } from './alert/AlertContext';

export default function Main() {
  const toggle = useAlertToggle();
  return (
    <>
      <h1>  Hello! It's example with useContext</h1>
      <button onClick={toggle} className="btn btn-success">Show alert</button>
    </>
  )
}
