"use client";

// src/components/Header.tsx
import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
    faSearch,
    faUser,
    faShoppingBag,
    faHeart,
    faBars
} from '@fortawesome/free-solid-svg-icons';
import styles from '@/styles/Header.module.css';

const Header = () => {
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    const toggleMobileMenu = () => {
        setIsMobileMenuOpen(!isMobileMenuOpen);
    };

    return (
        <>
            {/* Announcement Bar */}
            <div className={styles.announcementBar}>
                <div className={`${styles.announcementItem} ${styles.mobileVisible}`}>
                    <Image
                        src="/element-4.svg"
                        alt="announcement icon"
                        width={16}
                        height={16}
                        priority
                    />
                    <span>Lorem ipsum dolor</span>
                </div>
                <div className={`${styles.announcementItem} ${styles.desktopOnly}`}>
                    <Image
                        src="/element-4.svg"
                        alt="announcement icon"
                        width={16}
                        height={16}
                        priority
                    />
                    <span>Lorem ipsum dolor</span>
                </div>
                <div className={`${styles.announcementItem} ${styles.desktopOnly}`}>
                    <Image
                        src="/element-4.svg"
                        alt="announcement icon"
                        width={16}
                        height={16}
                        priority
                    />
                    <span>Lorem ipsum dolor</span>
                </div>
            </div>

            {/* Desktop Header */}
            <header className={styles.header}>
                <div className={styles.headerTop}>
                    <div className={styles.container}>
                        <div className={styles.headerContent}>
                            <div className={styles.logoWrapper}>
                                <Link href="/" className={styles.logo}>
                                    <img src="/Logo.svg" alt="Logo Icon" className={styles.logoIcon} />
                                </Link>
                            </div>

                            <div className={styles.centerLogo}>
                                <Link href="/">
                                    <h1>LOGO</h1>
                                </Link>
                            </div>

                            <div className={styles.headerIcons}>
                                <button className={styles.iconButton}>
                                    <FontAwesomeIcon icon={faSearch} />
                                </button>
                                <button className={styles.iconButton}>
                                    <FontAwesomeIcon icon={faHeart} />
                                </button>
                                <button className={styles.iconButton}>
                                    <FontAwesomeIcon icon={faShoppingBag} />
                                </button>
                                <button className={styles.iconButton}>
                                    <FontAwesomeIcon icon={faUser} />
                                </button>
                                <div className={styles.langSelector}>
                                    <span>ENG</span>
                                    <span className={styles.arrow}>▼</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <nav className={styles.mainNav}>
                    <div className={styles.container}>
                        <ul className={styles.navList}>
                            <li><Link href="/shop">SHOP</Link></li>
                            <li><Link href="/skills">SKILLS</Link></li>
                            <li><Link href="/stories">STORIES</Link></li>
                            <li><Link href="/about">ABOUT</Link></li>
                            <li><Link href="/contact">CONTACT US</Link></li>
                        </ul>
                    </div>
                </nav>
            </header>

            {/* Mobile Header */}
            <header className={`${styles.mobileHeader} ${isMobileMenuOpen ? styles.menuOpen : ''}`}>
                <div className={styles.container}>
                    <div className={styles.mobileHeaderContent}>
                        <button className={styles.menuToggle} onClick={toggleMobileMenu}>
                            <FontAwesomeIcon icon={faBars} />
                        </button>

                        <div className={styles.mobileLogo}>
                            <Link href="/">
                                <h1>LOGO</h1>
                            </Link>
                        </div>

                        <div className={styles.mobileIcons}>
                            <button className={styles.iconButton}>
                                <FontAwesomeIcon icon={faSearch} />
                            </button>
                            <button className={styles.iconButton}>
                                <FontAwesomeIcon icon={faHeart} />
                            </button>
                            <button className={styles.iconButton}>
                                <FontAwesomeIcon icon={faShoppingBag} />
                            </button>
                        </div>
                    </div>
                </div>

                {/* Mobile Menu */}
                <div className={`${styles.mobileMenu} ${isMobileMenuOpen ? styles.active : ''}`}>
                    <nav>
                        <ul>
                            <li><Link href="/shop">SHOP</Link></li>
                            <li><Link href="/skills">SKILLS</Link></li>
                            <li><Link href="/stories">STORIES</Link></li>
                            <li><Link href="/about">ABOUT</Link></li>
                            <li><Link href="/contact">CONTACT US</Link></li>
                        </ul>
                    </nav>
                </div>
            </header>
        </>
    );
};

export default Header;
