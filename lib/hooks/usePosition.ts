import { useState, useLayoutEffect, useEffect } from "react"
import type { HandlerInfo } from "./observer";

export function usePosition({ sectionRef, state } : { sectionRef: React.RefObject<HTMLDivElement | null>, state: HandlerInfo }) {
    const [screen, setScreen] = useState({
        width: window.innerWidth,
        height: window.innerHeight
    })
    const [offset, setOffset] = useState({
        width: 0,
        height: 0
    })
    
    useLayoutEffect(() => {
        if (sectionRef.current) {
            const elementWidth = sectionRef.current.offsetWidth
            const elementHeight = sectionRef.current.offsetHeight

            if (state.position?.clientX && state.position.clientX + elementWidth > screen.width) {
                setOffset((prevState) => {
                    return {...prevState, width: elementWidth}
                })
            }

            if (state.position?.clientY && state.position.clientY + elementHeight > screen.height) {
                setOffset((prevState) => {
                    return {...prevState, height: elementHeight}
                })
            }
        }
    }, [sectionRef, state, screen])

    useEffect(() => {
        const handleNewScreenSize = () => {
            setScreen({
                width: window.innerWidth,
                height: window.innerHeight
            })
        }

        window.addEventListener('resize', handleNewScreenSize)

        return () => {
            window.removeEventListener('resize', handleNewScreenSize)
        }
    }, [])
    return { offset }
}