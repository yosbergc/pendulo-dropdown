import React, { cloneElement} from 'react'
import type { HandlerInfo } from '../hooks/observer';

interface ChildProps {
    darkMode?: boolean;
    [key: string]: unknown;
}


export function ItemsRender({ finalTheme, state, sectionRef, arrayElements, darkMode, offset, currentItem } : {
    finalTheme: string,
    state: HandlerInfo,
    sectionRef: React.RefObject<HTMLDivElement | null>,
    darkMode: boolean,
    offset: {
        width: number,
        height: number
    },
    currentItem: number,
    arrayElements?: React.ReactNode[]
    }) {

    return <section
        className={finalTheme} 
        style={{ top: state.position?.clientY - offset.height, left: state.position?.clientX - offset.width }} 
        ref={sectionRef} 
        hidden={!state.state}>
            {
                React.Children.map(arrayElements, (child, index) => {
                    if (React.isValidElement<ChildProps>(child)) {
                        return cloneElement(child, { darkMode, isCurrentSelected: index === currentItem, state })
                    }
                })
            }
    </section>
}