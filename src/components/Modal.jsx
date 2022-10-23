import React, {useContext} from 'react'

import {MainContext} from '../context/MainContext'


export function Modal() {
    const {active, setActive} = useContext(MainContext)

    const status = active ? 'is-active' : null

    function handleClose() {
        if (!active) return alert('First open Modal')

        setActive(!active)
    }

    return (
        <div className={`modal ${status}`}>
            <div className="modal-background" onClick={handleClose} />

            <div className="modal-content box">
                <h1 className="has-text-centered">Hello</h1>
            </div>

            <button className="modal-close is-large" aria-label="close" onClick={handleClose} />
        </div>
    )
}