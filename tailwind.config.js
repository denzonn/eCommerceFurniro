/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: 'var(--primary)',
        primary_foregound: 'var(--primary-foreground)',
        secondary: 'var(--secondary)',
        secondary_foregound: 'var(--secondary-foreground)',
        primary_text: 'var(--primary-text)',
        primary_text_foregound: 'var(--primary-text-foreground)',
        secondary_text: 'var(--secondary-text)',
        secondary_text_foregound: 'var(--secondary-text-foreground)',
        bold_text: 'var(--bold_text)',
        admin: '#F1F5F9'
      },
    },
  },
  plugins: [],
}

