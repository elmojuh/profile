import { useState, useEffect, useRef } from "react";
import styles from "./containerContato.module.scss";

const contacts = [
    { name: "Email", content: "https://your-email@example.com", icon: "📧", description: "Send me an email at your-email@example.com" },
    { name: "GitHub", content: "https://github.com/your-username", icon: "🐱", description: "Check out my GitHub profile at github.com/your-username" },
    { name: "LinkedIn", content: "https://www.linkedin.com/in/your-username", icon: "🔗", description: "Connect with me on LinkedIn at linkedin.com/in/your-username" },
    { name: "Instagram", content: "https://www.instagram.com/your-username", icon: "📸", description: "Follow me on Instagram at instagram.com/your-username" },
    { name: "WhatsApp", content: "https://wa.me/your-number", icon: "💬", description: "Chat with me on WhatsApp at wa.me/your-number" }
];

export default function ContainerContato() {
    const [selectedContact, setSelectedContact] = useState(null);
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
            <div className={styles.title}>Contact Me</div>
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
                        <h2>{selectedContact.name}</h2>
                        <p>{selectedContact.description}</p>
                        <a href={selectedContact.content} target="_blank" rel="noopener noreferrer" className={styles.linkButton}>Link</a>
                    </div>
                )}
            </div>
        </div>
    );
}
