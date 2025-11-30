/** @type {import('tailwindcss').Config} */
export default {
    content: [
        "./index.html",
        "./src/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {
            colors: {
                background: '#f8f8f7',
                muted: '#cbc0b2',
                primary: '#550b14',
                secondary: '#7e6961',
            },
        },
    },
    plugins: [],
}