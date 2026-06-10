import { useEffect, useCallback } from "react"
import { useMenu } from "./useMenu";
import type { KeyCombinationHook } from "../types";

function useKeyCombination({ hidden, disabled, onKeyMatch, onClick, state } : KeyCombinationHook ) {
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