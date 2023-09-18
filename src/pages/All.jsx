import React, { useState } from "react"
import { Layout, Divider } from "antd"
import RememberForm from "../components/RememberForm"
import RememberList from "../components/RememberList"

const { Content } = Layout

const All = () => {
	const [toDoItems, setToDoItems] = useState([
		{ text: "Сходить за покупками", id: 0 },
		{ text: "Убрать за котом", id: 1 },
		{ text: "Порешать задчи с CodeWars", id: 2 },
		{ text: "Подготовить сдачу лабораторной", id: 3 },
	])

	return (
		<Content
			style={{
				padding: "0 24px",
				minHeight: 280,
			}}
		>
			<RememberForm remember={toDoItems} pushRemember={setToDoItems} />
			<Divider orientation="center">To Do</Divider>
			<RememberList remember={toDoItems} setRemember={setToDoItems} />
		</Content>
	)
}

export default All
