import React, { useEffect, useContext } from 'react'
import axios from 'axios'

import { MainContext } from '../context/MainContext'

export default function App() {
	const { active, setActive } = useContext(MainContext)

	console.log((place) => place)

	return (
		<div>
			<h1>Hello</h1>

			<button
				className="button is-primary"
				onClick={() => setActive(!active)}
			>
				Show Modal работа
			</button>
		</div>
	)
}

// import {useState} from "react";
//
//
// const lorem = [
//     'Lorem', 'ipsum', 'dolor', 'sit', 'amet,', 'consectetur', 'adipisicing', 'elit.', 'Labore,', 'mollitia.',
// ]
//
// function useGenerateLorem() {
//     const [len, setLen] = useState(0)
//     const [text, setText] = useState([lorem[0]])
//
//     return {
//         text,
//         inc: () => setText([...text, ` ${text.length > lorem.length ? setLen(0) : text[len]}`]),
//         dec: () => setText(text.splice(0, text.length - 1))
//     }
// }
//
//
// function App() {
//     // const math = useCounter()
//     const lorem = useGenerateLorem()
//     return (
//         <div>
//             <p>{lorem.text}</p>
//
//             <button onClick={lorem.inc}>+</button>
//             <button onClick={lorem.dec}>-</button>
//
//             {/*<h1>{math.count}</h1>*/}
//
//             {/*  <button onClick={() => math.pow(2)}>**</button>*/}
//             {/*  <button onClick={() => math.sqrt(64)}>§</button>*/}
//         </div>
//     );
// }
//
// export default App;
//
//
// /* function useCounter() {
//     const [count, setCount] = useState(0)
//
//     return {
//         count,
//         pow: (num) => setCount(num ** 2),
//         sqrt: (num) => setCount(num ** 0.5),
//     }
// }*/
