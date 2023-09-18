import React, { useState } from "react"
import { Reorder } from "framer-motion"
import { Space, List, message, Result, Radio } from "antd"

const DeletedRemember = ({ remember, setRemember }) => {
	const [messageApi, contextHolder] = message.useMessage()

	return (
		<List size="medium" bordered>
			<Reorder.Group
				axis="y"
				values={remember}
				onReorder={setRemember}
				layoutScroll
				style={{ overflowY: "auto" }}
			>
				{remember.map((toDo) => {
					return (
						<Reorder.Item
							id={toDo.id}
							key={toDo.id}
							value={toDo}
							whileDrag={{
								boxShadow: "0px 0px 8px 6px rgba(34, 60, 80, 0.07)",
								borderRadius: "7px",
							}}
						>
							<List.Item
								style={{
									fontSize: "15px",
									cursor: "grab",
									background: "white",
									borderRadius: "7px",
								}}
							>
								<Space wrap size={10}>
									{contextHolder}
									{toDo.text}
								</Space>
							</List.Item>
						</Reorder.Item>
					)
				})}
			</Reorder.Group>
		</List>
	)
}

export default DeletedRemember
