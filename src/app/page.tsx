'use client';

import Hero from '@/components/Hero';
import Projects from '@/components/Projects';
import Skills from '@/components/Skills';
import Contact from '@/components/Contact';
import MinecraftLayout from '@/components/MinecraftLayout';

export default function Home() {
  return (
    <MinecraftLayout>
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
    </MinecraftLayout>
  );
}
