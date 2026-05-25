import React from 'react';

const App = () => {
  return (
    <div style={{ backgroundColor: '#F5F7FB', minHeight: '100vh', paddingBottom: '90px', fontFamily: 'sans-serif' }}>
      
      {/* 1. Header */}
      <div style={{ backgroundColor: '#ffffff', padding: '15px', display: 'flex', justifyContent: 'space-between', alignItems: 'center', boxShadow: '0 2px 5px rgba(0,0,0,0.05)' }}>
        <img src="/logo.png" alt="Logo" style={{ height: '30px' }} />
        <div style={{ backgroundColor: '#dcfce7', padding: '5px 12px', borderRadius: '15px', fontSize: '12px', fontWeight: 'bold', color: '#166534' }}>PKR 2,450</div>
      </div>

      {/* 2. Search Bar */}
      <div style={{ padding: '15px' }}>
        <input type="text" placeholder="Track, Book or Search Shipment..." style={{ width: '100%', padding: '12px', borderRadius: '15px', border: '1px solid #e2e8f0', outline: 'none' }} />
      </div>

      {/* 3. Tracking Map */}
      <div style={{ margin: '0 15px', backgroundColor: '#cbd5e1', height: '140px', borderRadius: '20px', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#475569', fontWeight: 'bold' }}>
        Live Tracking Map
      </div>

      {/* 4. Services Grid */}
      <div style={{ padding: '20px 15px', display: 'grid', gridTemplateColumns: 'repeat(5, 1fr)', gap: '8px' }}>
        {['Domestic', 'Intl', 'Cargo', 'Air', 'Road'].map((name) => (
          <div key={name} style={{ backgroundColor: 'white', padding: '8px 2px', borderRadius: '12px', textAlign: 'center', fontSize: '9px', fontWeight: '600' }}>
            🚚<br/>{name}
          </div>
        ))}
      </div>

      {/* 5. Promo Slider */}
      <div style={{ margin: '0 15px', backgroundColor: '#0B3C91', padding: '20px', borderRadius: '20px', color: 'white', position: 'relative' }}>
        <h3 style={{ margin: '0 0 5px 0', fontSize: '16px' }}>Reliable Logistics</h3>
        <p style={{ fontSize: '10px', opacity: 0.8, marginBottom: '15px' }}>For a Connected World</p>
        <button style={{ backgroundColor: 'white', border: 'none', padding: '8px 20px', borderRadius: '10px', fontWeight: 'bold', color: '#0B3C91' }}>Book Now</button>
      </div>

      {/* 6. Quick Actions */}
      <div style={{ padding: '20px 15px' }}>
        <h4 style={{ margin: '0 0 10px 0' }}>Quick Actions</h4>
        <div style={{ display: 'flex', gap: '10px', overflowX: 'auto' }}>
          {['Track', 'Calc', 'My Shipments', 'Pickup'].map((action) => (
            <div key={action} style={{ minWidth: '80px', backgroundColor: 'white', padding: '15px', borderRadius: '15px', textAlign: 'center', fontSize: '10px' }}>
              📦<br/>{action}
            </div>
          ))}
        </div>
      </div>

      {/* 7. Bottom Navigation */}
      <div style={{ position: 'fixed', bottom: 0, width: '100%', backgroundColor: 'white', display: 'flex', justifyContent: 'space-around', padding: '15px 0', boxShadow: '0 -2px 10px rgba(0,0,0,0.05)', zIndex: 1000 }}>
        {['Home', 'Bookings', 'Track', 'Wallet', 'Profile'].map((tab) => (
          <div key={tab} style={{ fontSize: '10px', textAlign: 'center', color: tab === 'Home' ? '#0B3C91' : '#64748b' }}>
            ●<br/>{tab}
          </div>
        ))}
      </div>
    </div>
  );
};

export default App;
