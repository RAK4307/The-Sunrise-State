import React, { useState, useEffect } from 'react';
import { ArrowUp } from 'lucide-react';
import './BackToTopButton.css';

const BackToTopButton = () => {
    const [isVisible, setIsVisible] = useState(false);

    // Show button when page is scrolled down
    const toggleVisibility = () => {
        if (window.scrollY > 300) {
            setIsVisible(true);
        } else {
            setIsVisible(false);
        }
    };

    // Set up event listener for scroll
    useEffect(() => {
        window.addEventListener('scroll', toggleVisibility);

        return () => {
            window.removeEventListener('scroll', toggleVisibility);
        };
    }, []);

    // Smooth scroll to top
    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth',
        });
    };

    return (
        <div className="back-to-top-container">
            {isVisible && (
                <button
                    onClick={scrollToTop}
                    className="back-to-top-button"
                    aria-label="Go to top"
                >
                    <ArrowUp size={24} />
                </button>
            )}
        </div>
    );
};

export default BackToTopButton;
