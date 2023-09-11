import React, { useState } from "react"
import { Input, Button, Space, Divider, List, Checkbox, message } from "antd"

const ToDo = () => {
	const [toDoInput, setToDoInput] = useState({
		status: true,
		text: "",
		id: null,
	})

	const [toDoItems, setToDoItems] = useState([
		{ text: "Сходить за покупками", id: 1 },
		{ text: "Убрать за котом", id: 2 },
		{ text: "Порешать задчи с CodeWars", id: 3 },
		{ text: "Подготовить сдачу лабораторной", id: 4 },
	])

	const pushToDo = (e) => {
		e.preventDefault()
		setToDoInput({ ...toDoInput, text: "" })
		setToDoItems([...toDoItems, { text: toDoInput.text, id: Date.now() }])
		console.log([...toDoItems, { text: toDoInput.text, id: Date.now() }])
		messageApi.open({
			type: "success",
			content: "Добавлено в список",
			duration: 1,
		})
	}

	const deleteToDo = (e) => {
		e.preventDefault()
		// setToDoItems(toDoItems.filter((item, id) => item.id === id))
		// console.log(setToDoItems(toDoItems.filter((item, id) => item.id !== id)))
		console.log(toDoItems.filter((item, id) => item.id !== id))
		// console.log(...toDoItems.map((item) => item.id))
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
					onKeyPress={(e) =>
						toDoInput.text === "" ? "" : e.key === "Enter" ? pushToDo(e) : ""
					}
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
			{/* <List
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
			/> */}
			<List size="medium" bordered>
				{toDoItems.map((item) => {
					return (
						<List.Item style={{ fontSize: "15px" }} id={item.id} key={item.id}>
							<Space wrap size={10}>
								<Checkbox></Checkbox>
								<Button onClick={deleteToDo}>удалить</Button>
								{item.text} {item.id}
							</Space>
						</List.Item>
					)
				})}
			</List>
		</div>
	)
}

export default ToDo
