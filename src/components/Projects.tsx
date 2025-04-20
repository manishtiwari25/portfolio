import { siteConfig } from "@/config/site";
import { Project } from "@/types/project"
import { useRouter } from "next/navigation";


export default function Projects({ day }: { day: boolean }) {
    var router = useRouter();
    return (
        <section className={`nes-container is-rounded bg-gray-200 with-title ${day ? "" : "is-dark"}`}>
            <p className="title">🪓 PROJECTS</p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {siteConfig.projects.map(p => (
                    <div className={`nes-container is-rounded with-title ${day ? "" : "is-dark"}`} key={p.name}>
                        <p className="title">{p.name}</p>
                        <p>{p.description}</p>
                        <button onClick={() => router.push(p.url ?? "")} type="button" className="justify-end nes-btn is-primary">View Project</button>
                    </div>
                ))}
            </div>
        </section>
    )
}
