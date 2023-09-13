import React from "react"
import { Layout } from "antd"

import Navigation from "./Navigation"
import Main from "./Main"

const { Footer } = Layout

const ToDo = () => {
	return (
		<Layout
			style={{
				display: "flex",
				minHeight: "100vh",
			}}
		>
			<Navigation />
			<Main />
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
