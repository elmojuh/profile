import { useEffect, useRef } from "react";
import styles from "./containerTop.module.scss";

export default function ContainerTop() {
    const typingTextRef = useRef(null);
    const imageRef = useRef(null);
    const textRef = useRef(null);

    useEffect(() => {
        // Animações de entrada com IntersectionObserver
        const observer = new IntersectionObserver((entries) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    entry.target.classList.add(styles.visible);
                }
            });
        });

        const elements = [imageRef.current, textRef.current];
        elements.forEach((el) => observer.observe(el));

        // Lógica para animação de digitação
        const text = "Vamos construir seu sistema juntos?";
        let index = 0;
        let typingTimer;
        let initialTimer;

        const typeText = () => {
            if (index < text.length && typingTextRef.current) {
                typingTextRef.current.textContent += text[index];
                index++;
                typingTimer = setTimeout(typeText, 50);
            }
        };

        // Inicia a digitação quando a página carrega
        initialTimer = setTimeout(typeText, 2000);

        return () => {
            observer.disconnect();
            clearTimeout(initialTimer);
            clearTimeout(typingTimer);
        };
    }, []);

    return (
        <div className={styles.containerTop}>
            <div className={styles.box}>
                <div ref={imageRef} className={`${styles.boxImage}`} data-direction="left">
                    <img src="/images/minha_foto_2.jpg" alt="Minha imagem" className={styles.imgProfile}/>
                </div>
                <div ref={textRef} className={`${styles.boxText}`} data-direction="right">
                    <span ref={typingTextRef} className={styles.cursor}></span>
                </div>
            </div>
        </div>
    );
}
