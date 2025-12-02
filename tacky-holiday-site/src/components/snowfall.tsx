import { createRoot } from 'react-dom/client'
import Snowfall from 'react-snowfall'

const container = document.querySelector('#app');
const root = createRoot(container!);
root.render(
  <div style={{ height: 400, width: 400, background: '#282c34', position: 'fixed' }}>
    <Snowfall />
  </div>
);