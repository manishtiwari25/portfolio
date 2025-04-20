'use client';

import Hero from '@/components/Hero';
import Projects from '@/components/Projects';
import Skills from '@/components/Skills';
import Contact from '@/components/Contact';
import MinecraftLayout from '@/components/MinecraftLayout';
import { useState } from 'react';

export default function Home() {
  const [day, setDay] = useState(true);
  return (
    <MinecraftLayout setDayOrNight={setDay}>
      <div className="container mx-auto flex flex-col flex-grow w-full p-10 gap-4">
        <Hero day={day} />
        <Projects day={day} />
        <Skills day={day} />
        <Contact day={day} />
      </div>
    </MinecraftLayout>
  );
}
