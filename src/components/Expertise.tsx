import React, { useRef, useEffect, useState } from "react";
import '@fortawesome/free-regular-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faReact, faDocker, faPython } from '@fortawesome/free-brands-svg-icons';
import Chip from '@mui/material/Chip';
import '../assets/styles/Expertise.scss';

const labelsFirst = ["React", "TypeScript", "JavaScript", "HTML5", "CSS3", "SASS", "Flask", "Python", "SQL", "PostgreSQL", "Postman"];
const labelsSecond = ["Git", "GitHub Actions", "Docker", "AWS", "Azure", "Linux", "Snowflake", "Pandas", "Selenium"];
const labelsThird = ["OpenAI", "Groq", "LangChain", "Qdrant", "Hugging Face", "LlamaIndex", "Streamlit"];

function Expertise() {
    const skillRefs = [useRef(null), useRef(null), useRef(null)];
    const [activeIndex, setActiveIndex] = useState<number | null>(null);

    useEffect(() => {
        if (window.outerWidth > 768) return
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        const index = skillRefs.findIndex(ref => ref.current === entry.target);
                        if (index !== -1) {
                            setActiveIndex(index);
                        }
                    }
                });
            },
            { threshold: 1 }
        );

        skillRefs.forEach(ref => {
            if (ref.current) {
                observer.observe(ref.current);
            }
        });

        return () => {
            skillRefs.forEach(ref => {
                if (ref.current) {
                    observer.unobserve(ref.current);
                }
            });
        };
    }, []);

    return (
        <div className="container" id="expertise">
            <div className="skills-container">
                <h1>Expertise</h1>
                <div className="skills-grid">
                    {[labelsFirst, labelsSecond, labelsThird].map((labels, i) => (
                        <div
                            key={i}
                            ref={skillRefs[i]}
                            className={`skill ${activeIndex === i ? 'hover' : ''}`}
                        >
                            <FontAwesomeIcon icon={[faReact, faDocker, faPython][i]} size="3x" />
                            <h3>{["Full Stack Web Development", "DevOps & Automation", "GenAI & LLM"][i]}</h3>
                            <p>
                                {
                                    [
                                        "I have built a diverse array of web applications from scratch using modern technologies such as React and Flask. I have a strong proficiency in the SDLC process and frontend + backend development.",
                                        "Once the application is built, I help clients set up DevOps testing, CI/CD pipelines, and deployment automation to support the successful Go-Live.",
                                        "Stay relevant in the market by leveraging the latest AI models in your projects. I have professional experience building enterprise grade GenAI-enabled solutions to empower intelligent decision making."
                                    ][i]
                                }
                            </p>
                            <div className="flex-chips">
                                <span className="chip-title">Tech stack:</span>
                                {labels.map((label, index) => (
                                    <Chip key={index} className='chip' label={label} />
                                ))}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}

export default Expertise;
