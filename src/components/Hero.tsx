import Image from 'next/image'

export default function Hero() {
    return (
        <section className="text-center">
            <div className="nes-container with-title is-centered">
                <p className="title">Hey, I'm Manish Tiwari!</p>
                <Image
                    src="/manish-minecraft-skin.png"
                    width={96}
                    height={96}
                    className="pixelated mx-auto"
                    alt="Avatar"
                />
                <p className="mt-4">Welcome to my pixel-perfect portfolio.</p>
            </div>
        </section>
    )
}
