import React, { useState } from "react"
import {
	Input,
	Button,
	Space,
	Divider,
	List,
	Checkbox,
	message,
	Result,
	Radio,
} from "antd"

const ToDo = () => {
	const [toDoInput, setToDoInput] = useState({
		status: true,
		text: "",
		id: null,
	})

	const [toDoItems, setToDoItems] = useState([
		{ text: "Сходить за покупками", id: 0 },
		{ text: "Убрать за котом", id: 1 },
		{ text: "Порешать задчи с CodeWars", id: 2 },
		{ text: "Подготовить сдачу лабораторной", id: 3 },
	])

	const pushToDo = (e) => {
		e.preventDefault()
		setToDoInput({ ...toDoInput, text: "" })
		setToDoItems([...toDoItems, { text: toDoInput.text, id: Date.now() }])
		console.log([...toDoItems, { text: toDoInput.text, id: Date.now() }])
		messageApi.open({
			type: "loading",
			content: "Добавлено в список",
			duration: 1,
		})
	}

	const deleteToDo = (toDo) => {
		messageApi
			.open({
				type: "success",
				content: "Удаляем",
				duration: 1,
			})
			.then(() => message.success("Удалено", 2.5))
		setTimeout(() => {
			setToDoItems(toDoItems.filter((item) => item.id !== toDo.id))
		}, 1000)
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
			<List size="medium" bordered>
				{toDoItems.length === 0 ? (
					<Result
						status="success"
						title="На сегодня дел нет, ты молодец!"
						subTitle="Чтобы добавить новое напоминание, заполни поле выше и нажми отправить "
					/>
				) : (
					toDoItems.map((toDo) => {
						return (
							<List.Item
								style={{ fontSize: "15px" }}
								id={toDo.id}
								key={toDo.id}
							>
								<Space wrap size={10}>
									{contextHolder}
									<Radio onClick={() => deleteToDo(toDo)}></Radio>
									{toDo.text}
								</Space>
							</List.Item>
						)
					})
				)}
			</List>
		</div>
	)
}

export default ToDo
