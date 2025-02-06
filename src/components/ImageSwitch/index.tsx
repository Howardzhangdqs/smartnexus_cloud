import React, { useState, useEffect, useRef } from 'react';
import './styles.css';

const BackgroundImageSwitcher = ({ images, interval = 5000, filter = "blur(3px)", children }) => {
    const [currentIndex, setCurrentIndex] = useState(0);
    const timeoutRef = useRef(null);

    const nextImage = () => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    };

    useEffect(() => {
        const tick = () => {
            timeoutRef.current = setTimeout(nextImage, interval);
        };

        tick();

        return () => {
            if (timeoutRef.current) {
                clearTimeout(timeoutRef.current);
            }
        };
    }, [currentIndex, interval, images.length]);

    return (
        <div className="background-switcher">
            {images.map((image, index) => (
                <React.Fragment key={index}>
                    <div
                        className={`background-image ${index === currentIndex ? 'active' : ''}`}
                        style={{ backgroundImage: `url(${image})` }}
                    ></div>
                    <div
                        className={`background-image ${index === currentIndex ? 'active' : ''}`}
                        style={{ backgroundImage: `url(${image})`, filter }}
                    ></div>
                </React.Fragment>
            ))}
            <div className="content">{children}</div>
        </div>
    );
};


export default BackgroundImageSwitcher;