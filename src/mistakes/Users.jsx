import React, { useEffect, useState } from 'react'
import { useFetch, usePostRequest } from '../hooks/useRequest'

function Users() {
	const { data, loading, error, request } = useFetch({ url: 'todos' })
	const todoCreate = usePostRequest({ url: 'todos' })
	const [value, setValue] = useState('')

	async function handleSubmit(event) {
		event.preventDefault()
		const { success } = await todoCreate.request({
			body: JSON.stringify({
				title: value,
				completed: false,
				description_for_todo: '123321',
			}),
		})

		if (success) {
			event.target.reset()
			request()
		}
	}

	console.log('hi')

	return (
		<div className="container">
			<div className="columns">
				<div className="column box is-flex is-flex-direction-column is-align-items-center">
					{loading && <h1>Loading...</h1>}
					{error && <h1>Error !!!</h1>}
					{data &&
						data.map((user) => (
							<h1 className="title" key={user.id}>
								{user.title}
							</h1>
						))}
				</div>

				<div className="column box is-flex is-flex-direction-column is-align-items-center is-justify-content-center mb-5 ml-4">
					<form onSubmit={(e) => handleSubmit(e)}>
						<div className="field box">
							<label className="label">Title</label>
							<div className="control">
								<input
									className="input"
									value={value}
									onInput={(e) => setValue(e.target.value)}
									type="text"
									placeholder="Todo title..."
								/>
							</div>
						</div>

						<div className="box">
							<label className="checkbox">
								<input type="checkbox" /> &nbsp; Completed
							</label>
						</div>
						<br />
						<button
							className="button is-primary column is-12 p-0"
							type="submit"
						>
							Send
						</button>
					</form>
				</div>
			</div>
		</div>
	)

	// const [todos, setTodos] = useState([])

	// useEffect(() => {
	// 	const controller = new AbortController()
	// 	const signal = controller.signal
	// 	fetch('http://localhost:8000/todos', { signal })
	// 		.then((res) => res.json())
	// 		.then((res) => {
	// 			setTodos(res)
	// 		})
	// 		.catch((err) => console.log(err))

	// 	return () => {
	// 		controller.abort()
	// 	}
	// }, [])

	// console.log(todos)

	// return (
	// 	<div>
	// 		{todos.length > 0 &&
	// 			todos.map((user) => <h1 key={user.id}>{user.title}</h1>)}
	// 	</div>
	// )
}

export default Users
