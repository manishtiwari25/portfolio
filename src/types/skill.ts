export interface SkillItem {
    name: string;
    level: number; // 0 to 100 for progress bars
}

export interface SkillGroup {
    title: string;
    skills: SkillItem[];
}