/** @type {import('tailwindcss').Config} */
export default {
	content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
	theme: {
		extend: {
			backgroundColor: {
				main: 'white',
			},
		},
	},
	plugins: [require('@tailwindcss/line-clamp')],
}
