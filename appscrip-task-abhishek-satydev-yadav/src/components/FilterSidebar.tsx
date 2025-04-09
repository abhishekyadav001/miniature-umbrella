// src/components/FilterSidebar.tsx
import React from "react";
import styles from "./styles/FilterSidebar.module.css";

const filterData = [
    {
        title: "Collections",
        options: ["Featured", "New Arrival", "Best Seller"],
    },
    {
        title: "Regular fit",
        options: ["Option 1", "Option 2"],
    },
    {
        title: "Categories",
        options: ["Backpacks", "Accessories"],
    },
    {
        title: "Color",
        options: ["Black", "Yellow", "Orange"],
    },
    {
        title: "Price",
        options: ["$0 - $50", "$50 - $100", "$100 - $150"],
    },
    {
        title: "Material",
        options: ["Cotton", "Polyester"],
    },
    {
        title: "Size",
        options: ["S", "M", "L"],
    },
    {
        title: "Occasion",
        options: ["Casual", "Formal"],
    },
    {
        title: "Storage type",
        options: ["Pockets", "Zippers"],
    },
    {
        title: "Suitable for",
        options: ["Men", "Women", "Unisex"],
    },
    {
        title: "Pattern",
        options: ["Solid", "Striped"],
    },
];

const FilterSidebar = () => {
    return (
        <aside className={styles.filters}>
            {filterData.map((group) => (
                <div className={styles["filter-group"]} key={group.title}>
                    <h3 className={styles["filter-title"]}>{group.title}</h3>
                    <ul className={styles["filter-options"]}>
                        {group.options.map((option) => (
                            <li key={option}>
                                <label>
                                    <input type="checkbox" /> {option}
                                </label>
                            </li>
                        ))}
                    </ul>
                </div>
            ))}
        </aside>
    );
};

export default FilterSidebar;
