/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        "./index.html",
        "./src/**/*.{vue,js,ts,jsx,tsx}",
        "./src/assets/main.css",
    ],
    theme: {
        extend: {
            colors: {
                'paypal-blue': '#003087',
                'paypal-blue-dark': '#003087',
                'paypal-blue-light': '#009cde',
                'paypal-yellow': '#ffc439',
                'paypal-yellow-dark': '#ffb800',
                'paypal-navy': '#001435',
                'paypal-gray': '#687173',
                'paypal-gray-light': '#f5f7fa',
                'paypal-gray-dark': '#2c2e2f',
                'paypal-50': '#f9fafb',
                'paypal-100': '#f3f4f6',
                'paypal-200': '#e5e7eb',
                'paypal-300': '#d1d5db',
                'paypal-400': '#9ca3af',
                'paypal-500': '#6b7280',
                'paypal-600': '#4b5563',
                'paypal-700': '#374151',
                'paypal-800': '#1f2937',
                'paypal-900': '#111827'
            },
            fontFamily: {
                'paypal': ['PayPalSansSmall', 'Helvetica Neue', 'Arial', 'sans-serif'],
                'sans': ['Open Sans', 'Helvetica Neue', 'Arial', 'sans-serif']
            },
            fontSize: {
                'hero': ['3.5rem', { lineHeight: '1.1', fontWeight: '400' }],
                'hero-lg': ['4rem', { lineHeight: '1.1', fontWeight: '400' }],
                'hero-xl': ['4.5rem', { lineHeight: '1.1', fontWeight: '400' }],
                'section': ['2.5rem', { lineHeight: '1.2', fontWeight: '400' }],
                'section-lg': ['3rem', { lineHeight: '1.2', fontWeight: '400' }],
                'section-xl': ['3.5rem', { lineHeight: '1.2', fontWeight: '400' }]
            },
            spacing: {
                '18': '4.5rem',
                '88': '22rem',
                '128': '32rem'
            },
            animation: {
                'slide-down': 'slide-down 0.2s ease-out',
                'fade-in': 'fade-in 0.3s ease-out',
                'float': 'float 3s ease-in-out infinite',
                'pulse-slow': 'pulse 3s cubic-bezier(0.4, 0, 0.6, 1) infinite'
            },
            keyframes: {
                'slide-down': {
                    '0%': {
                        opacity: '0',
                        transform: 'translateY(-10px)'
                    },
                    '100%': {
                        opacity: '1',
                        transform: 'translateY(0)'
                    }
                },
                'fade-in': {
                    '0%': {
                        opacity: '0',
                        transform: 'translateY(10px)'
                    },
                    '100%': {
                        opacity: '1',
                        transform: 'translateY(0)'
                    }
                },
                'float': {
                    '0%, 100%': {
                        transform: 'translateY(0px)'
                    },
                    '50%': {
                        transform: 'translateY(-10px)'
                    }
                }
            },
            boxShadow: {
                'paypal': '0 4px 6px -1px rgba(0, 112, 186, 0.1), 0 2px 4px -1px rgba(0, 112, 186, 0.06)',
                'paypal-lg': '0 10px 15px -3px rgba(0, 112, 186, 0.1), 0 4px 6px -2px rgba(0, 112, 186, 0.05)',
                'paypal-xl': '0 20px 25px -5px rgba(0, 112, 186, 0.1), 0 10px 10px -5px rgba(0, 112, 186, 0.04)'
            }
        },
    },
    plugins: [],
} 