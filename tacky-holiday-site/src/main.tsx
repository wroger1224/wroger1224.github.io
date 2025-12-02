import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'
import Header from './components/header.tsx'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <Header
      title="Tacky Holiday"
      subtitle="All the glitter you can handle"
      showLights={true}
      onAction={() => console.log('Clicked')}
      className="some-extra-class"
    />
    <App />
  </StrictMode>,
)
