import { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom'

function UserDetail() {
	const [user, setUser] = useState({})
	const { id: userId } = useParams()

	useEffect(() => {
		const controller = new AbortController()
		const signal = controller.signal
		fetch(`http://jsonplaceholder.typicode.com/users/${userId}`, { signal })
			.then((res) => res.json())
			.then((res) => {
				setUser(res)
			})
			.catch((err) => {
				if (err.name === 'AbortError') {
					console.log('successfully aborted')
				} else {
					console.log(err)
				}
			})

		return () => {
			controller.abort()
		}
	}, [userId])

	return (
		<div>
			{user && (
				<>
					<h1>Id: {user.id}</h1>
					<h1>User Name: {user.name}</h1>
				</>
			)}

			<Link to="/user/1">First user</Link>
			<br />
			<Link to="/user/2">Second user</Link>
			<br />
			<Link to="/user/3">Third user</Link>
		</div>
	)
}

export default UserDetail
