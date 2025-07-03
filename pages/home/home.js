import { useEffect, useState, useRef } from "react";
import ContainerTop from "../../src/components/Home/ContainerTop/containerTop.js";
import ContainerMid1 from "../../src/components/Home/ContainerMid1/containerMid1.js";
import ContainerMid3 from "../../src/components/Home/ContainerMid3/containerMid3.js";
import ContainerMid2 from "../../src/components/Home/ContainerMid2/containerMid2";
import ContainerContato from "../../src/components/Home/ContainerContato/containerContato";
import styles from "./home.module.scss";
import icon from "../../src/components/Icons/index";

export default function Home() {
    const [isContactVisible, setIsContactVisible] = useState(false);
    const contactSectionRef = useRef(null);
    const IconComponent = icon.phone;

    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.target === contactSectionRef.current) {
                        setIsContactVisible(entry.isIntersecting);
                    }
                });
            },
            { threshold: 0.5 }
        );

        const currentContactRef = contactSectionRef.current;
        if (currentContactRef) {
            observer.observe(currentContactRef);
        }

        return () => {
            if (currentContactRef) {
                observer.unobserve(currentContactRef);
            }
        };
    }, []);

    const scrollToContact = () => {
        if (contactSectionRef.current) {
            contactSectionRef.current.scrollIntoView({ behavior: "smooth" });
        }
    };

    return (
        <div>
            <ContainerTop/>
            <ContainerMid2/>
            <ContainerMid1/>
            <ContainerMid3/>
            <div ref={contactSectionRef} className="slide-in">
                <ContainerContato/>
            </div>
            {!isContactVisible && (
                <button className={styles.contactButton} onClick={scrollToContact}>
                    <IconComponent className={styles.icon}/>
                    <span className={styles.text}>Contato</span>
                </button>
            )}
        </div>
    );
}
