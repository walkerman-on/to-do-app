import "./styles/App.css"
import ToDo from "./components/ToDo.jsx"
import Layout from "./components/Layout.jsx"
import ThemeProvider from "./providers/ThemeProvider"

function App() {
	return (
		<ThemeProvider>
			<Layout>
				<ToDo />
			</Layout>
		</ThemeProvider>
	)
}

export default App
