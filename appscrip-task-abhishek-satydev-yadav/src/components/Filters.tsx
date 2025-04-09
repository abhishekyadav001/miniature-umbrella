import { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTimes } from '@fortawesome/free-solid-svg-icons';

interface FilterOption {
    id: string;
    label: string;
    value: string;
}

interface FilterGroup {
    id: string;
    title: string;
    options: FilterOption[];
}

const Filters = () => {
    const [isFiltersOpen, setIsFiltersOpen] = useState(false);

    const filterGroups: FilterGroup[] = [
        {
            id: 'category',
            title: 'Category',
            options: [
                { id: 'cat1', label: 'Category 1', value: 'category1' },
                { id: 'cat2', label: 'Category 2', value: 'category2' },
                { id: 'cat3', label: 'Category 3', value: 'category3' },
            ],
        },
        {
            id: 'price',
            title: 'Price Range',
            options: [
                { id: 'price1', label: 'Under $50', value: 'under50' },
                { id: 'price2', label: '$50 - $100', value: '50to100' },
                { id: 'price3', label: 'Over $100', value: 'over100' },
            ],
        },
        {
            id: 'color',
            title: 'Color',
            options: [
                { id: 'color1', label: 'Red', value: 'red' },
                { id: 'color2', label: 'Blue', value: 'blue' },
                { id: 'color3', label: 'Green', value: 'green' },
            ],
        },
    ];

    const toggleFilters = () => {
        setIsFiltersOpen(!isFiltersOpen);
        document.body.style.overflow = isFiltersOpen ? '' : 'hidden';
    };

    return (
        <>
            <div className="filterControls">
                <button className="filterToggle" onClick={toggleFilters}>
                    Filters
                </button>
                <button className="sortToggle">
                    Sort
                </button>
            </div>

            <div className={`filters ${isFiltersOpen ? 'active' : ''}`}>
                <div className="filterHeader">
                    <h3>Filters</h3>
                    <button className="closeFilters" onClick={toggleFilters}>
                        <FontAwesomeIcon icon={faTimes} />
                    </button>
                </div>

                {filterGroups.map((group) => (
                    <div key={group.id} className="filterGroup">
                        <h4 className="filterTitle">{group.title}</h4>
                        <ul className="filterOptions">
                            {group.options.map((option) => (
                                <li key={option.id}>
                                    <label>
                                        <input type="checkbox" value={option.value} />
                                        {option.label}
                                    </label>
                                </li>
                            ))}
                        </ul>
                    </div>
                ))}

                <button className="applyFiltersBtn" onClick={toggleFilters}>
                    Apply Filters
                </button>
            </div>
        </>
    );
};

export default Filters; 