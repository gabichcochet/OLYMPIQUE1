/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      animation: {
        'fade-in': 'fadeIn 0.6s ease-out forwards',
        'fade-up': 'fadeUp 0.8s cubic-bezier(.16,.84,.44,1) forwards',
        'glow-pulse': 'glowPulse 3s ease-in-out infinite',
      },
      keyframes: {
        fadeIn: {
          from: { opacity: '0', transform: 'translateY(12px)' },
          to: { opacity: '1', transform: 'translateY(0)' },
        },
        fadeUp: {
          from: { opacity: '0', transform: 'translateY(20px)' },
          to: { opacity: '1', transform: 'translateY(0)' },
        },
        glowPulse: {
          '0%, 100%': { boxShadow: '0 0 0px rgba(59,130,246,0.0)' },
          '50%': { boxShadow: '0 0 20px rgba(59,130,246,0.25)' },
        },
      },
      boxShadow: {
        'card-jo': '0 8px 30px rgba(0,0,0,0.06)',
        'card-jo-hover': '0 12px 40px rgba(0,0,0,0.12)',
        'card-shadow': '0 12px 40px rgba(0,0,0,0.08)',
      }
    },
  },
  plugins: [],
};
