import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import './index.css'
import App from './App.jsx'
import CarWashDemo from './demos/CarWashDemo.jsx'
import DetailingDemo from './demos/DetailingDemo.jsx'
import AutoServiceDemo from './demos/AutoServiceDemo.jsx'
import CarImportDemo from './demos/CarImportDemo.jsx'
import TireServiceDemo from './demos/TireServiceDemo.jsx'
import AutoPartsDemo from './demos/AutoPartsDemo.jsx'
import TintingDemo from './demos/TintingDemo.jsx'
import CarRentalDemo from './demos/CarRentalDemo.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/demo/carwash" element={<CarWashDemo />} />
        <Route path="/demo/detailing" element={<DetailingDemo />} />
        <Route path="/demo/autoservice" element={<AutoServiceDemo />} />
        <Route path="/demo/carimport" element={<CarImportDemo />} />
        <Route path="/demo/tireservice" element={<TireServiceDemo />} />
        <Route path="/demo/autoparts" element={<AutoPartsDemo />} />
        <Route path="/demo/tinting" element={<TintingDemo />} />
        <Route path="/demo/carrental" element={<CarRentalDemo />} />
      </Routes>
    </BrowserRouter>
  </StrictMode>,
)
