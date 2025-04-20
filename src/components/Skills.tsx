// Skills.tsx
import { SkillGroup } from '@/types/skill';
import { siteConfig } from '@/config/site';
import { useState } from 'react';
import { motion } from 'framer-motion';

export default function Skills({ day }: { day: boolean }) {
    return (
        <section className={`nes-container is-rounded bg-gray-200 with-title ${day ? "" : "is-dark"}`}>
            <p className="title">✨ SKILLS</p>
            <div className="flex flex-col gap-4">
                {siteConfig.skills.map(skill => {
                    const [showAll, setShowAll] = useState(false);
                    return (
                        <motion.section
                            className={`nes-container is-rounded bg-gray-200 with-title ${day ? "" : "is-dark"}`}
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5 }}
                            layout
                        >
                            <p className="title">{skill.title}</p>
                            {
                                skill.skills.slice(0, showAll ? skill.skills.length : 3).map((skillGroup, index) =>
                                    <motion.div
                                        className="mb-4"
                                        key={index}
                                        initial={{ opacity: 0, x: -20 }}
                                        animate={{ opacity: 1, x: 0 }}
                                        transition={{ duration: 0.3, delay: index * 0.1 }}
                                        layout
                                    >
                                        <div className="flex items-center justify-between">
                                            <span>{skillGroup.name}</span>
                                            <span className="text-sm font-bold">Level {skillGroup.level}</span>
                                        </div>
                                        <progress className="nes-progress is-success" value={skillGroup.level * 10} max="100"></progress>
                                    </motion.div>
                                )
                            }
                            <div className="flex justify-end mt-2">
                                <motion.button
                                    type="button"
                                    className='nes-btn is-primary'
                                    onClick={() => setShowAll(!showAll)}
                                    whileHover={{ scale: 1.1 }}
                                    whileTap={{ scale: 0.9 }}
                                    layout
                                >
                                    {showAll ? "Show Less" : "Show More"}
                                </motion.button>
                            </div>
                        </motion.section>
                    );
                })}
            </div>
        </section>
    )
}
