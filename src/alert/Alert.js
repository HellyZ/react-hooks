import React from 'react';
import {AlertContext, useAlert} from './AlertContext';

export default function Alert() {
  const alert = useAlert()

  if (!alert) return null

  return (
    <div className="alert alert-success">
      Important message
    </div>
  )
}
