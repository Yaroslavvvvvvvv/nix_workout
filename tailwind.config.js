/** @type {import('tailwindcss').Config} */
export default {
    content: [
        "./index.html",
        "./src/**/*.{vue,js,ts,jsx,tsx}",
        "./node_modules/flowbite/**/*.js",
    ],

    theme: {
        extend: {
            fontFamily: {
                libre: ['Libre Baskerville', 'serif'],
            },
            backgroundImage: {
                'bg_img': "url('./assets/images/about_img.jpg')"
            },
            extend: {
                'bg-bg_img': {
                    maxWidth: '100%',

                }
            }
        },
    },
    plugins: [require('tailwindcss-animated'),  require('flowbite/plugin')],
}

