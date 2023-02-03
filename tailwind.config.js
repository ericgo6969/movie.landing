/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        "./pages/**/*.{js,ts,jsx,tsx}",
        "./components/**/*.{js,ts,jsx,tsx}",
        "./app/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {
            backgroundImage: {
                main: "url(/images/bg-main.jpeg)",
                section3: "url(/images/section3/background.jpeg)",
            },
            colors: {
                desc: "#878787",
                second: "#D9D9D9",
            },
            boxShadow: {
                section2: "0px 0px 8px rgb(0 0 0 / 25%)",
            },
        },
    },
    plugins: [],
};
