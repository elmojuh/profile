import { useState, useEffect, useRef } from "react";
import styles from "./containerMid3.module.scss";
import icons from "../../../components/Icons/index";

const projectsData = [
    {
        "title": "IC - Learning Curve",
        "description": "Iniciação Científica em ANDAMENTO com pesquisa sobre a curva de aprendizado de desenvolvedores",
    },
    {
        "title": "TCC - Learning Curve",
        "description": "Trabalho de Conclusão de Curso EM ANDAMENTO com pesquisa sobre a curva de aprendizado de desenvolvedores",
    },
    {
        "title": "Cumes Brasil",
        "description": "Projeto realizado por mim e parceiros para a construção da plataforma Cumes Brasil",
        "link": "https://www.cumesbrasil.com.br/",
        "github": "https://github.com/elmojuh/cumes-brasil"
    },
    {
        "title": "Trabalhos Academicos",
        "description": "Acesso aos mais diversos trabalhos acadêmicos realizados por mim e parceiros",
        "link": "https://example.com/cumess-brasil"
    },
    {
        "title": "Publicações Científicas",
        "description": "Acesso as mais diversas publicações acadêmicas realizados por mim e parceiros",
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
    const IconComponent = icons["github"];

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
            openModal();
        }
    };

    const openModal = () => {
        setIsModalOpen(true);
        setTimeout(() => {
            document.querySelector(`.${styles.modal}`).classList.add(styles.visible);
        }, 10); // Pequeno atraso para garantir que a classe seja adicionada após a renderização
    };

    const closeModal = () => {
        document.querySelector(`.${styles.modal}`).classList.remove(styles.visible);
        setTimeout(() => {
            setIsModalOpen(false);
        }, 500); // Tempo da animação de fechamento
    };

    return (
        <div className={styles.containerMid}>
            <div className={styles.boxContent}>
                <h1 className={styles.title}>Meus Projetos</h1>
                <div className={styles.divider}></div>
                <div ref={projectListRef} className={styles.projectList}>
                    {projectsData.map((project, index) => (
                        <div
                            key={index}
                            className={`${styles.btn1} ${selectedProject === project ? styles.selected : ""}`}
                            onClick={() => handleProjectClick(project)}
                        >
                            {project.title}
                        </div>
                    ))}
                </div>
                {selectedProject && windowWidth >= 888 && (
                    <div className={styles.boxDetails}>
                        <div ref={projectDetailsRef} className={`${styles.projectDetails} ${isVisible ? styles.visible : ""}`}>
                            <h2>{selectedProject.title}</h2>
                            <p>{selectedProject.description}</p>
                            <div className={styles.projectLinks}>
                                {selectedProject.link && (
                                    <a href={selectedProject.link} target="_blank" rel="noopener noreferrer"
                                       className={styles.btn2}>Saiba mais</a>
                                )}
                                {selectedProject.github && (
                                    <a href={selectedProject.github} target="_blank" rel="noopener noreferrer"
                                       className={styles.githubButton}>
                                        {IconComponent && <IconComponent size={30} />}
                                    </a>
                                )}
                            </div>
                        </div>
                    </div>
                )}
                {isModalOpen && (
                    <div className={styles.modal} onClick={closeModal}>
                        <div className={styles.modalDetails} onClick={(e) => e.stopPropagation()}>
                            <h2>{selectedProject.title}</h2>
                            <p>{selectedProject.description}</p>
                            <div className={styles.projectLinks}>
                                {selectedProject.link && (
                                    <a href={selectedProject.link} target="_blank" rel="noopener noreferrer"
                                       className={styles.btn2}>Saiba mais</a>
                                )}
                                {selectedProject.github && (
                                    <a href={selectedProject.github} target="_blank" rel="noopener noreferrer"
                                       className={styles.githubButton}>
                                        {IconComponent && <IconComponent size={30} />}
                                    </a>
                                )}
                            </div>
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
}
