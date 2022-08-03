module.exports = {
    purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
    darkMode: false, // or 'media' or 'class'
    theme: {
        extend: {
            backgroundImage: {
                'hero-bg': "url('/src/images/hero-bg.png')",
                med: "url('/src/images/med.png')",
                heart: "url('/src/images/heart.png')",
                'foo-vec': "url('/src/images/foo-vec.png')",
                'subs-vec': "url('/src/images/subs-vec.png')",
                'slider-img': "url('/src/images/slider-img.png')",
                breadcrumb: "url('/src/images/breadcrumb.png')",
                'appnt-vec1': "url('/src/images/appnt-vec1.png')"
            },
            fontFamily: {
                rubik: "'Rubik', sans-serif",
                roboto: "'Roboto', sans-serif"
            },
            colors: {
                'custom-black': '#0b114a',
                'custom-green': '#1ac167',
                'footer-blue': '#000a6d'
            }
        }
    },
    variants: {
        extend: {}
    },
    plugins: []
};
