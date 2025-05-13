// tailwind.config.js
/** @type {import('tailwindcss').Config} */
export default {
	content: ["./*.html"],
	theme: {
		extend: {
			colors: {
				blue: {
					50: "#EFF6FF",
					100: "#DBEAFE",
					200: "#BFDBFE",
					300: "#93C5FD",
					400: "#60A5FA",
					500: "#3B82F6",
					600: "#2563EB",
					700: "#1D4ED8",
					800: "#1E40AF",
					900: "#1E3A8A",
				},
			},
			fontFamily: {
				sans: ["Poppins", "system-ui", "sans-serif"],
			},
			spacing: {
				72: "18rem",
				80: "20rem",
				96: "24rem",
			},
			borderRadius: {
				xl: "1rem",
				"2xl": "1.5rem",
				"3xl": "2rem",
			},
		},
	},
	plugins: [],
};
