import { useState, useEffect } from "react";
import ReactMarkdown from "react-markdown";
import styles from "./containerMid1.module.scss";
import skillsData from "./skills.json";
import icons from "../../../components/Icons/index";

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
    const [selectedCategory, setSelectedCategory] = useState(null);

    useEffect(() => {
        const shuffledSkills = [];
        skillsData.forEach(category => {
            category.skills.forEach(skill => {
                shuffledSkills.push({ ...skill, color: category.color, category: category.category });
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
                    {skillsData.map(category => (
                        <div
                            key={category.category}
                            className={`${styles.legendItem} ${selectedCategory === category.category ? styles.selected : ''}`}
                            onClick={() => setSelectedCategory(prev => prev === category.category ? null : category.category)}
                        >
                            <span className={styles.legendColor} style={{ backgroundColor: category.color }}></span>
                            {category.category}
                        </div>
                    ))}
                </div>
                <div className={styles.buttonsContainer}>
                    {skills.map((skill) => {
                        const IconComponent = icons[skill.icon];
                        const isSelected = selectedCategory === skill.category;
                        const isHovered = hoveredSkill === skill.name;
                        const isHighlighted = (selectedCategory === null && isHovered) || (selectedCategory !== null && (isSelected || isHovered));
                        const opacity = isHighlighted ? 1 : (selectedCategory !== null && !isSelected ? 0.2 : 0.5);
                        const rgbaColor = hexToRgba(skill.color, opacity);

                        return (
                            <div
                                key={skill.name}
                                className={styles.skillButton}
                                style={{
                                    backgroundColor: rgbaColor,
                                    transition: 'background-color 0.3s ease, opacity 0.3s ease',
                                    opacity: (selectedCategory !== null && !isSelected && !isHovered) ? 0.6 : 1,
                                }}
                                onClick={() => openModal(skill)}
                                onMouseEnter={() => setHoveredSkill(skill.name)}
                                onMouseLeave={() => setHoveredSkill(null)}
                            >
                                {IconComponent && <IconComponent size={24} />}
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
