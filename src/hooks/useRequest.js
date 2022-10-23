import { useEffect, useState } from 'react'

function useRequest({ url, options = {} }) {
	const isDisconnected = window.navigator.onLine
	const [data, setData] = useState(null)
	const [loading, setLoading] = useState(true)
	const [error, setError] = useState(null)

	if (!isDisconnected) {
		alert('Network error. Check your internet connection !')
		return { data, loading, error }
	}
	// console.log(url)
	// console.log(options)
	const BASE_URL = process.env.REACT_APP_BASE_URL

	async function request(overrideOptions = {}) {
		setLoading(true)

		const response = await fetch(BASE_URL + url, {
			headers: {
				'Content-Type': 'application/json;charset=utf-8',
			},
			...options,
			...overrideOptions,
		})

		try {
			if (!response.ok) {
				throw response
			}
			const data = await response.json()
			setData(data)
			return { response: data, success: true }
		} catch (e) {
			setError(e)
			console.log('Error: ', e)

			if (e.status >= 500) {
				alert('Ошибка сервера.', 'is-danger')
			} else if (e.status === 401) {
				// signOut(history) // TODO: signOut func for logout
			}
			return { error: e, success: false }
		} finally {
			setLoading(false)
		}
	}

	return { data, loading, error, request }
}

export function useFetch({ url, options, dependencies = [] }) {
	const controller = new AbortController()
	const signal = controller.signal
	const request = useRequest({ url, options: { signal, ...options } })

	useEffect(() => {
		if (!request.request) {
			return
		}
		request.request()

		return () => {
			controller.abort()
		}
	}, dependencies)

	return request
}

export function usePostRequest({ url, options = {} }) {
	return useRequest({ url, options: { method: 'POST', ...options } })
}
