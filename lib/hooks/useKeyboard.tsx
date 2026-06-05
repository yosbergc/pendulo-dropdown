import { useEffect, useState, useCallback } from "react";
import type { HandlerInfo } from "./observer";
import { useMenu } from "./useMenu";

export function useKeyboard({ state } : { state: HandlerInfo }) {
    const { hideAll } = useMenu()
    const [currentItem, setCurrentItem] = useState(-1)
    const handleKeyDown = useCallback((event: KeyboardEvent) => {
            if (event.code === 'Escape') {
                hideAll()

                return '';
            }

            if (event.code === 'ArrowDown') {
                setCurrentItem(previousItem => previousItem + 1)
            }

            if (event.code === 'ArrowUp') {
                setCurrentItem(previousItem => previousItem - 1)
            }
            
    }, [])
    
    useEffect(() => {
        if (state.state) {
            window.addEventListener('keydown', handleKeyDown)
        } else {
            window.removeEventListener('keydown', handleKeyDown)
        }

        return () => {
            window.removeEventListener('keydown', handleKeyDown)
        }
    }, [state, hideAll, handleKeyDown])

    return { currentItem }
}