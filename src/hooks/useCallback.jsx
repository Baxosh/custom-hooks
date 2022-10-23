import {useCallback, useEffect, useMemo, useState} from 'react';


export default function App() {
    const [message, setMessage] = useState('Всем привет')
    const [count, setCount] = useState(0)

    const showMessage = useCallback(function(message) {
        console.log(message)
    }, [])

    // const memoValue = useMemo(() => showMessage(message), [message])

    useEffect(() => {
        showMessage(message + count)
    }, [message, showMessage, count])

    return (
        <div>
            <h1>{message}</h1>
            <button onClick={() => setCount(count + 1)}>Clicked {count} time</button>
        </div>
    )
}