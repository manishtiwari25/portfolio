'use client';

import { useState } from 'react';
import { siteConfig } from '@/config/site';
import ToggleDayNight from './ToggleDayNight';
import { GiHamburgerMenu } from 'react-icons/gi';
import { IoMdClose } from 'react-icons/io';

export default function Banner({ day, toggleDayNight }: { day: boolean; toggleDayNight: () => void }) {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <div className="font-bold text-4xl w-screen p-2 bg-gray-800 bg-opacity-90 text-white flex flex-col md:flex-row justify-between items-center fixed top-0 left-0 z-50 animate-slide-in border-b-2 border-gray-500">
            <div className="flex justify-between items-center w-full md:w-auto">
                <div className="content-start">
                    <p className="brand">{siteConfig.profile.name}</p>
                </div>
                <div className="content-end flex gap-2 md:hidden">
                    <ToggleDayNight day={day} toggle={toggleDayNight} />
                    <button
                        className="nes-btn is-warning  text-white text-2xl shadow-md"
                        onClick={() => setIsOpen(!isOpen)}
                    >
                        {isOpen ? <IoMdClose className="pixelated" /> : <GiHamburgerMenu className="pixelated" />}
                    </button>
                </div>
            </div>
            <div className="hidden md:flex">
                <ToggleDayNight day={day} toggle={toggleDayNight} />
            </div>

        </div>
    );
}
