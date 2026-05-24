import React from 'react';
import { Outlet } from 'react-router-dom';

const SharedLayout = () => {
  return (
    <div style={{ background: '#f5f5f5', minHeight: '100vh' }}>
      <header style={{ background: '#fff', padding: '15px', display: 'flex', justifyContent: 'space-between', alignItems: 'center', borderBottom: '1px solid #ddd' }}>
        <img src='/logo.png' alt='Logo' width='80' />
        <div style={{ background: '#eee', padding: '5px 15px', borderRadius: '20px', fontSize: '12px' }}>PKR 2,450</div>
      </header>
      
      <div style={{ padding: '15px' }}>
        <input type='text' placeholder='🔍 Track, Book or Search Shipment...' style={{ width: '100%', padding: '12px', borderRadius: '8px', border: 'none', boxShadow: '0 2px 5px rgba(0,0,0,0.1)' }} />
      </div>
      <Outlet />
    </div>
  );
};
<nav style={{ position: "fixed", bottom: 0, width: "100%", background: "#fff", display: "flex", justifyContent: "space-around", padding: "15px", borderTop: "1px solid #ddd" }}> <div>🏠 Home</div> <div>📦 Book</div> <div>📍 Track</div> <div>👤 Profile</div> </nav>
export default SharedLayout;
