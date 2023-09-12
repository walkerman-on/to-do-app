import React, { useState } from "react"
import { Input, Button, Space, Divider, message } from "antd"
import RememberList from "./RememberList"
import RememberForm from "./RememberForm"

const ToDo = () => {
	const [toDoItems, setToDoItems] = useState([
		{ text: "Сходить за покупками", id: 0 },
		{ text: "Убрать за котом", id: 1 },
		{ text: "Порешать задчи с CodeWars", id: 2 },
		{ text: "Подготовить сдачу лабораторной", id: 3 },
	])

	return (
		<div className="App">
			<nav
				style={{
					display: "flex",
					justifyContent: "flex-end",
					alignItems: "center",
					paddingBottom: "25px",
				}}
			>
				<Button size="small" type="primary" ghost>
					Сменить тему
				</Button>
			</nav>
			<RememberForm remember={toDoItems} pushRemember={setToDoItems} />
			<Divider orientation="center">To Do</Divider>
			<RememberList remember={toDoItems} setRemember={setToDoItems} />
		</div>
	)
}

export default ToDo
