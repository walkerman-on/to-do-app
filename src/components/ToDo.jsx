import React from "react"
import { BrowserRouter } from "react-router-dom"
import { Layout, Menu, theme } from "antd"
import AppRouter from "./AppRouter"
import Navigation from "./Navigation"

const { Content, Sider, Footer } = Layout

const ToDo = () => {
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
			"Напоминания",
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
		<Layout
			style={{
				display: "flex",
				minHeight: "100vh",
			}}
		>
			<Navigation />
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
					<BrowserRouter>
						<AppRouter />
					</BrowserRouter>
				</Layout>
			</Content>
			<Footer
				style={{
					textAlign: "center",
					flexShrink: "0",
				}}
			>
				To Do App ©2023 Created by Alex Groshev
			</Footer>
		</Layout>
	)
}
export default ToDo
