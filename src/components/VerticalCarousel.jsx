import React, { useState, useRef, useEffect } from 'react'

const data = Array(10)
    .fill('Hello')
    .map((item, index) => ({ id: index, name: item }))

export default function VerticalCarousel() {
    const boxRef = useRef(null)
    const [isVisible, setIsVisible] = useState(false)

    const callbackFunction = (entries) => {
        console.log(entries)
        const [entry] = entries
        setIsVisible(entry.isIntersecting)
    }

    // eslint-disable-next-line react-hooks/exhaustive-deps
    const options = {
        rootMargin: '0px',
        threShold: 1,
    }

    useEffect(() => {
        console.log(boxRef)
        const observer = new IntersectionObserver(callbackFunction, options)
        if (boxRef.current) observer.observe(boxRef.current)
        return () => {
            // eslint-disable-next-line react-hooks/exhaustive-deps
            if (boxRef.current) observer.unobserve(boxRef.current)
        }
    }, [boxRef, options])

    return (
        <div className="carousel-container">
            {data.map(({ id, name }) => (
                <div
                    ref={boxRef}
                    key={id}
                    className="carousel-box is-flex is-flex-direction-column is-align-items-center is-justify-content-center"
                >
                    <h1 className="title">
                        {name} {id} {isVisible}
                    </h1>
                    <div id={id} className="secret-box"></div>
                </div>
            ))}
        </div>
    )
}
