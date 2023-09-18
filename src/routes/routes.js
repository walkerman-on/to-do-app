import React from "react"
import Deleted from "../pages/Deleted.jsx"
import Urgent from "../pages/Urgent.jsx"
import All from "../pages/All.jsx"

export const privateRoutes = [
	{ path: "/all", element: <All /> },
	{ path: "/deleted", element: <Deleted /> },
	{ path: "/urgent", element: <Urgent /> },
]

// export const publicRoutes = [
// 	{ path: "/login", element: <Login /> },
// 	{ path: "/about", element: <About /> },
// ]
