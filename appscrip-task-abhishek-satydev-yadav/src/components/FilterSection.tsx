"use client";

import React, { useState, useEffect } from 'react';
import styles from '../styles/ProductFilter.module.css';
import ProductCard from './ProductCard';

interface Product {
    id: number;
    title: string;
    price: number;
    image: string;
    category: string;
    description: string;
}

type FilterKey = 'customisable' | 'idealFor' | 'occasion' | 'work' | 'fabric' | 'segment' | 'suitableFor' | 'rawMaterials' | 'pattern';

interface FilterState {
    customisable: boolean;
    idealFor: string[];
    occasion: string[];
    work: string[];
    fabric: string[];
    segment: string[];
    suitableFor: string[];
    rawMaterials: string[];
    pattern: string[];
}

type FilterGroupKey = keyof Omit<FilterState, 'customisable'>;

interface FilterGroup {
    title: string;
    key: FilterGroupKey;
    options: string[];
}

const FilterSection: React.FC = () => {
    const [products, setProducts] = useState<Product[]>([]);
    const [loading, setLoading] = useState(true);
    const [showFilter, setShowFilter] = useState(true);
    const [sortBy, setSortBy] = useState('recommended');
    const [categories, setCategories] = useState<string[]>([]);
    const [isMobileView, setIsMobileView] = useState(false);

    const [selectedFilters, setSelectedFilters] = useState<FilterState>({
        customisable: false,
        idealFor: [],
        occasion: [],
        work: [],
        fabric: [],
        segment: [],
        suitableFor: [],
        rawMaterials: [],
        pattern: []
    });

    const filterGroups: FilterGroup[] = [
        { title: 'WORK', key: 'work', options: ['Office', 'Outdoor', 'Home'] },
        { title: 'FABRIC', key: 'fabric', options: ['Cotton', 'Silk', 'Wool'] },
        { title: 'SEGMENT', key: 'segment', options: ['Premium', 'Regular'] },
        { title: 'SUITABLE FOR', key: 'suitableFor', options: ['Summer', 'Winter', 'All Season'] },
        { title: 'RAW MATERIALS', key: 'rawMaterials', options: ['Organic', 'Synthetic'] },
        { title: 'PATTERN', key: 'pattern', options: ['Solid', 'Printed', 'Striped'] }
    ];

    useEffect(() => {
        const handleResize = () => {
            const isMobile = window.innerWidth <= 768;
            setIsMobileView(isMobile);
            if (!isMobile) {
                setShowFilter(true);
            }
        };

        handleResize();
        window.addEventListener('resize', handleResize);

        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);

    const toggleFilter = () => {
        setShowFilter(!showFilter);
    };

    const handleSortChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
        setSortBy(event.target.value);
    };

    useEffect(() => {
        // Fetch products
        fetch('https://fakestoreapi.com/products')
            .then(res => res.json())
            .then(data => {
                setProducts(data);
                setLoading(false);
            });

        // Fetch categories
        fetch('https://fakestoreapi.com/products/categories')
            .then(res => res.json())
            .then(data => setCategories(data));
    }, []);

    const handleFilterChange = (key: keyof FilterState, value: string | boolean) => {
        setSelectedFilters(prev => {
            if (key === 'customisable') {
                return { ...prev, [key]: value as boolean };
            }
            const currentArray = prev[key] as string[];
            const valueStr = value as string;
            return {
                ...prev,
                [key]: currentArray.includes(valueStr)
                    ? currentArray.filter(item => item !== valueStr)
                    : [...currentArray, valueStr]
            };
        });
    };

    return (
        <div className={styles.filterContainer}>
            <div className={styles.filterHeader}>
                <div className={styles.filterHeaderLeft}>
                    <span className={styles.itemCount}>{products.length} ITEMS</span>
                    <button className={styles.hideFilter} onClick={toggleFilter}>
                        {showFilter ? 'HIDE FILTER' : 'SHOW FILTER'}
                    </button>
                </div>
                <div className={styles.sortDropdown}>
                    <select
                        value={sortBy}
                        onChange={handleSortChange}
                        className={styles.sortSelect}
                    >
                        <option value="recommended">RECOMMENDED</option>
                        <option value="newest">NEWEST FIRST</option>
                        <option value="popular">POPULAR</option>
                        <option value="price_high_low">PRICE: HIGH TO LOW</option>
                        <option value="price_low_high">PRICE: LOW TO HIGH</option>
                    </select>
                </div>
            </div>

            <div className={styles.mainContent}>
                {showFilter && (
                    <aside className={`${styles.sidebar} ${isMobileView ? styles.show : ''}`}>
                        {isMobileView && (
                            <div className={styles.mobileFilterHeader}>
                                <span>FILTERS</span>
                                <button onClick={toggleFilter}>&times;</button>
                            </div>
                        )}
                        <div className={styles.filterGroup}>
                            <h4>CUSTOMISABLE</h4>
                            <label className={styles.checkboxLabel}>
                                <input
                                    type="checkbox"
                                    checked={selectedFilters.customisable}
                                    onChange={(e) => handleFilterChange('customisable', e.target.checked)}
                                />
                                <span className={styles.checkmark}></span>
                                <span className={styles.labelText}>Customisable</span>
                            </label>
                        </div>

                        <div className={styles.filterGroup}>
                            <h4>IDEAL FOR</h4>
                            {['Men', 'Women', 'Baby & Kids'].map((option) => (
                                <label key={option} className={styles.checkboxLabel}>
                                    <input
                                        type="checkbox"
                                        checked={selectedFilters.idealFor.includes(option)}
                                        onChange={() => handleFilterChange('idealFor', option)}
                                    />
                                    <span className={styles.checkmark}></span>
                                    <span className={styles.labelText}>{option}</span>
                                </label>
                            ))}
                        </div>

                        <div className={styles.filterGroup}>
                            <h4>OCCASION</h4>
                            {['Wedding', 'Party', 'Formal', 'Casual'].map((option) => (
                                <label key={option} className={styles.checkboxLabel}>
                                    <input
                                        type="checkbox"
                                        checked={selectedFilters.occasion.includes(option)}
                                        onChange={() => handleFilterChange('occasion', option)}
                                    />
                                    <span className={styles.checkmark}></span>
                                    <span className={styles.labelText}>{option}</span>
                                </label>
                            ))}
                        </div>

                        {filterGroups.map((group) => (
                            <div key={group.title} className={styles.filterGroup}>
                                <h4>{group.title}</h4>
                                {group.options.map((option) => (
                                    <label key={option} className={styles.checkboxLabel}>
                                        <input
                                            type="checkbox"
                                            checked={selectedFilters[group.key].includes(option)}
                                            onChange={() => handleFilterChange(group.key, option)}
                                        />
                                        <span className={styles.checkmark}></span>
                                        <span className={styles.labelText}>{option}</span>
                                    </label>
                                ))}
                            </div>
                        ))}
                    </aside>
                )}

                {isMobileView && (
                    <button className={styles.mobileFilter} onClick={toggleFilter}>
                        <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M14.6667 2H1.33333C0.596954 2 0 1.40305 0 0.666667C0 0.298477 0.298477 0 0.666667 0H15.3333C15.7015 0 16 0.298477 16 0.666667C16 1.40305 15.403 2 14.6667 2Z" fill="currentColor" />
                            <path d="M12.6667 9H3.33333C2.59695 9 2 8.40305 2 7.66667C2 7.29848 2.29848 7 2.66667 7H13.3333C13.7015 7 14 7.29848 14 7.66667C14 8.40305 13.403 9 12.6667 9Z" fill="currentColor" />
                            <path d="M10.6667 16H5.33333C4.59695 16 4 15.403 4 14.6667C4 14.2985 4.29848 14 4.66667 14H11.3333C11.7015 14 12 14.2985 12 14.6667C12 15.403 11.403 16 10.6667 16Z" fill="currentColor" />
                        </svg>
                        FILTER
                    </button>
                )}

                <div className={styles.productGrid}>
                    {loading ? (
                        <div>Loading...</div>
                    ) : (
                        products.map((product) => (
                            <ProductCard
                                key={product.id}
                                id={product.id}
                                name={product.title}
                                price={product.price}
                                image={product.image}
                                category={product.category}
                            />
                        ))
                    )}
                </div>
            </div>
        </div>
    );
};

export default FilterSection; 