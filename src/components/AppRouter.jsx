import React from "react"
import { Routes, Route } from "react-router-dom"
import { privateRoutes } from "../routes/routes.js"
import All from "../pages/All.jsx"

const AppRouter = () => {
	return (
		<Routes>
			{privateRoutes.map((route) => (
				<Route path={route.path} element={route.element} key={route.path} />
			))}
			<Route path="/" element={<All />} />
		</Routes>
	)
}

export default AppRouter
