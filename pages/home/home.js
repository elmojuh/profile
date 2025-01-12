import { useEffect } from "react";
import ContainerTop from "../../src/components/Home/ContainerTop/containerTop.js";
import ContainerMid1 from "../../src/components/Home/ContainerMid1/containerMid1.js";
import ContainerMid3 from "../../src/components/Home/ContainerMid3/containerMid3.js";
import ContainerMid2 from "../../src/components/Home/ContainerMid2/containerMid2";
import ContainerContato from "../../src/components/Home/ContainerContato/containerContato";

export default function Home() {
    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        entry.target.classList.add("visible");
                    }
                });
            },
            { threshold: 0.5 } // Define que a animação inicia quando 50% do elemento está visível
        );

        const elements = document.querySelectorAll(".slide-in");
        elements.forEach((el) => observer.observe(el));

        return () => observer.disconnect(); // Limpa o observer ao desmontar
    }, []);

    return (
        <div>
            <ContainerTop/>
            <ContainerMid2/>
            <ContainerMid1/>
            <ContainerMid3/>
            <ContainerContato/>
        </div>
    );
}
