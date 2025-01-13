import { useState, useEffect, useRef } from "react";
import styles from "./containerContato.module.scss";

const contacts = [
    { name: "WhatsApp", link: "https://wa.me/5521965011250", icon: "💬", description: "Entre em contato comigo pelo WathsApp" },
    { name: "GitHub", link: "https://github.com/elmojuh", icon: "🐱", description: "Veja meus projetos pelo GitHub" },
    { name: "LinkedIn", link: "https://www.linkedin.com/in/elmo-junior", icon: "🔗", description: "Me encontre na plataforma Linkedin" },
    { name: "Email", icon: "📧", description: "Me envie email para o elmosanchesjr@gmail.com" },
    { name: "Instagram", link: "https://www.instagram.com/elmojuh", icon: "📸", description: "Me encontre no Instagram" }
];

export default function ContainerContato() {
    const [selectedContact, setSelectedContact] = useState(contacts[0]);
    const [windowWidth, setWindowWidth] = useState(0);
    const [isVisible, setIsVisible] = useState(false);
    const [isFlipping, setIsFlipping] = useState(false);
    const contactListRef = useRef(null);
    const contactDetailsRef = useRef(null);

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

        if (contactListRef.current) {
            observer.observe(contactListRef.current);
        }
        if (contactDetailsRef.current) {
            observer.observe(contactDetailsRef.current);
        }

        return () => observer.disconnect();
    }, []);

    useEffect(() => {
        setIsVisible(true);
    }, []);

    useEffect(() => {
        if (contactListRef.current) {
            const firstContactItem = contactListRef.current.children[0];
            if (firstContactItem) {
                firstContactItem.classList.add(styles.slideInLeft);
            }
        }
    }, []);

    const handleContactClick = (contact) => {
        if (selectedContact !== contact) {
            setIsFlipping(true);
            setTimeout(() => {
                setSelectedContact(contact);
                setIsFlipping(false);
            }, 500); // Tempo da animação de flip
        }
    };

    return (
        <div className={styles.containerContatoWrapper}>
            <div className={styles.title}>Entre em contato comigo</div>
            <div className={styles.containerContato}>
                <div ref={contactListRef} className={styles.contacts}>
                    {contacts.map((contact, index) => (
                        <div key={index}
                             className={`${styles.contactItem} ${selectedContact === contact ? styles.selected : ""}`}
                             onClick={() => handleContactClick(contact)}>
                            <span className={styles.icon}>{contact.icon}</span>
                            <span className={styles.name}>{contact.name}</span>
                        </div>
                    ))}
                </div>
                {selectedContact && (
                  <div ref={contactDetailsRef}
                       className={`${styles.contactDetails} ${isVisible ? styles.visible : ""} ${isFlipping ? styles.flip : ""}`}>
                    <span className={styles.icon}>{selectedContact.icon}</span>
                    <h2>{selectedContact.name}</h2>
                    <p>{selectedContact.description}</p>
                    {selectedContact.link && (
                      <a href={selectedContact.link} target="_blank" rel="noopener noreferrer" className={styles.linkButton}>Link</a>
                    )}
                  </div>
                )}
            </div>
        </div>
    );
}
