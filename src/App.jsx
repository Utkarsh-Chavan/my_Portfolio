import { useState } from 'react'

import LoadingScreen from './components/LoadingScreen'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import Skills from './components/Skills'
import Projects from './components/Projects'
import Experience from './components/Experience'
import Contact from './components/Contact'
import ScrollManager from './components/ScrollManager'
import { SceneProvider } from './scenes/SceneController'

import './App.css'
import { Scroll } from '@react-three/drei'

function AppContent() {
  const [isLoading, setIsLoading] = useState(true)

  return (
    <>
      {isLoading && (
        <LoadingScreen onComplete={() => setIsLoading(false)} />
      )}

      <main id="top" className={isLoading ? 'portfolio-hidden' : ''}>
        <Navbar />

        <Hero isLoading={isLoading}/>
        <About />
        <Skills />
        <Projects />
        <Experience />
        <Contact />
      </main>
    </>
  )
}

function App() {
  return (
    <SceneProvider>
      <ScrollManager />
      <AppContent />
    </SceneProvider>
  )
}

export default App