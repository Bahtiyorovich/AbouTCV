import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { BrowserRouter } from 'react-router-dom'
import { ResumeContextProvider } from './context/resumeContext.jsx'
import { ThemeProvider } from "@material-tailwind/react";

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <ThemeProvider>
        <ResumeContextProvider>
          <App />
        </ResumeContextProvider>
      </ThemeProvider>
    </BrowserRouter>
  </React.StrictMode>,
)
