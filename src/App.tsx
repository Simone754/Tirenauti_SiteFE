import { BrowserRouter, Routes, Route } from 'react-router-dom'
import MainSite from './pages/MainSite'
import FestivalPage from './pages/FestivalPage'

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<MainSite />} />
        <Route path="/festival" element={<FestivalPage />} />
      </Routes>
    </BrowserRouter>
  )
}
