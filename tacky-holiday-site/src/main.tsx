import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'
import Header from './components/header.tsx'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <Header
      title="Tacky Holiday"
      subtitle="I was born in 1996 I'm doing my best"
      showLights={true}
      onAction={() => console.log('Clicked')}
      className="some-extra-class"
    />
    <App />
  </StrictMode>,
)
