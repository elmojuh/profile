import { useState, useEffect } from "react";
import ReactMarkdown from "react-markdown";
import styles from "./containerMid1.module.scss";
import skillsData from "./skills.json";

function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
}

export default function ContainerMid1() {
    const [skills, setSkills] = useState([]);
    const [modalContent, setModalContent] = useState(null);
    const [hoveredSkill, setHoveredSkill] = useState(null);

    useEffect(() => {
        const shuffledSkills = [];
        Object.entries(skillsData).forEach(([category, { color, skills }]) => {
            skills.forEach(skill => {
                shuffledSkills.push({ ...skill, color });
            });
        });
        setSkills(shuffleArray(shuffledSkills));

        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        entry.target.classList.add(styles.visible);
                    }
                });
            },
            { threshold: 0.2 } // Ativa quando 30% do elemento estiver visível
        );

        const contentContainer = document.querySelector(`.${styles.contentContainer}`);
        if (contentContainer) {
            observer.observe(contentContainer);
        }

        return () => observer.disconnect();
    }, []);

    const openModal = (skill) => {
        setModalContent(skill);
        setTimeout(() => {
            document.querySelector(`.${styles.modal}`).classList.add(styles.visible);
        }, 10); // Pequeno atraso para garantir que a classe seja adicionada após a renderização
    };

    const closeModal = () => {
        document.querySelector(`.${styles.modal}`).classList.remove(styles.visible);
        setTimeout(() => {
            setModalContent(null);
        }, 500); // Tempo da animação de fechamento
    };

    const hexToRgba = (hex, alpha) => {
        const r = parseInt(hex.slice(1, 3), 16);
        const g = parseInt(hex.slice(3, 5), 16);
        const b = parseInt(hex.slice(5, 7), 16);
        return `rgba(${r}, ${g}, ${b}, ${alpha})`;
    };

    return (
        <div className={styles.containerMid}>
            <div className={styles.contentContainer}>
                <h1 className={styles.title}>Coleção de Aptidões</h1>
                <div className={styles.legend}>
                    {Object.entries(skillsData).map(([category, {color}]) => (
                        <div key={category} className={styles.legendItem}>
                            <span className={styles.legendColor} style={{backgroundColor: color}}></span>
                            {category}
                        </div>
                    ))}
                </div>
                <div className={styles.buttonsContainer}>
                    {skills.map((skill) => {
                        const rgbaColor = hexToRgba(skill.color, hoveredSkill === skill.name ? 1 : 0.3); // 100% opacity on hover
                        return (
                            <div key={skill.name} className={styles.skillButton}
                                 style={{backgroundColor: rgbaColor, backdropFilter: 'blur(5px)'}}
                                 onClick={() => openModal(skill)}
                                 onMouseEnter={() => setHoveredSkill(skill.name)}
                                 onMouseLeave={() => setHoveredSkill(null)}>
                                {skill.name}
                            </div>
                        );
                    })}
                </div>
            </div>
            {modalContent && (
                <div className={styles.modal} onClick={closeModal}>
                    <div className={styles.modalContent} onClick={(e) => e.stopPropagation()}>
                        <ReactMarkdown>{modalContent.description}</ReactMarkdown>
                        <a href={modalContent.link} target="_blank" rel="noopener noreferrer">
                            <i className="icon-info"></i>
                        </a>
                    </div>
                </div>
            )}
        </div>
    );
}
