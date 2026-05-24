import React from 'react';

const Home = () => {
  const services = [
    { name: 'Cargo Flight', img: '/butans/cargo-flay.jpg' },
    { name: 'Ship Cargo', img: '/butans/ship-cargo.jpg' },
    { name: 'Parcel Delivery', img: '/butans/parcel-delivry.jpg' },
    { name: 'Home Shifting', img: '/butans/home_shifting.jpg' },
    { name: 'Cargo Train', img: '/butans/cargo-train.jpg' },
    { name: 'Logistics', img: '/butans/lOKgestics.jpg' }
  ];

  return (
    <div style={{ padding: '20px' }}>
      <h3>Logistics Services</h3>
      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '15px' }}>
        {services.map((item, index) => (
          <div key={index} style={{ border: '1px solid #ddd', padding: '10px', textAlign: 'center', borderRadius: '10px' }}>
            <img src={item.img} alt={item.name} style={{ width: '60px', height: '60px' }} />
            <p style={{ fontSize: '12px', fontWeight: 'bold' }}>{item.name}</p>
          </div>
        ))}
      </div>
    </div>
  );
};
export default Home;
