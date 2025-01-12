import { useEffect, useRef, useState } from "react";
import ReactMarkdown from "react-markdown";
import styles from "./containerMid2.module.scss";

export default function ContainerMid2() {
    const [visiblePhrases, setVisiblePhrases] = useState([]);
    const [phrasesAdded, setPhrasesAdded] = useState(false);
    const boxContentRef = useRef(null);

    const phrases = [
        { text: "DESENVOLVEDOR FULL STACK, utilizo TECNOLOGIAS e FERRAMENTAS ATUAIS, e no seus usos para melhorar o mundo.", emoji: "💻" },
        { text: "DIVERTIDO, INTERESSADO e conhecido pelo HUMOR RADIANTE e PARCERIA.", emoji: "😄" },
        { text: "ENTUSIASTA e ATIVISTA do TRABALHO FOCADO há um ano.", emoji: "🚀" }
    ];

    useEffect(() => {
        const observer = new IntersectionObserver((entries) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting && !phrasesAdded) {
                    entry.target.classList.add(styles.visible);
                    phrases.forEach((phrase, index) => {
                        setTimeout(() => {
                            setVisiblePhrases((prev) => [...prev, phrase]);
                        }, index * 500); // Delay de 500ms entre cada frase
                    });
                    setPhrasesAdded(true);
                }
            });
        });

        observer.observe(boxContentRef.current);

        return () => observer.disconnect();
    }, [phrasesAdded]);

    return (
        <div className={styles.containerMid}>
            <div ref={boxContentRef} className={styles.boxContent} data-direction="top">
                {visiblePhrases.map((phrase, index) => (
                    <div key={index} className={`${styles.phraseContainer} ${styles.slideIn}`}>
                        <ReactMarkdown className={styles.p}>
                            {`${phrase.emoji} **${phrase.text}**`}
                        </ReactMarkdown>
                    </div>
                ))}
            </div>
        </div>
    );
}
