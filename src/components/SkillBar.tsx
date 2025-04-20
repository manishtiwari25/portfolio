import { Skill } from "@/types/skill";


export default function SkillBar({ day, skill }: { day: boolean, skill: Skill }) {
    return (
        <div className="mb-4">
            <span>{skill.skill}</span>
            <progress className="nes-progress is-success" value={skill.level * 10} max="100"></progress>
        </div>
    )
}
