import { useEffect, useState, useCallback } from "react";
import type { HandlerInfo } from "./observer";
import { useMenu } from "./useMenu";

export function useKeyboard({ state, itemsIndex, onEnter } : { state: HandlerInfo, itemsIndex: number[], onEnter: () => void }) {
    const { hideAll } = useMenu()
    const [currentItem, setCurrentItem] = useState(-1)

    const handleKeyDown = useCallback((event: KeyboardEvent) => {
            if (event.code === 'Escape') {
                hideAll()

                return '';
            }

            if (event.code === 'ArrowDown') {
                
                setCurrentItem(previousItem => {
                    if (itemsIndex.length > previousItem) {
                        const index = itemsIndex.indexOf(previousItem)
                        return itemsIndex[index + 1]
                    }

                    return previousItem;
                })
            }

            if (event.code === 'ArrowUp') {
                setCurrentItem(previousItem => {
                    const index = itemsIndex.indexOf(previousItem)
                    if (index === 0 || index === -1) {
                        return previousItem
                    }
                    
                    return itemsIndex[index - 1]
                })
            }

            if (event.code === 'Enter' && currentItem !== -1) {
                event.preventDefault()

                onEnter()
            }
            
    }, [hideAll, itemsIndex, currentItem, onEnter])

    useEffect(() => {
        if (!state.state) {
            // eslint-disable-next-line react-hooks/set-state-in-effect
            setCurrentItem(-1)
        }
    }, [state.state])

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