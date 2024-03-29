/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/**/*.{html,js}',
  ],
  theme: {
    extend: {},
    screens: {
      'desktop5' : {'max': '1500px'},
      'desktop4' : {'max': '1400px'},
      'desktop2' : {'max': '1200px'},
      'desktop3' : {'max': '1300px'},
      'desktop1' : {'max': '1100px'},
      'tab' : {'max': '1024px'},
      'responsivestart' : {'max': '1000px'},
      'mobile' : {'max': '800px'},
      'mobilesm' : {'max': '600px'},
      'mobilesupersmall' : {'max': '360px'},
    },
    colors: {
      'bluecolor' : '#124a6f',
      'bluestart' : '#104669',
      'blueend' : '#2673a2',
      'yellowcolor' : '#d9b510',
      'blackcolor' : '#1a1a1a',
      'whitecolor' : '#ffffff',
    },
    fontFamily: {
      'Frank' : ['Frank Ruhl Libre', 'serif'],
      'Poppins' : ['Poppins', 'sans-serif'],
    },
    fontSize: {
      'normaltext' : '20px',
      'headingtexts' : '50px',
      'mainh1' : '30px',
      'mainh1span' : '55px',
      'mainh1small' : '35px',
    },
    backgroundImage: {
      'hdr-icon': "url('/images/hdr-icon.png')",
    },
    keyframes: {
      fadIn: {
        '0%': { opacity: '0' },
        '100%': { opacity: '1', display: 'block' },
      },
      fadInRight: {
        'from': { opacity: '0' , transform: 'translate3d(100%, 0, 0)'},
        '100%': { opacity: '1', transform: 'none' },
      },
      fadInLeft: {
        'from': { opacity: '0' , transform: 'translate3d(-100%, 0, 0)'},
        '100%': { opacity: '1', transform: 'none' },
      },
      bounceInUp: {
        'from': { opacity: '0' , transform: 'translateY(400px)'},
        '60%': { transform: 'translateY(-30px)' },
        '80%': { transform: 'translateY(10px)' },
        '100%': { opacity: '1', transform: 'translateY(-50%)' },
      },
    },
    animation: {
      'animFadeIn': 'fadIn 3s linear',
      'animfadInRight': 'fadInRight 1s linear',
      'animfadInLeft': 'fadInLeft 1s linear',
      'animbounceInUp': 'bounceInUp 1s linear',
    },
  },
  plugins: [],
}
