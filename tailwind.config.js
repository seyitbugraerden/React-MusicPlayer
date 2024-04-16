/** @type {import('tailwindcss').Config} */
export default {
  mode: "jit", //just-in-time demektir. Gereksiz css'leri ayıklar.
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {},
  },
  plugins: [],
};
