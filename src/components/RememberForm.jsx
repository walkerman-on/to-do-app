import React, { useState } from "react"
import { Input, Button, Space, message } from "antd"

const RememberForm = ({ remember, pushRemember }) => {
	const [toDoInput, setToDoInput] = useState({
		status: true,
		text: "",
		id: null,
	})

	const [messageApi, contextHolder] = message.useMessage()

	const pushToDo = (e) => {
		e.preventDefault()
		setToDoInput({ ...toDoInput, text: "" })
		pushRemember([...remember, { text: toDoInput.text, id: Date.now() }])
		messageApi.open({
			type: "loading",
			content: "Добавлено в список",
			duration: 1,
		})
	}

	return (
		<Space.Compact style={{ display: "flex" }}>
			<Input
				placeholder="что нужно сделать"
				value={toDoInput.text}
				onChange={(e) => setToDoInput({ ...toDoInput, text: e.target.value })}
				onKeyPress={(e) =>
					toDoInput.text === "" ? "" : e.key === "Enter" ? pushToDo(e) : ""
				}
				size="small"
				style={{ flexGrow: "10", minWidth: "400px" }}
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
	)
}

export default RememberForm
