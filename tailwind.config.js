/** @type {import('tailwindcss').Config} */
import daisyui from 'daisyui'
export default {
	content: ['./index.html', './src/**/*.{js,jsx}'],
	theme: {
		extend: {
			backgroundImage: {
				protfile: "url('./Images/IMG20240527135756')",
			},
		},
	},
	plugins: [daisyui],
	daisyui: {
		themes: ['light', 'dark', 'retro', 'nord', 'winter'],
	},
}
