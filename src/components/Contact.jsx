import React from "react";

const ContactUs = () => {
    return (
        <div className="max-w-xl mx-auto px-4 py-10 font-manrope">
            <h2 className="text-3xl font-bold mb-6 text-center text-gray-800">Contact Us</h2>
            <form className="bg-white shadow-md rounded-lg p-6 space-y-4">
                <div>
                    <label htmlFor="name" className="block text-gray-700 font-medium mb-1">
                        Name
                    </label>
                    <input
                        type="text"
                        id="name"
                        placeholder="Your name"
                        required
                        className="w-full border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-orange-500"
                    />
                </div>

                <div>
                    <label htmlFor="email" className="block text-gray-700 font-medium mb-1">
                        Email
                    </label>
                    <input
                        type="email"
                        id="email"
                        placeholder="Your email"
                        required
                        className="w-full border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-orange-500"
                    />
                </div>

                <div>
                    <label htmlFor="message" className="block text-gray-700 font-medium mb-1">
                        Message
                    </label>
                    <textarea
                        id="message"
                        rows="5"
                        placeholder="Your message"
                        required
                        className="w-full border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-orange-500"
                    ></textarea>
                </div>

                <button
                    type="submit"
                    className="w-full bg-orange-500 text-white font-semibold py-2 rounded-md hover:bg-orange-600 transition duration-300"
                >
                    Send Message
                </button>
            </form>
        </div>
    );
};

export default ContactUs;
