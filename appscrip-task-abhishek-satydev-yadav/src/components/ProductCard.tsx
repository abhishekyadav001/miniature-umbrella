// src/components/ProductCard.tsx
import React, { useState } from "react";
import styles from "./styles/ProductCard.module.css";
import Image from 'next/image';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart } from '@fortawesome/free-solid-svg-icons';

interface ProductCardProps {
    id: number;
    name: string;
    price: number;
    image: string;
    category: string;
    isOutOfStock?: boolean;
}

const ProductCard = ({ id, name, price, image, category, isOutOfStock = false }: ProductCardProps) => {
    const [isFavorite, setIsFavorite] = useState(false);

    const toggleFavorite = () => {
        setIsFavorite(!isFavorite);
    };

    return (
        <div className={styles["product-card"]}>
            <div className={styles["product-image"]}>
                <Image
                    src={image}
                    alt={name}
                    width={300}
                    height={200}
                    style={{ objectFit: 'cover' }}
                />
                {isOutOfStock && <div className={styles["out-of-stock"]}>OUT OF STOCK</div>}
            </div>
            <div className={styles["product-info"]}>
                <div className={styles["product-details"]}>
                    <h3 className={styles["product-name"]}>{name}</h3>
                    <p className={styles["product-category"]}>{category}</p>
                </div>
                <div className={styles["product-price"]}>
                    <span>${price.toFixed(2)}</span>
                    <FontAwesomeIcon
                        icon={faHeart}
                        className={`${styles["heart-icon"]} ${isFavorite ? styles["active"] : ""}`}
                        onClick={toggleFavorite}
                    />
                </div>
            </div>
        </div>
    );
};

export default ProductCard;
