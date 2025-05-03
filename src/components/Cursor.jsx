'use client';

import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import "./cursor.css"

const Cursor = () => {
    const [cursorPosition, setCursorPosition] = useState({ x: -1000, y: -1000 });
    const [display, setDisplay] = useState('0');
    const [hoverClass, setHoverClass] = useState('');

    useEffect(() => {
        setDisplay('0.5');
        const handleMouseMove = (e) => {
            if (e.view.innerWidth < 768) {
                setDisplay('none')
            }
            setCursorPosition({ x: e.clientX, y: e.clientY });
        };

        const handleMouseEnterLink = () => {
            setHoverClass('cursor-hover-link');
        };

        const handleMouseEnterEl = () => {
            setHoverClass('cursor-hover');
        };

        const handleMouseLeave = () => {
            setHoverClass('');
        };

        window.addEventListener('mousemove', handleMouseMove);

        document.querySelectorAll('.cursor-hover-el').forEach((el) => {
            el.addEventListener('mouseenter', handleMouseEnterEl);
            el.addEventListener('mouseleave', handleMouseLeave);
        });

        document.querySelectorAll('a').forEach((link) => {
            link.addEventListener('mouseenter', handleMouseEnterLink);
            link.addEventListener('mouseleave', handleMouseLeave);
        });

        return () => {
            window.removeEventListener('mousemove', handleMouseMove);
            document.querySelectorAll('a').forEach((link) => {
                link.removeEventListener('mouseenter', handleMouseEnterLink);
                link.removeEventListener('mouseleave', handleMouseLeave);
            });
        };
    }, []);

    return (
        <>
        <motion.div
            className={`cursor ${hoverClass}`} 
            style={{
                display: display,
            }}
            animate={{
                x: cursorPosition.x - 60/2,
                y: cursorPosition.y - 60/2,
            }}
            transition={{
                type: 'spring',
                stiffness: 150,
                damping: 30,
            }}
        />
        <motion.div
            className={`cursor-center`} 
            style={{
                display: display,
            }}
            animate={{
                x: cursorPosition.x - 20/2,
                y: cursorPosition.y - 20/2,
            }}
            transition={{
                type: 'spring',
                stiffness: 250,
                damping: 30,
            }}
        />
        </>
    );
};

export default Cursor;