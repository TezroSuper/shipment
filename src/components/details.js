import React, { useState, useEffect } from 'react';

const Details = () => {
  const [status, setStatus] = useState('شپمنٹ روانہ ہو چکی ہے...');
  
  useEffect(() => {
    const timer = setTimeout(() => {
      setStatus('گاڑی اگلے اسٹاپ پر پہنچ رہی ہے (2 کلومیٹر دور)');
    }, 3000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div style={{padding: '20px', textAlign: 'center'}}>
      <h2>لائیو ٹریکنگ سسٹم</h2>
      <div style={{background: '#007bff', color: 'white', padding: '15px', borderRadius: '10px'}}>
        <h3>{status}</h3>
      </div>
      <p>گاڑی نمبر: TZR-786</p>
    </div>
  );
};
export default Details;
