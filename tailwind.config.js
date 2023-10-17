/** @type {import('tailwindcss').Config} */
export default {
    content: [
        "./index.html",
        "./src/**/*.{vue,js,ts,jsx,tsx}",
        "./node_modules/flowbite/**/*.js"
    ],
    theme: {
        extend: {
            fontFamily: {
                libre: ['Libre Baskerville', 'serif'],
            },
        },
    },
    plugins: [require('tailwindcss-animated'), require('flowbite/plugin')],
}

