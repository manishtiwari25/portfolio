'use client';

import Hero from '@/components/Hero';
import Projects from '@/components/Projects';
import Skills from '@/components/Skills';
import Contact from '@/components/Contact';
import MinecraftLayout from '@/components/MinecraftLayout';
import { useState } from 'react';
import PortalOverlay from '@/components/PortalOverlay';

export default function Home() {
  const [isEntered, setIsEntered] = useState(false)
  return (
    <MinecraftLayout>

      {!isEntered &&
        <PortalOverlay onEnter={() => setIsEntered(true)} />
      }

      {isEntered && (
        <>
          <div className="chunk">
            <Hero />
          </div>
          <div className="chunk">
            <Projects />
          </div>
          <div className="chunk">
            <Skills />
          </div>
          <div className="chunk">
            <Contact />
          </div>
        </>
      )}
    </MinecraftLayout>
  );
}
