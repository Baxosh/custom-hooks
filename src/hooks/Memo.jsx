import { useState, useMemo } from 'react'

function computeExpensiveValue(a) {
    console.log('expensive function')
	let i = 0
	while (i < 1000000000) i++
	return a
}

export default function Memo() {
    const [a, setA] = useState(0)
    const [color, setColor] = useState('danger')

    const memoizedValue = useMemo(() => computeExpensiveValue(a), [a])

    return (
        <div>
            <h1 className={`title has-text-${color}`}>
				The color is:{memoizedValue}
			</h1>

			<button
				className="button is-primary"
				onClick={() => setA((prev) => prev + 1)}
			>
				+
			</button>
            &nbsp;&nbsp;&nbsp;
			<button
				className="button is-primary"
				onClick={() => setA((prev) => prev - 1)}
			>
				-
			</button>
            <br />
            <br />
			<button
				className="button is-info"
				onClick={() => setColor(color === 'danger' ? 'success' : 'danger')}
			>
				Change color
			</button>
        </div>
    )
}

// function Counter() {
// 	const [count, setCount] = useState(0)

// useEffect(() => {
// 	const id = setInterval(() => {
// 		console.log()
// 		setCount(count => count + 1) // Этот эффект зависит от переменной состояния `count`
// 	}, 1000)
// 	return () => clearInterval(id)
// }, []) // 🔴 Баг: `count` не указан в качестве зависимости

// 	return <h1>{count}</h1>
// }

// function Counter({ initialCount }) {
// 	const [count, setCount] = useState(+initialCount)
// 	console.log(count)
// 	return (
// 		<>
// 			{/* Счёт: {count} */}
// 			<button onClick={() => setCount(initialCount)}>Сбросить</button>
// 			<button
// 				onClick={() =>
// 					setCount((prev, next) => {
// 						prev -= 1
// 						return { ...prev, ...next }
// 					})
// 				}
// 			>
// 				-
// 			</button>
// 			<button onClick={() => setCount((prevCount) => prevCount + 1)}>
// 				+
// 			</button>
// 		</>
// 	)
// }
