module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        "albert-sans": ["Albert Sans", "sans-serif"],
        "red-hat": ["Red Hat Text", "sans-serif"],
      },
    },
    plugins: [require("daisyui")],
    // daisyUI config (optional)
    daisyui: {
      styled: true,
      themes: true,
      base: true,
      utils: true,
      logs: true,
      rtl: false,
      prefix: "",
      darkTheme: "dark",
    },
  },
};
