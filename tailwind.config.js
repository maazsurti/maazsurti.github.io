/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      fontFamily: {
        syne:   ['"Plus Jakarta Sans"', 'sans-serif'],
        outfit: ['"Inter"', 'sans-serif'],
        mono:   ['"DM Mono"', 'monospace'],
      },
      colors: {
        brand: {
          cyan:   '#0284c7',
          violet: '#7c3aed',
          pink:   '#db2777',
          green:  '#059669',
          base:   '#fafafc',
          surface:'#ffffff',
        },
      },
      animation: {
        'float':        'float 6s ease-in-out infinite',
        'pulse-glow':   'pulseGlow 4s ease-in-out infinite',
        'pulse-fast':   'pulseGlow 1.5s ease-in-out infinite',
        'spin-slow':    'spin 20s linear infinite',
        'spin-reverse': 'spinReverse 15s linear infinite',
        'gradient':     'gradientShift 4s linear infinite',
        'fade-in':      'fadeIn 0.25s ease both',
        'slide-up':     'slideUp 0.3s cubic-bezier(0.34,1.56,0.64,1) both',
        'scan':         'scanline 8s linear infinite',
      },
      keyframes: {
        float: {
          '0%,100%': { transform: 'translateY(0px) rotate(-2deg)' },
          '50%':     { transform: 'translateY(-18px) rotate(2deg)' },
        },
        pulseGlow: {
          '0%,100%': { opacity: '0.4' },
          '50%':     { opacity: '0.9' },
        },
        gradientShift: {
          '0%,100%': { backgroundPosition: '0% 50%' },
          '50%':     { backgroundPosition: '100% 50%' },
        },
        spinReverse: {
          from: { transform: 'rotate(0deg)' },
          to:   { transform: 'rotate(-360deg)' },
        },
        fadeIn: {
          from: { opacity: '0' },
          to:   { opacity: '1' },
        },
        slideUp: {
          from: { transform: 'translateY(40px) scale(0.97)', opacity: '0' },
          to:   { transform: 'translateY(0) scale(1)', opacity: '1' },
        },
        scanline: {
          '0%':   { transform: 'translateY(-100%)' },
          '100%': { transform: 'translateY(100vh)' },
        },
      },
      backgroundSize: {
        '200': '200% auto',
      },
    },
  },
  plugins: [],
}
