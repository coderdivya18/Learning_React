import React from "react";
import UserClass from "./UserClass";

const About = () => {
    return (
        <div className="max-w-4xl mx-auto px-4 py-8 text-gray-800 font-manrope">
            <h1 className="text-4xl font-bold mb-6 text-center text-gray-900">About Us</h1>

            <p className="mb-4 text-lg">
                Welcome to <strong className="font-semibold text-orange-600">FoodieExpress</strong>, your go-to
                destination for discovering the best local food options.
                Whether you’re in the mood for desserts, Chinese, fast food, or healthy meals, we've got you covered
                with a curated list of top-rated restaurants.
            </p>

            <p className="mb-6 text-lg">
                Our goal is to make food discovery simple, enjoyable, and tailored to your preferences. With options to
                filter for top-rated and veg-only,
                <strong className="font-semibold text-orange-600"> FoodieExpress </strong> ensures every bite you order
                is just right.
            </p>

            <h2 className="text-2xl font-semibold mt-10 mb-4 text-gray-900">What Makes Us Different</h2>
            <ul className="list-disc list-inside space-y-2 text-base text-gray-700 mb-6">
                <li>⭐ Curated list of top-rated restaurants</li>
                <li>🌱 Veg-only filter for mindful eating</li>
                <li>⏱️ Real-time delivery updates</li>
                <li>💰 Honest pricing with no surprises</li>
            </ul>

            <h2 className="text-2xl font-semibold mt-10 mb-4 text-gray-900">Our Team</h2>
            <p className="mb-6 text-lg">
                We are a team of passionate food lovers, tech geeks, and creatives working together to deliver food and
                joy to your doorstep.
                We believe every meal should be a memorable experience!
            </p>

            <UserClass name={"Divya Dube"} location={"Bangalore"} email={"dubedivya1992@gmail.com"}/>

            <h2 className="text-2xl font-semibold mt-10 mb-4 text-gray-900">Contact Us</h2>
            <p className="text-lg">
                Got feedback or questions? Reach out to us at
                <a
                    href="mailto:support@foodieexpress.com"
                    className="text-orange-600 hover:underline ml-1"
                >
                    support@foodieexpress.com
                </a>.
            </p>
        </div>
    );
};

export default About;
