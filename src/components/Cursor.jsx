'use client';

import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

const Cursor = () => {
    const [cursorPosition, setCursorPosition] = useState({ x: 0, y: 0 });
    const [display, setDisplay] = useState('none');
    const [cursorSize, setCursorSize] = useState('150px');

    useEffect(() => {
        setDisplay('block');
        const handleMouseMove = (e) => {
            setCursorPosition({ x: e.clientX, y: e.clientY });
        };

        const handleMouseEnterLink = () => {
            setCursorSize('40px');
        };

        const handleMouseLeaveLink = () => {
            setCursorSize('150px');
        };

        window.addEventListener('mousemove', handleMouseMove);
        document.querySelectorAll('a').forEach((link) => {
            link.addEventListener('mouseenter', handleMouseEnterLink);
            link.addEventListener('mouseleave', handleMouseLeaveLink);
        });

        return () => {
            window.removeEventListener('mousemove', handleMouseMove);
            document.querySelectorAll('a').forEach((link) => {
                link.removeEventListener('mouseenter', handleMouseEnterLink);
                link.removeEventListener('mouseleave', handleMouseLeaveLink);
            });
        };
    }, []);

    return (
        <motion.div
            className="custom-cursor"
            style={{
                display: display,
                position: 'fixed',
                top: 0,
                left: 0,
                width: cursorSize,
                height: cursorSize,
                borderRadius: '50%',
                background: 'linear-gradient(135deg, blue, green)',
                border: '2px solid rose',
                pointerEvents: 'none',
                zIndex: 9999,
                mixBlendMode: 'screen'
            }}
            animate={{
                x: cursorPosition.x - parseInt(cursorSize) / 2,
                y: cursorPosition.y - parseInt(cursorSize) / 2,
            }}
            transition={{
                type: 'spring',
                stiffness: 150,
                damping: 30,
            }}
        />
    );
};

export default Cursor;