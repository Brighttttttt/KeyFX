/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        './src/**/*.{js,jsx,ts,tsx}', // include all JSX and TSX files
    ],
    theme: {
        extend: {
            fontFamily: {
                plusJakartaSans: ['plusJakartaSans', 'sans-serif'],
            },
            backgroundImage: {
                'linear3': 'linear-gradient(to right,#EEC840 3%,#00D2D3 27%,#0076FF 56%,#00D2D3 85%,#EEC840 100%)',
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
    plugins: [],
}