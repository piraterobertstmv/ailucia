import { createRoot } from 'react-dom/client'
import App from './App.tsx'
import { ThemeProvider } from '@/components/ThemeProvider'
import './index.css'

createRoot(document.getElementById("root")!).render(
  <ThemeProvider defaultTheme="system" storageKey="luc-ia-theme">
    <App />
  </ThemeProvider>
);