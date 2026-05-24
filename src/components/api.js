export const fetchShipmentData = (id) => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve({ id, status: 'In Transit', location: 'Multan, PK', eta: '2 Hours' });
    }, 1000);
  });
};
