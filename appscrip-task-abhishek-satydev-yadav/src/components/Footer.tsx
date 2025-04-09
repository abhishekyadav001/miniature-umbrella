// src/components/Footer.tsx
import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
    faFacebookF,
    faTwitter,
    faInstagram,
    faCcVisa,
    faCcMastercard,
    faCcPaypal,
    faCcAmex,
    faCcDiscover,
} from '@fortawesome/free-brands-svg-icons';
import styles from '@/styles/Footer.module.css';

const Footer = () => {
    return (
        <footer className={styles.footer}>
            <div className={styles.footerContainer}>
                <div className={styles.footerTop}>
                    <div className={styles.footerSection}>
                        <h3>BE THE FIRST TO KNOW</h3>
                        <p>Sign up for updates from mettā muse.</p>
                        <form className={styles.newsletterForm}>
                            <input type="email" placeholder="Enter your e-mail..." />
                            <button type="submit">Subscribe</button>
                        </form>
                    </div>
                    <div className={styles.footerSection}>
                        <h3>CONTACT US</h3>
                        <p>+44 221 133 5360</p>
                        <p>customercare@mettamuse.com</p>
                    </div>
                    <div className={styles.footerSection}>
                        <h3>CURRENCY</h3>
                        <div className={styles.currencySelector}>
                            <p>USD</p>
                            <span className={styles.currencyNote}>All prices are in USD</span>
                        </div>
                    </div>
                </div>

                <div className={styles.footerMiddle}>
                    <div className={styles.footerLinks}>
                        <h3>mettā muse</h3>
                        <ul>
                            <li><a href="#">About Us</a></li>
                            <li><a href="#">Stories</a></li>
                            <li><a href="#">Artisans</a></li>
                            <li><a href="#">Boutiques</a></li>
                            <li><a href="#">Contact Us</a></li>
                            <li><a href="#">EU Compliances Docs</a></li>
                        </ul>
                    </div>
                    <div className={styles.footerLinks}>
                        <h3>Quick Links</h3>
                        <ul>
                            <li><a href="#">Orders & Shipping</a></li>
                            <li><a href="#">Join/Login as a Seller</a></li>
                            <li><a href="#">Payment & Pricing</a></li>
                            <li><a href="#">Return & Refunds</a></li>
                            <li><a href="#">FAQs</a></li>
                            <li><a href="#">Privacy Policy</a></li>
                            <li><a href="#">Terms & Conditions</a></li>
                        </ul>
                    </div>
                    <div className={styles.footerLinks}>
                        <h3>Follow Us</h3>
                        <div className={styles.socialIcons}>
                            <FontAwesomeIcon icon={faFacebookF} />
                            <FontAwesomeIcon icon={faTwitter} />
                            <FontAwesomeIcon icon={faInstagram} />
                        </div>
                    </div>
                </div>

                <div className={styles.footerBottom}>
                    <div className={styles.copyright}>
                        Copyright © 2023 mettā muse. All rights reserved.
                    </div>
                    <div className={styles.paymentIcons}>
                        <FontAwesomeIcon icon={faCcVisa} />
                        <FontAwesomeIcon icon={faCcMastercard} />
                        <FontAwesomeIcon icon={faCcPaypal} />
                        <FontAwesomeIcon icon={faCcAmex} />
                        <FontAwesomeIcon icon={faCcDiscover} />
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
