import React, { useState } from 'react';
const Auth = ({ onLogin }) => {
  return (
    <div style={{padding: '50px'}}>
      <h2>Tezro لاگ ان</h2>
      <input type='text' placeholder='فون نمبر' /><br/>
      <button onClick={onLogin}>داخل ہوں</button>
    </div>
  );
};
export default Auth;
