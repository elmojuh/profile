import { useEffect, useState } from "react";
import ContainerTop from "../../src/components/Home/ContainerTop/containerTop.js";
import ContainerMid1 from "../../src/components/Home/ContainerMid1/containerMid1.js";
import ContainerMid3 from "../../src/components/Home/ContainerMid3/containerMid3.js";
import ContainerMid2 from "../../src/components/Home/ContainerMid2/containerMid2";
import ContainerContato from "../../src/components/Home/ContainerContato/containerContato";
import styles from "./home.module.scss";

export default function Home() {
    const [isContactVisible, setIsContactVisible] = useState(false);

    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.target.id === "contactSection") {
                        setIsContactVisible(entry.isIntersecting);
                    }
                });
            },
            { threshold: 0.5 } // Define que a animação inicia quando 50% do elemento está visível
        );

        const contactSection = document.getElementById("contactSection");
        if (contactSection) {
            observer.observe(contactSection);
        }

        return () => observer.disconnect(); // Limpa o observer ao desmontar
    }, []);

    const scrollToContact = () => {
        const contactSection = document.getElementById("contactSection");
        if (contactSection) {
            contactSection.scrollIntoView({ behavior: "smooth" });
        }
    };

    return (
        <div>
            <ContainerTop/>
            <ContainerMid2/>
            <ContainerMid1/>
            <ContainerMid3/>
            <div id="contactSection" className="slide-in">
                <ContainerContato/>
            </div>
            {!isContactVisible && (
                <button className={styles.contactButton} onClick={scrollToContact}>
                    <span className={styles.icon}>💬</span>
                    <span className={styles.text}>Contato</span>
                </button>
            )}
        </div>
    );
}
