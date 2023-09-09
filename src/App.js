import "./styles/App.css"
import React from "react"
import { useState } from "react"
import {
	Input,
	Button,
	Avatar,
	Space,
	Divider,
	List,
	Checkbox,
	message,
} from "antd"
import { UserOutlined } from "@ant-design/icons"

function App() {
	const [toDoInput, setToDoInput] = useState({
		status: true,
		text: "",
		id: null,
	})
	const [toDoItems, setToDoItems] = useState([
		"Сходить за покупками",
		"Убрать за котом",
		"Порешать задчи с CodeWars",
		"Подготовить сдачу лабораторной",
	])

	const pushToDo = (e) => {
		e.preventDefault()
		setToDoInput({ ...toDoInput, text: "" })
		setToDoItems([...toDoItems, toDoInput.text])
		messageApi.open({
			type: "success",
			content: "Добавлено в список",
			duration: 1,
		})
	}

	const deleteToDo = (e) => {
		e.preventDefault()
	}
	const [messageApi, contextHolder] = message.useMessage()

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

			<Space.Compact>
				<Input
					placeholder="что нужно сделать"
					value={toDoInput.text}
					onChange={(e) => setToDoInput({ ...toDoInput, text: e.target.value })}
					onKeyPress={(e) => (e.key === "Enter" ? pushToDo(e) : "")}
					size="small"
					style={{ minWidth: "400px" }}
				/>
				{contextHolder}
				<Button
					type="primary"
					disabled={toDoInput.text === "" ? true : ""}
					onClick={pushToDo}
					size="medium"
				>
					отправить
				</Button>
			</Space.Compact>
			<Divider orientation="center">To Do</Divider>
			<List
				size="medium"
				bordered
				dataSource={toDoItems}
				renderItem={(item) => (
					<List.Item style={{ fontSize: "15px" }}>
						<Space wrap size={10}>
							<Checkbox></Checkbox>
							{item}
						</Space>
					</List.Item>
				)}
			/>
		</div>
	)
}

export default App
