'use client';

type ToggleDayNightProps = {
    day: boolean;
    toggle: () => void;
};

export default function ToggleDayNight({ day, toggle }: ToggleDayNightProps) {
    return (
        <div className="fixed top-4 right-4 z-50">
            <button
                type="button"
                onClick={toggle}
                className="nes-btn is-warning px-4 py-2 shadow-md"
            >
                Toggle {day ? 'Night' : 'Day'}
            </button>
        </div>
    );
}
