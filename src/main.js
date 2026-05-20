import { injectTezroLayout } from './components/sharedLayout.js';
import { renderShipmentHome } from './components/home.js';

const initApp = () => {
    const root = document.getElementById('app-root');
    if (root) {
        root.innerHTML = injectTezroLayout('SHIPMENT', renderShipmentHome());
    }
};

document.addEventListener('DOMContentLoaded', initApp);
