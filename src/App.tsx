import { Routes, Route, Navigate } from 'react-router-dom'
import Layout from './components/Layout'
import Home from './pages/Home'
import Projects from './pages/Projects'
import Blog from './pages/Blog'
import Resume from './pages/Resume'

export default function App() {
  return (
    <Routes>
      {/* Redirect SPA visits to /index.html back to the Home route */}
      <Route path="/index.html" element={<Navigate to="/" replace />} />
      <Route element={<Layout />}> 
        <Route index element={<Home />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/resume" element={<Resume />} />
      </Route>
      {/* Fallback for unknown routes under the SPA */}
      <Route path="*" element={<Navigate to="/" replace />} />
    </Routes>
  )
}
