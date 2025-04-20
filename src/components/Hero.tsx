import { siteConfig } from '@/config/site'
import Image from 'next/image'

export default function Hero({ day }: { day: boolean }) {
    return (
        <section className={`nes-container with-title is-rounded bg-gray-200 ${day ? "" : "is-dark"}`
        }>
            <p className="title">Welcome to my pixel-perfect portfolio.</p>
            <div className='flex flex-col items-center'>
                <Image
                    src="/manish-minecraft-skin.png"
                    width={96}
                    height={96}
                    className="pixelated"
                    alt="Avatar"
                />
                <p>{siteConfig.profile.summary}</p>
            </div>
        </section >
    )
}
