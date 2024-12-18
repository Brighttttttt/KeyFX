const {nextui} = require("@nextui-org/react");

module.exports = {
    content: [
        './src/**/*.{js,jsx,ts,tsx}', // include all JSX and TSX files
        "./node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {
            fontFamily: {
                plusJakartaSans: ['plusJakartaSans', 'sans-serif'],
            },
            backgroundImage: {
                'linear3': 'linear-gradient(to right,#EEC840 3%,#00D2D3 27%,#0076FF 56%,#00D2D3 85%,#EEC840 100%)',
            },
            animation: {
                'bounce-slow': 'bounceSlow 4s ease-in-out infinite',
            },
            keyframes: {
                bounceSlow: {
                    '0%, 100%': { transform: 'translateY(-5px)' },
                    '50%': { transform: 'translateY(5px)' },
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
    plugins: [nextui()],
}