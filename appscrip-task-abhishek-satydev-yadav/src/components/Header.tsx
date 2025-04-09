// src/components/Header.tsx
import { useState } from 'react';
import Link from 'next/link';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faSearch, faUser, faShoppingCart, faHeart } from '@fortawesome/free-solid-svg-icons';

const Header = () => {
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    const toggleMobileMenu = () => {
        setIsMobileMenuOpen(!isMobileMenuOpen);
    };

    return (
        <header>
            <div className="container">
                <div className="headerContent">
                    <div className="logo">LOGO</div>

                    <nav className={`navMenu ${isMobileMenuOpen ? 'active' : ''}`}>
                        <Link href="/">Home</Link>
                        <Link href="/products">Products</Link>
                        <Link href="/about">About</Link>
                        <Link href="/contact">Contact</Link>
                    </nav>

                    <div className="headerIcons">
                        <FontAwesomeIcon icon={faSearch} />
                        <FontAwesomeIcon icon={faUser} />
                        <FontAwesomeIcon icon={faShoppingCart} />
                        <FontAwesomeIcon icon={faHeart} />
                        <FontAwesomeIcon
                            icon={faBars}
                            className="mobileMenuIcon"
                            onClick={toggleMobileMenu}
                        />
                    </div>
                </div>
            </div>
        </header>
    );
};

export default Header;
