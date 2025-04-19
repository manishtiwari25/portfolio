'use client';

import { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import ToggleDayNight from './ToggleDayNight';
import PortalOverlay from './PortalOverlay';

export default function MinecraftLayout({ children }: { children: React.ReactNode }) {
    const [day, setDay] = useState(true);
    const [isEntered, setIsEntered] = useState(false);
    const [cloudCount] = useState(6);
    const [clouds] = useState(
        Array.from({ length: cloudCount }, () => ({
            top: `${Math.random() * 30 + 2}vh`,
            duration: 30 + Math.random() * 20,
            delay: Math.random() * 10
        }))
    );

    useEffect(() => {
        const hour = new Date().getHours();
        setDay(hour >= 6 && hour < 18);
    }, []);

    const toggleDayNight = () => setDay(prev => !prev);

    return (
        <motion.div
            className={`minecraft-world ${day ? 'day' : 'night'} relative min-h-screen flex flex-col overflow-visible z-0`}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.6 }}
        >
            {/* SKY LAYER - Clouds or Stars */}
            <AnimatePresence>
                {day ? (
                    clouds.map((cloud, i) => (
                        <motion.div
                            key={i}
                            className="absolute w-40 h-12 bg-white opacity-80 rounded-full shadow-md z-10"
                            style={{ top: cloud.top, left: '-200px' }}
                            animate={{ left: '110vw' }}
                            transition={{
                                duration: cloud.duration,
                                ease: 'linear',
                                repeat: Infinity,
                                delay: cloud.delay,
                            }}
                        />
                    ))
                ) : (
                    <motion.div
                        className="absolute top-0 left-0 w-full h-32 z-10"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 1 }}
                    >
                        {[...Array(25)].map((_, i) => (
                            <motion.div
                                key={i}
                                className="absolute w-1.5 h-1.5 bg-white rounded-full"
                                initial={{ opacity: 0.5 }}
                                animate={{ opacity: [0.3, 1, 0.3] }}
                                transition={{ duration: 2 + Math.random(), repeat: Infinity }}
                                style={{
                                    top: `${Math.random() * 100}%`,
                                    left: `${Math.random() * 100}%`,
                                }}
                            />
                        ))}
                    </motion.div>
                )}
            </AnimatePresence>

            {/* Toggle Button */}
            {isEntered && (
                <ToggleDayNight day={day} toggle={toggleDayNight} />
            )}

            {/* Portal Overlay */}
            <AnimatePresence>
                {!isEntered && (
                    <PortalOverlay
                        onEnter={() => {
                            setIsEntered(true);
                        }}
                    />
                )}
            </AnimatePresence>

            {/* CONTENT */}
            {isEntered && (
                <main className="relative z-20 px-4 py-8">{children}</main>
            )}

            {/* FOOTER */}
            {isEntered && (
                <footer className="text-center py-4 text-white font-pixel z-20 relative">
                    <p>{day ? '☀️ Daytime' : '🌙 Night Time'}</p>
                </footer>
            )}
        </motion.div>
    );
}