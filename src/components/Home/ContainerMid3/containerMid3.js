import { useState, useEffect, useRef } from "react";
import styles from "./containerMid3.module.scss";

const projectsData = [
    {
        "title": "IC - Learning Curve",
        "description": "Descrição detalhada do projeto IC - Learning Curve. Descrição detalhada do projeto IC - Learning Curve. Descrição detalhada do projeto IC - Learning Curve. Descrição detalhada do projeto IC - Learning Curve. Descrição detalhada do projeto IC - Learning Curve. ",
        "link": "https://example.com/ic-learning-curve"
    },
    {
        "title": "TCC - Learning Curve",
        "description": "Descrição detalhada do projeto TCC - Learning Curve.",
        "link": "https://example.com/tcc-learning-curve"
    },
    {
        "title": "Cumess Brasil",
        "description": "Descrição detalhada do projeto Cumess Brasil.",
        "link": "https://example.com/cumess-brasil"
    },
    {
        "title": "ArtAcril",
        "description": "Descrição detalhada do projeto ArtAcril.",
        "link": "https://example.com/artacril"
    }
];

export default function ContainerMid3() {
    const [selectedProject, setSelectedProject] = useState(projectsData[0]);
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [windowWidth, setWindowWidth] = useState(0);
    const [isVisible, setIsVisible] = useState(false);
    const projectListRef = useRef(null);
    const projectDetailsRef = useRef(null);

    useEffect(() => {
        if (typeof window !== "undefined") {
            setWindowWidth(window.innerWidth);
            const handleResize = () => setWindowWidth(window.innerWidth);
            window.addEventListener("resize", handleResize);
            return () => window.removeEventListener("resize", handleResize);
        }
    }, []);

    useEffect(() => {
        const observer = new IntersectionObserver((entries) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    entry.target.classList.add(styles.visible);
                }
            });
        });

        if (projectListRef.current) {
            observer.observe(projectListRef.current);
        }
        if (projectDetailsRef.current) {
            observer.observe(projectDetailsRef.current);
        }

        return () => observer.disconnect();
    }, []);

    useEffect(() => {
        setIsVisible(true);
    }, []);

    const handleProjectClick = (project) => {
        setSelectedProject(project);
        if (windowWidth < 768) {
            setIsModalOpen(true);
        }
    };

    const closeModal = () => {
        setIsModalOpen(false);
    };

    return (
        <div className={styles.containerMid}>
            <div ref={projectListRef} className={styles.projectList}>
                {projectsData.map((project, index) => (
                    <div
                        key={index}
                        className={`${styles.btn1} ${selectedProject === project ? styles.selected : ""}`} // Adiciona a classe `selected`
                        onClick={() => handleProjectClick(project)}
                    >
                        {project.title}
                    </div>
                ))}
            </div>
            {selectedProject && windowWidth >= 768 && (
                <div ref={projectDetailsRef} className={`${styles.projectDetails} ${isVisible ? styles.visible : ""}`} style={{ marginLeft: "50px" }}>
                    <h2>{selectedProject.title}</h2>
                    <p>{selectedProject.description}</p>
                    <a href={selectedProject.link} target="_blank" rel="noopener noreferrer">Learn more</a>
                </div>
            )}
            {isModalOpen && (
                <div className={styles.modal} onClick={closeModal}>
                    <div className={styles.modalContent} onClick={(e) => e.stopPropagation()}>
                        <h2>{selectedProject.title}</h2>
                        <p>{selectedProject.description}</p>
                        <a href={selectedProject.link} target="_blank" rel="noopener noreferrer">Learn more</a>
                    </div>
                </div>
            )}
        </div>
    );
}
