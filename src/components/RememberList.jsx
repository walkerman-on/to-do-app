import React, { useState } from "react"
import { Reorder } from "framer-motion"
import { Space, List, message, Result, Radio } from "antd"

const ToDoList = ({ remember, setRemember }) => {
	const [messageApi, contextHolder] = message.useMessage()
	const [deleted, setDeleted] = useState([])

	const deleteToDo = (toDo) => {
		messageApi
			.open({
				type: "success",
				content: "Удаляем",
				duration: 0.5,
			})
			.then(() => message.success("Удалено", 1))
		setTimeout(() => {
			setRemember(remember.filter((item) => item.id !== toDo.id))
		}, 500)
		// setDeleted([...deleted, remember.find((item) => item.id === toDo.id)])
		console.log([...deleted, remember.find((item) => item.id === toDo.id)])
	}

	return (
		<List size="medium" bordered>
			{remember.length === 0 ? (
				<Result
					status="success"
					title="На сегодня дел нет, ты молодец!"
					subTitle="Чтобы добавить новое напоминание, заполни поле выше и нажми отправить "
				/>
			) : (
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
										<Radio onClick={() => deleteToDo(toDo)}></Radio>
										{toDo.text}
									</Space>
								</List.Item>
							</Reorder.Item>
						)
					})}
				</Reorder.Group>
			)}
		</List>
	)
}

export default ToDoList
