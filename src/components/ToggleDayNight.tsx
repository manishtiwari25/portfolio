'use client';
import { FaMoon, FaSun } from "react-icons/fa";

type ToggleDayNightProps = {
    day: boolean;
    toggle: () => void;
};

export default function ToggleDayNight({ day, toggle }: ToggleDayNightProps) {
    return (
        <div className="top-4 right-4">
            <button
                type="button"
                onClick={toggle}
                className="nes-btn is-warning px-4 py-2 shadow-md"
            >
                {day ? <FaMoon className="pixelated" /> : <FaSun className="pixelated" />}
            </button>
        </div>
    );
}
