import React from "react"
import { Layout, Button } from "antd"

const { Header } = Layout

const Navigation = () => {
	return (
		<Header
			style={{
				display: "flex",
				alignItems: "center",
				justifyContent: "flex-end",
			}}
		>
			<Button type="primary">Выйти</Button>
		</Header>
	)
}

export default Navigation
