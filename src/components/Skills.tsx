// Skills.tsx
import { Skill } from '@/types/skill'
import SkillBar from './SkillBar'

const skills: Skill[] = [
    { skill: 'React', level: 8 },
    { skill: 'TypeScript', level: 7 },
]

export default function Skills() {
    return (
        <section>
            <h3 className="nes-text is-success mb-4">✨ SKILLS</h3>
            {skills.map(skill => <SkillBar key={skill.skill} {...skill} />)}
        </section>
    )
}
