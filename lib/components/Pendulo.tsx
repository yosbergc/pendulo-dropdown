import React, { useRef } from "react";
import { usePendulo } from "../hooks/usePendulo";
import { usePosition } from "../hooks/usePosition";
import { useToggleMenu } from "../hooks/useToggleMenu";
import { useKeyboard } from "../hooks/useKeyboard";
import { ItemsRender } from "./ItemsRender";
import { isItem, isHidden } from '../lib/helpers';
import penduloStyle from './Pendulo.module.css'

interface PenduloType {
    id: string
    children: React.ReactNode
    darkMode?: boolean
}

export function Pendulo({ id, children, darkMode = false } : PenduloType) {
    const { state } = usePendulo(id)
    const sectionRef = useRef<HTMLDivElement | null>(null)
    const { offset } = usePosition({ sectionRef, state })
    const finalTheme = darkMode ? penduloStyle.penduloWrapperDark : penduloStyle.penduloWrapper
    useToggleMenu({ state });
    const arrayElements = React.Children.toArray(children)
    const itemsIndex = arrayElements.map((child, index) => {
        if (React.isValidElement(child) && isItem(child) && !isHidden(child)) {
            return index
        }
    }).filter(child => child !== undefined)
    const { currentItem } = useKeyboard({ state, itemsIndex })
    
    return <ItemsRender 
        currentItem={currentItem}
        darkMode={darkMode}
        finalTheme={finalTheme}
        offset={offset}
        sectionRef={sectionRef}
        state={state}
        arrayElements={arrayElements}
    />
}