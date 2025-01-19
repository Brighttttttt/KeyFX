import {nextui} from "@nextui-org/react"
import tailwindcssAnimate from "tailwindcss-animate"

export default {
    content: [
        './src/**/*.{js,jsx,ts,tsx}', // include all JSX and TSX files
        "./node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {
            spacing: {
                'navbar-height-lg': '80px',
                'navbar-height-sm': '60px',
                'max-width-main': '1440px',
            },
            height: {
                'screen-without-navbar-lg': 'calc(100vh - theme(spacing.navbar-height-lg))',
                'screen-without-navbar-sm': 'calc(100vh - theme(spacing.navbar-height-sm))',
            },
            fontFamily: {
                plusJakartaSans: ['plusJakartaSans', 'sans-serif'],
                roboto: ['Roboto Serif', 'sans-serif'],
            },
            backgroundImage: {
                'linear3': 'linear-gradient(to right,#EEC840 3%,#00D2D3 27%,#0076FF 56%,#00D2D3 85%,#EEC840 100%)',
                'commerce-gradient': 'linear-gradient(to bottom, #ffffff66 0%, #ffffff4d 25%, #f6f9fc4d 50%, #f6f9fc 60%)',
                'flow-gradient': 'linear-gradient(180deg ,#EEC840 ,#00D2D3 ,#0076FF ,#00D2D3 ,#EEC840)',
            },
            animation: {
                'bounce-slow': 'bounceSlow 4s ease-in-out infinite',
                height: 'height 5s infinite',
                "marquee-left": "marquee-left var(--duration, 40s) linear infinite",
                "marquee-up": "marquee-up var(--duration, 40s) linear infinite",
                'gradient-move': 'gradient-move 6s linear infinite',
            },
            keyframes: {
                bounceSlow: {
                    '0%, 100%': {transform: 'translateY(-5px)'},
                    '50%': {transform: 'translateY(5px)'},
                },
                height: {
                    '0%': {height: '0'},
                    '100%': {height: '163px'},
                },
                "marquee-left": {
                    from: {transform: "translateX(0)"},
                    to: {transform: "translateX(calc(-100% - var(--gap)))"},
                },
                "marquee-up": {
                    from: {transform: "translateY(0)"},
                    to: {transform: "translateY(calc(-100% - var(--gap)))"},
                },
                'gradient-move': {
                    '0%': { backgroundPosition: '0% 50%' },
                    '100%': { backgroundPosition: '200% 50%' },
                },
            },
        },
        screens: {
            sm: '640px',
            md: '769px',
            lg: '1050px',
            xl: '1280px',
            '2xl': '1536px',
        },
        fontSize: {
            '3xs': '8px',
            xxs: '10px',
            xs: ['12px', '16px'],
            sm: ['14px', '20px'],
            base: ['16px', '24px'],
            lg: ['18px', '28px'],
            xl: ['20px', '28px'],
            '2xl': ['24px', '32px'],
            '3xl': ['30px', '36px'],
            '4xl': ['36px', '40px'],
            '5xl': ['48px', '1'],
            '6xl': ['60px', '1'],
            '7xl': ['72px', '1'],
            '8xl': ['96px', '1'],
            '9xl': ['128px', '1'],
        },
    },
    darkMode: "class",
    plugins: [nextui(), tailwindcssAnimate],
}