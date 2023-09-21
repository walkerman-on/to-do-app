import React, { useState } from "react"
import { Layout, Divider } from "antd"
import DeletedRemember from "../components/DeletedRemember"

const { Content } = Layout

const Deleted = ({ deleted, setDeleted }) => {
	const [toDoItems, setToDoItems] = useState([
		{ text: "Сходить за покупками", id: 0 },
	])
	return (
		<Content
			style={{
				padding: "0 24px",
				minHeight: 280,
			}}
		>
			<Divider orientation="center">Сделано</Divider>
			<DeletedRemember remember={toDoItems} setRemember={setToDoItems} />
		</Content>
	)
}

export default Deleted
