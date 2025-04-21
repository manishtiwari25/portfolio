import { siteConfig } from "@/config/site";

export default function Contact({ day }: { day: boolean }) {
    return (
        <section id="contact" className={`nes-container is-rounded bg-gray-200 with-title  ${day ? "" : "is-dark"}`}>
            <p className="title">💬 CONTACT ME</p>
            <p className="text-xs md:text-lg">Email me at <a href={`mailto:${siteConfig.email}`} className="nes-text is-primary">{siteConfig.email}</a></p>
        </section>
    )
}
