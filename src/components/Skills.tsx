// Skills.tsx
import { Skill } from '@/types/skill'
import SkillBar from './SkillBar'

const skills: Skill[] = [
    { skill: 'React', level: 8 },
    { skill: 'TypeScript', level: 7 },
]

export default function Skills({ day }: { day: boolean }) {
    return (
        <section className={`nes-container is-rounded bg-gray-200 with-title ${day ? "" : "is-dark"}`}>
            <p className="title">✨ SKILLS</p>
            {skills.map(skill => <SkillBar key={skill.skill} skill={skill} day={day} />)}
        </section>
    )
}
