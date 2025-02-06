import React, { useEffect, useRef } from 'react';
import './styles.css';

const UpFlow = ({
    children,
    speed = '0.5s',
    transform = 'translateY(70px)'
}) => {
    const elementRef = useRef(null);
    let displayed = false;

    useEffect(() => {
        const observer = new IntersectionObserver((entries) => {
            if (displayed) return;

            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('show');

                    if (elementRef.current) {
                        (elementRef.current as HTMLDivElement).style.transform = 'translateY(0)'
                        displayed = true;
                    }
                } else {
                    entry.target.classList.remove('show');

                    if (elementRef.current) {
                        (elementRef.current as HTMLDivElement).style.transform = 'translateY(30px)'
                    }
                }
            });
        });

        if (elementRef.current) {
            observer.observe(elementRef.current);
            // 根据传入的 speed 属性设置过渡时间
            elementRef.current.style.transition = `all ${speed} ease`;
        }

        return () => {
            if (elementRef.current) {
                observer.unobserve(elementRef.current);
            }
            observer.disconnect();
        };
    }, [speed]);

    return (
        <div ref={elementRef} className="up-flow-element" style={{ transform }}>
            {children}
        </div>
    );
};


export default UpFlow;