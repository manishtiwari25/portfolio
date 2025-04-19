'use client'

import { useState } from 'react'
import PortalOverlay from '../components/PortalOverlay'
import Hero from '../components/Hero'
import Projects from '../components/Projects'
import Skills from '../components/Skills'
import Contact from '../components/Contact'

export default function Home() {
  const [isEntered, setIsEntered] = useState(false)

  return (
    <>
      {!isEntered && <PortalOverlay onEnter={() => setIsEntered(true)} />}

      {isEntered && (
        <div className="minecraft-world min-h-screen py-6">
          <div className="chunk"><Hero /></div>
          <div className="chunk"><Projects /></div>
          <div className="chunk"><Skills /></div>
          <div className="chunk bg-blue-200"><Contact /></div>
        </div>
      )}
    </>
  )
}
