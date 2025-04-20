import { siteConfig } from "@/config/site";

export default function Contact({ day }: { day: boolean }) {
    return (
        <section className={`nes-container is-rounded bg-gray-200 with-title  ${day ? "" : "is-dark"}`}>
            <p className="title">💬 CONTACT ME</p>
            <p>Email me at <a href={`mailto:${siteConfig.email}`} className="nes-text is-primary">{siteConfig.email}</a></p>
        </section>
    )
}
