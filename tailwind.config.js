/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ["./src/**/*.{js,jsx,ts,tsx}", "node_modules/flowbite-react/**/*.{js,jsx,ts,tsx}"],
    theme: {
        extend: {
            fontFamily: {
                ubuntu: ["Ubuntu", "sans-serif"],
                monoton: ["Monoton", "cursive", "Ubuntu", "sans-serif"],
            },
            colors: {
                "navy-900": "#231E41",
            },
        },
    },
daisyui: {
        themes: [
            {
                mytheme: {
                    primary: "#fecaca",
                },
            },
        ],
    },
    plugins: [require("daisyui", "flowbite/plugin")],
    
};
