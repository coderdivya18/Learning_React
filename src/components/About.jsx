import React from 'react';

const About = () => {
    return (
        <div className="about-container">
            <h1 className="about-heading">About Us</h1>

            <p className="about-paragraph">
                Welcome to <strong>FoodieExpress</strong>, your go-to destination for discovering the best local food
                options.
                Whether you’re in the mood for desserts, Chinese, fast food, or healthy meals, we've got you covered
                with a curated list of top-rated restaurants.
            </p>

            <p className="about-paragraph">
                Our goal is to make food discovery simple, enjoyable, and tailored to your preferences. With options to
                filter for top-rated and veg-only,
                FoodieExpress ensures every bite you order is just right.
            </p>

            <h2 className="about-subheading">What Makes Us Different</h2>
            <ul className="about-list">
                <li>⭐ Curated list of top-rated restaurants</li>
                <li>🌱 Veg-only filter for mindful eating</li>
                <li>⏱️ Real-time delivery updates</li>
                <li>💰 Honest pricing with no surprises</li>
            </ul>

            <h2 className="about-subheading">Our Team</h2>
            <p className="about-paragraph">
                We are a team of passionate food lovers, tech geeks, and creatives working together to deliver food and
                joy to your doorstep.
                We believe every meal should be a memorable experience!
            </p>

            <h2 className="about-subheading">Contact Us</h2>
            <p className="about-paragraph">
                Got feedback or questions? Reach out to us at
                <a href="mailto:support@foodieexpress.com" className="about-link"> support@foodieexpress.com</a>.
            </p>
        </div>
    );
};

export default About;