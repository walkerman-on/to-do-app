import React, { useState, useContext } from "react"
import { Layout, Divider } from "antd"
import RememberForm from "../components/RememberForm"
import RememberList from "../components/RememberList"
import { RememberContext } from "../App"

const { Content } = Layout

const All = () => {
	const data = useContext(RememberContext)
	const [toDoItems, setToDoItems] = useState(data)
	return (
		<Content
			style={{
				padding: "0 24px",
				minHeight: 280,
			}}
		>
			<RememberForm remember={toDoItems} pushRemember={setToDoItems} />
			<Divider orientation="center">Все</Divider>
			<RememberList remember={toDoItems} setRemember={setToDoItems} />
		</Content>
	)
}

export default All
