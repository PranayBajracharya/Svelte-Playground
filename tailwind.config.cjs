/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ['./src/**/*.{html,js,svelte,ts}'],
	theme: {
		extend: {
			colors: {
				primary: '#ff3e00',
				text: '#ffffffcc',
				1: '#1f2022'
			}
		}
	},
	plugins: []
};
