import { Project } from "@/types/project"
import { useRouter } from "next/navigation";


const projects: Project[] = [
    { title: '⛏️ Block Builder', description: 'JS game', link: '#' },
    { title: '🗺️ Map Explorer', description: 'World gen demo', link: '#' },
]

export default function Projects({ day }: { day: boolean }) {
    var router = useRouter();
    return (
        <section className={`nes-container is-rounded bg-gray-200 with-title ${day ? "" : "is-dark"}`}>
            <p className="title">🪓 PROJECTS</p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {projects.map(p => (
                    <div className={`nes-container is-rounded with-title ${day ? "" : "is-dark"}`} key={p.title}>
                        <p className="title">{p.title}</p>
                        <p>{p.description}</p>
                        <button onClick={() => router.push(p.link)} type="button" className="justify-end nes-btn is-primary">View Project</button>
                    </div>
                ))}
            </div>
        </section>
    )
}
