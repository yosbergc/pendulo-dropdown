import { useEffect } from "react";
import type { HandlerInfo } from "./observer";
import { useMenu } from "./useMenu";

export function useKeyboard({ state } : { state: HandlerInfo }) {
    const { hideAll } = useMenu()
    const handleKeyDown = (event: KeyboardEvent) => {
            if (event.code === 'Escape') {
                hideAll()

                return '';
            }
    }
    
    useEffect(() => {
        
        if (state.state) {
            window.addEventListener('keydown', handleKeyDown)
        } else {
            window.removeEventListener('keydown', handleKeyDown)
        }

        return () => {
            window.removeEventListener('keydown', handleKeyDown)
        }
    }, [state, hideAll])    
}