import { useEffect, useCallback } from "react"
import type { HandlerInfo } from "./observer";
import { useMenu } from "./useMenu";

function useKeyCombination({ hidden, disabled, onKeyMatch, onClick, state } : 
    { 
        hidden: boolean, 
        onKeyMatch?: (event: KeyboardEvent) => boolean, 
        disabled: boolean,
        onClick?: (event?: React.MouseEvent<HTMLElement>) => void;
        state?: HandlerInfo
    }) {

    const { hideAll } = useMenu()
    const handleKeyCombination = useCallback((event: KeyboardEvent) => {
        if (!onKeyMatch || !onClick) return;
        
        const isCombinationPressed = onKeyMatch(event)
        
        if (isCombinationPressed) {
            event.preventDefault()
            onClick()
            hideAll()
        }
        
    }, [onKeyMatch, onClick, hideAll])

    useEffect(() => {
        if (state?.state && !disabled && onKeyMatch) {
            window.addEventListener('keydown', handleKeyCombination)
        } else {
            window.removeEventListener('keydown', handleKeyCombination)
        }

        return () => {
            window.removeEventListener('keydown', handleKeyCombination)
        }
    }, [hidden, disabled, onKeyMatch, handleKeyCombination, state])
}

export { useKeyCombination }