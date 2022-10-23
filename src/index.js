import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter, Routes, Route } from 'react-router-dom'

import Effect from './mistakes/Effect'
import UserDetail from './mistakes/UserDetail'
import Users from './mistakes/Users'

import 'bulma/css/bulma.min.css'
import './static/css/style.css'

const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(
	<BrowserRouter>
		<Routes>
			<Route path="/" element={<Effect />} exact />
			<Route path="/users" element={<Users />} exact />
			<Route path="/user/:id" element={<UserDetail />} exact />
		</Routes>
	</BrowserRouter>
)
