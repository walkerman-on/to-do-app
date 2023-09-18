import React, { useState } from "react"
import { Layout, Menu, theme, Divider } from "antd"

import RememberForm from "./RememberForm"
import RememberList from "./RememberList"

const { Content, Sider } = Layout

const Main = () => {
	const [toDoItems, setToDoItems] = useState([
		{ text: "Сходить за покупками", id: 0 },
		{ text: "Убрать за котом", id: 1 },
		{ text: "Порешать задчи с CodeWars", id: 2 },
		{ text: "Подготовить сдачу лабораторной", id: 3 },
	])

	const onClick = (e) => {
		console.log("click ", e)
	}

	function getItem(label, key, icon, children, type) {
		return {
			key,
			icon,
			children,
			label,
			type,
		}
	}

	const items = [
		getItem(
			"Мои списки",
			"grp",
			null,
			[
				getItem("Все", "1"),
				getItem("Завершенные", "2"),
				getItem("Срочные", "3"),
			],
			"group"
		),
	]

	const {
		token: { colorBgContainer },
	} = theme.useToken()
	return (
		<Content
			style={{
				padding: "0 50px",
				display: "flex",
			}}
		>
			<Layout
				style={{
					padding: "24px 0",
					background: colorBgContainer,
				}}
			>
				<Sider
					style={{
						background: colorBgContainer,
					}}
					width={200}
				>
					<Menu
						onClick={onClick}
						style={{ height: "100%" }}
						defaultSelectedKeys={["1"]}
						defaultOpenKeys={["sub1"]}
						mode="inline"
						items={items}
					/>
				</Sider>
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
			</Layout>
		</Content>
	)
}

export default Main
