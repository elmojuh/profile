import { useState, useEffect, useRef } from "react";
import ReactMarkdown from "react-markdown";
import styles from "./containerMid1.module.scss";
import skillsData from "../../../data/skills.json";
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
    const [isModalVisible, setIsModalVisible] = useState(false);
    const [hoveredSkill, setHoveredSkill] = useState(null);
    const [selectedCategory, setSelectedCategory] = useState(null);
    const contentRef = useRef(null);

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
                        observer.unobserve(entry.target);
                    }
                });
            },
            { threshold: 0.2 }
        );

        const currentContentRef = contentRef.current;
        if (currentContentRef) {
            observer.observe(currentContentRef);
        }

        return () => {
            if (currentContentRef) {
                observer.unobserve(currentContentRef);
            }
        };
    }, []);

    useEffect(() => {
        const handleClickOutside = (event) => {
            if (selectedCategory) {
                if (contentRef.current && (!contentRef.current.contains(event.target) || event.target === contentRef.current)) {
                    setSelectedCategory(null);
                }
            }
        };

        document.addEventListener("mousedown", handleClickOutside);
        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
        };
    }, [selectedCategory]);

    const openModal = (skill) => {
        setModalContent(skill);
        // Usamos requestAnimationFrame para garantir que a classe 'visible' seja adicionada
        // após o modal ser renderizado, permitindo a transição de CSS.
        requestAnimationFrame(() => {
            setIsModalVisible(true);
        });
    };

    const closeModal = () => {
        setIsModalVisible(false);
        setTimeout(() => {
            setModalContent(null);
        }, 300);
    };

    const hexToRgba = (hex, alpha) => {
        const r = parseInt(hex.slice(1, 3), 16);
        const g = parseInt(hex.slice(3, 5), 16);
        const b = parseInt(hex.slice(5, 7), 16);
        return `rgba(${r}, ${g}, ${b}, ${alpha})`;
    };

    return (
        <div className={styles.containerMid}>
            <div className={styles.contentContainer} ref={contentRef}>
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
                                    transition: 'background-color 0.3s ease, opacity 0.3s ease, transform 0.3s ease',
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
                <div 
                    className={`${styles.modal} ${isModalVisible ? styles.visible : ''}`} 
                    onClick={closeModal}
                >
                    <div className={styles.modalContent} onClick={(e) => e.stopPropagation()}>
                        <ReactMarkdown>{modalContent.description}</ReactMarkdown>
                        <a href={modalContent.link} target="_blank" rel="noopener noreferrer">
                            Saber mais
                        </a>
                    </div>
                </div>
            )}
        </div>
    );
}
