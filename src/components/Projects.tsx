import { Project } from "@/types/project"


const projects: Project[] = [
    { title: '⛏️ Block Builder', description: 'JS game', link: '#' },
    { title: '🗺️ Map Explorer', description: 'World gen demo', link: '#' },
]

export default function Projects() {
    return (
        <section>
            <h3 className="nes-text is-primary mb-4">🪓 PROJECTS</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {projects.map(p => (
                    <div className="nes-container is-rounded" key={p.title}>
                        <h4>{p.title}</h4>
                        <p>{p.description}</p>
                        <a href={p.link} className="nes-btn is-primary">View Project</a>
                    </div>
                ))}
            </div>
        </section>
    )
}
