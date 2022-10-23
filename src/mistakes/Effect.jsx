import { Link } from 'react-router-dom'

export default function Effect() {
	return <Link to="/users">Go to Users</Link>
}

// 2

// import React, {useEffect, useState} from 'react';

// function Effect() {
// const [number, setNumber] = useState(0)
// useEffect(() => {
//     console.log('first')
//     const interval = setInterval(() => {
//         setNumber(prev => prev + 1)
//     }, 1000)
//     console.log('second')
//     return () => {
//         clearInterval(interval) // clean up
//     }
// }, [])
// console.log('third')
// return (
//     <div>
{
	/*<h1>{number}</h1>*/
}
//     </div>
// );
// }
//
// export default Effect;

// 1

// import {useEffect, useMemo, useState} from 'react';
//
//
// export default function Effect() {
//     const [value, setValue] = useState('')
//     const [name, setName] = useState({name: '', selected: false})
//
//     const memoName = useMemo(() => {
//         return name
//     }, [name.name, name.selected])
//
//     useEffect(() => {
//         console.log(`Counter: ${name.name}`)
//     }, [memoName])
//
//     return (
//         <div style={{display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center'}}>
//
//             <input type="text" onChange={({target: { value }}) => setValue(value)}/>
//
//             <button
//                 onClick={() => setName(prev => ({...prev, name: value}))}
//             >
//                 Change selected
//             </button>
//
//             <button
//                 onClick={() => setName(prev => ({...prev, selected: !prev.selected}))}
//             >
//                 Change selected
//             </button>
//             <br />
//             <h1>Name: {name.name}</h1>
//             <h1>Selected: {`${name.selected}`}</h1>
//         </div>
//     )
// }
