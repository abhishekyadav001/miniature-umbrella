import { useState } from 'react';
import styles from '@/styles/Filters.module.css';

interface FilterProps {
    totalItems: number;
    onSortChange: (value: string) => void;
}

const Filters: React.FC<FilterProps> = ({ totalItems, onSortChange }) => {
    const [showFilter, setShowFilter] = useState(false);

    return (
        <div className={styles.filterContainer}>
            <div className={styles.filterHeader}>
                <div className={styles.filterHeaderLeft}>
                    <span className={styles.itemCount}>{totalItems} ITEMS</span>
                    <button
                        className={styles.hideFilter}
                        onClick={() => setShowFilter(!showFilter)}
                    >
                        {showFilter ? 'HIDE FILTER' : 'SHOW FILTER'}
                    </button>
                </div>
                <div className={styles.filterHeaderRight}>
                    <select
                        className={styles.sortSelect}
                        onChange={(e) => onSortChange(e.target.value)}
                        defaultValue="recommended"
                    >
                        <option value="recommended">RECOMMENDED</option>
                        <option value="newest">NEWEST FIRST</option>
                        <option value="popular">POPULAR</option>
                        <option value="price_high_low">PRICE: HIGH TO LOW</option>
                        <option value="price_low_high">PRICE: LOW TO HIGH</option>
                    </select>
                </div>
            </div>

            <div className={`${styles.sidebar} ${showFilter ? styles.show : ''}`}>
                <div className={styles.filterGroup}>
                    <label className={styles.checkboxLabel}>
                        <input type="checkbox" />
                        <span className={styles.checkmark}></span>
                        <span className={styles.labelText}>CUSTOMISABLE</span>
                    </label>
                </div>

                <div className={styles.filterGroup}>
                    <h4>IDEAL FOR</h4>
                    <label className={styles.checkboxLabel}>
                        <input type="checkbox" />
                        <span className={styles.checkmark}></span>
                        <span className={styles.labelText}>All</span>
                    </label>
                    <label className={styles.checkboxLabel}>
                        <input type="checkbox" />
                        <span className={styles.checkmark}></span>
                        <span className={styles.labelText}>Men</span>
                    </label>
                    <label className={styles.checkboxLabel}>
                        <input type="checkbox" />
                        <span className={styles.checkmark}></span>
                        <span className={styles.labelText}>Women</span>
                    </label>
                </div>

                <div className={styles.filterGroup}>
                    <h4>OCCASION</h4>
                    <label className={styles.checkboxLabel}>
                        <input type="checkbox" />
                        <span className={styles.checkmark}></span>
                        <span className={styles.labelText}>All</span>
                    </label>
                </div>

                <div className={styles.filterGroup}>
                    <h4>WORK</h4>
                    <label className={styles.checkboxLabel}>
                        <input type="checkbox" />
                        <span className={styles.checkmark}></span>
                        <span className={styles.labelText}>All</span>
                    </label>
                </div>

                <div className={styles.filterGroup}>
                    <h4>FABRIC</h4>
                    <label className={styles.checkboxLabel}>
                        <input type="checkbox" />
                        <span className={styles.checkmark}></span>
                        <span className={styles.labelText}>All</span>
                    </label>
                </div>

                <div className={styles.filterGroup}>
                    <h4>SEGMENT</h4>
                    <label className={styles.checkboxLabel}>
                        <input type="checkbox" />
                        <span className={styles.checkmark}></span>
                        <span className={styles.labelText}>All</span>
                    </label>
                </div>

                <div className={styles.filterGroup}>
                    <h4>SUITABLE FOR</h4>
                    <label className={styles.checkboxLabel}>
                        <input type="checkbox" />
                        <span className={styles.checkmark}></span>
                        <span className={styles.labelText}>All</span>
                    </label>
                </div>

                <div className={styles.filterGroup}>
                    <h4>RAW MATERIALS</h4>
                    <label className={styles.checkboxLabel}>
                        <input type="checkbox" />
                        <span className={styles.checkmark}></span>
                        <span className={styles.labelText}>All</span>
                    </label>
                </div>

                <div className={styles.filterGroup}>
                    <h4>PATTERN</h4>
                    <label className={styles.checkboxLabel}>
                        <input type="checkbox" />
                        <span className={styles.checkmark}></span>
                        <span className={styles.labelText}>All</span>
                    </label>
                </div>
            </div>
        </div>
    );
};

export default Filters; 