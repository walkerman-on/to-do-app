import "./styles/App.css"
import React, { createContext } from "react"
import ToDo from "./components/ToDo"

export const RememberContext = createContext()

const App = () => {
	return (
		<RememberContext.Provider
			value={[
				{ text: "Сходить за покупками", id: 0 },
				{ text: "Убрать за котом", id: 1 },
				{ text: "Порешать задчи с CodeWars", id: 2 },
				{ text: "Подготовить сдачу лабораторной", id: 3 },
			]}
		>
			<ToDo />
		</RememberContext.Provider>
	)
}
export default App
