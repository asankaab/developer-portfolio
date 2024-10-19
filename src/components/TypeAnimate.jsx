'use client'

import { TypeAnimation } from "react-type-animation";

export default function TypeAnimate({text, style, className}) {
    return (
        <TypeAnimation
            sequence={[ text, 50, "", 10 ]}
            wrapper="span"
            cursor={true}
            repeat={Infinity}
            style={style}
            className={className}
            speed={75}
            />
    )
}