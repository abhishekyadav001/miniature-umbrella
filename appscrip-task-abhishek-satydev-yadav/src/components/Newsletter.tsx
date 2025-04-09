import { useState } from 'react';

const Newsletter = () => {
    const [email, setEmail] = useState('');

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        // Handle newsletter subscription logic here
        console.log('Subscribed with email:', email);
        setEmail('');
    };

    return (
        <section className="newsletterSection">
            <div className="container">
                <h2>Subscribe to Our Newsletter</h2>
                <p>Stay updated with our latest products and offers</p>
                <form className="newsletterForm" onSubmit={handleSubmit}>
                    <input
                        type="email"
                        placeholder="Enter your email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        required
                    />
                    <button type="submit">Subscribe</button>
                </form>
            </div>
        </section>
    );
};

export default Newsletter; 