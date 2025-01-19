'use client'

import { useEffect, useCallback } from 'react'
import Navbar from './components/Navbar'
import AlertBanner from './components/AlertBanner'
import Hero from './components/Hero'
import Declaration from './components/Declaration'
import Objective from './components/Objective'
// import Modules from './components/Modules'
import Execution from './components/Execution'
import WorkflowDiagram from './components/Workflow'
import TeamSection from './components/TeamSection'
import Services from './components/services/Services'
import Architecture from './components/Architecture'
import Screenshots from './components/Screenshots'
import References from './components/References'
import Footer from './components/Footer'
import BackgroundAnimation from './components/BackgroundAnimation'
// import ScrollProgress from './components/ScrollProgress'

export default function Home() {
  const observerCallback = useCallback((entries: IntersectionObserverEntry[]) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add('animate-fade-in')
      }
    })
  }, [])

  useEffect(() => {
    const observer = new IntersectionObserver(observerCallback, {
      threshold: 0.1
    })

    const fadeElements = document.querySelectorAll('.fade-in')
    fadeElements.forEach((el) => observer.observe(el))

    return () => observer.disconnect()
  }, [observerCallback])

  const sections = [
    { Component: Hero, key: 'hero' },
    { Component: TeamSection, key: 'team' },
    { Component: Declaration, key: 'declaration' },
    { Component: Objective, key: 'objective' },
    { Component: Architecture, key: 'architecture' },
    // { Component: Modules, key: 'modules' },
    { Component: WorkflowDiagram, key: 'workflow' },
    { Component: Execution, key: 'execution' },
    { Component: Services, key: 'services' },
    { Component: Screenshots, key: 'screenshots' },
    { Component: References, key: 'references' }
  ]

  return (
    <div className="min-h-screen text-white relative overflow-hidden bg-[#0a0a12]">
      <BackgroundAnimation />

      
      <div className="fixed inset-0 bg-gradient-to-b from-[#00fff2]/5 to-transparent pointer-events-none z-0" aria-hidden="true" />
      
      <Navbar />
      
      <main className="cyber-container">
        <div className="pt-20 fade-in">
          <AlertBanner />
        </div>
        
        <div className="space-y-16">
          {sections.map(({ Component, key }) => (
            <section
              key={key}
              className="cyber-card fade-in"
              style={{
                transform: 'translateZ(0)',
              }}
            >
              <Component />
            </section>
          ))}
        </div>
      </main>

      <Footer />
    </div>
  )
}

