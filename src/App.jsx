import { useEffect } from 'react'
import { BrowserRouter, Navigate, Routes, Route, useLocation } from 'react-router-dom'
import Home from './pages/Home'
import About from './pages/About'
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

    if (hash === '#work') {
      document.getElementById('work')?.scrollIntoView({ behavior: 'smooth' })
    }
  }, [hash])

  return null
}

function AppRoutes() {
  return (
    <>
      <ScrollToTop />
      <ScrollToHash />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/case-study/:id" element={<CaseStudyDetail />} />
        <Route path="/work/robonote" element={<Navigate to="/case-study/robonote" replace />} />
        <Route path="/work/easy" element={<Navigate to="/case-study/easy" replace />} />
        <Route path="/work/secure-stay" element={<Navigate to="/case-study/secure-stay" replace />} />
      </Routes>
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
