import React, { useState, createContext } from "react"

const ThemeContext = createContext({ type: "light" })

const ThemeProvider = ({ children }) => {
	const [theme, setTheme] = useState("light")

	return (
		<ThemeContext.Provider value={{ theme, setTheme }}>
			{children}
		</ThemeContext.Provider>
	)
}

export default ThemeProvider
