/** @type {import('tailwindcss').Config} */
export default {
    content: [
        './app/**/*.{js,ts,jsx,tsx}',
        './components/**/*.{js,ts,jsx,tsx}',
    ],
    important: true, // Force higher specificity
    theme: {
        extend: {
            colors: {
                'forest-dark': '#1a472a',
                'forest-light': '#2d5a27',
                'bark-brown': '#5d4037',
                'leaf-green': '#2e7d32',
                'paint-neon': '#76ff03',
                'paint-yellow': '#ffd600',
                'paint-pink': '#f50057',
                'tactical-dark': '#1b1b1b',
                'tactical-gray': '#424242',
            },
        },
    },
    plugins: [],
}