import { Skill } from "@/types/skill";


export default function SkillBar({ skill, level }: Skill) {
    return (
        <div className="mb-4">
            <span>{skill}</span>
            <progress className="nes-progress is-success" value={level * 10} max="100"></progress>
        </div>
    )
}
