import { useEffect } from 'react'
import { BrowserRouter, Navigate, Routes, Route, useLocation } from 'react-router-dom'
import Home from './pages/Home'
import About from './pages/About'
import Stash from './pages/Stash'
import Brod from './pages/Brod'
import CaseStudyDetail from './pages/CaseStudyDetail'

function ScrollToTop() {
  const { pathname, hash } = useLocation()

  useEffect(() => {
    if (hash) return
    window.scrollTo(0, 0)
  }, [pathname, hash])

  return null
}

function ScrollToHash() {
  const { hash } = useLocation()

  useEffect(() => {
    if (hash === '#footer') {
      document.getElementById('footer')?.scrollIntoView({ behavior: 'smooth' })
    }
  }, [hash])

  return null
}

function AppRoutes() {
  const location = useLocation()

  return (
    <>
      <ScrollToTop />
      <ScrollToHash />
      <div key={location.pathname} className="page-transition">
        <Routes location={location}>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/stash" element={<Stash />} />
          <Route path="/brod" element={<Brod />} />
          <Route path="/case-study/:id" element={<CaseStudyDetail />} />
          <Route path="/work/robonote" element={<Navigate to="/case-study/robonote" replace />} />
          <Route path="/work/easy" element={<Navigate to="/case-study/easy" replace />} />
          <Route path="/work/secure-stay" element={<Navigate to="/case-study/secure-stay" replace />} />
        </Routes>
      </div>
    </>
  )
}

export default function App() {
  return (
    <BrowserRouter>
      <AppRoutes />
    </BrowserRouter>
  )
}
