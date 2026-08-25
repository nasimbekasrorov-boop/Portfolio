import { Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar.jsx'
import Footer from './components/Footer.jsx'
import Home from './pages/Home.jsx'
import ProjectsPage from './pages/ProjectsPage.jsx'
import TerminalPage from './pages/TerminalPage.jsx'
import ScrollToTop from './components/ScrollToTop.jsx'

export default function App() {
  return (
    <div className="min-h-screen flex flex-col bg-bg text-text font-body">
      <ScrollToTop />
      <Navbar />
      <main className="flex-1">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/projects" element={<ProjectsPage />} />
          <Route path="/terminal" element={<TerminalPage />} />
          <Route
            path="*"
            element={
              <div className="min-h-[60vh] flex flex-col items-center justify-center gap-4 px-6 text-center">
                <p className="eyebrow">404</p>
                <h1 className="font-display text-display-md">Page not found.</h1>
              </div>
            }
          />
        </Routes>
      </main>
      <Footer />
    </div>
  )
}
