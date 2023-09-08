import "./styles/App.css"
import react, { useState } from "react"
import { Input, Button, Space } from "antd"
import { UserOutlined, QuestionOutlined } from "@ant-design/icons"

function App() {
	const [toDoInput, setToDoInput] = useState({ status: true, text: "" })

	const pushToDo = (e) => {
		e.preventDefault()
		setToDoInput({ ...toDoInput, text: "" })
		console.log(toDoInput.text)
	}

	return (
		<div className="App">
			<nav
				style={{
					display: "flex",
					justifyContent: "flex-end",
					paddingBottom: "25px",
				}}
			>
				<Button type="primary" ghost>
					Сменить тему
				</Button>
			</nav>
			<Space.Compact>
				<Input
					placeholder="что нужно сделать"
					value={toDoInput.text}
					onChange={(e) => setToDoInput({ ...toDoInput, text: e.target.value })}
					onKeyPress={(e) => (e.key === "Enter" ? pushToDo(e) : "")}
					size="large"
					style={{ minWidth: "400px" }}
				/>
				<Button
					type="primary"
					disabled={toDoInput.text === "" ? true : ""}
					onClick={pushToDo}
					size="large"
				>
					отправить
				</Button>
			</Space.Compact>
		</div>
	)
}

export default App
