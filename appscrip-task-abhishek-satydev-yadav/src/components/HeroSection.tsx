// src/components/HeroSection.tsx
import React from "react";
import styles from "./styles/HeroSection.module.css";

const HeroSection = () => {
    return (
        <section className={styles.hero}>
            <div className="container">
                <h1>Discover our products</h1>
                <p>
                    Lorem ipsum dolor sit amet consectetur. Arcu vestibular hendrerit
                    lectus scelerisque rhoncus in non interdum tellus. Ultricies gravida
                    vestibulum varius sit sed eget consectetur vellit.
                </p>
            </div>
        </section>
    );
};

export default HeroSection;
