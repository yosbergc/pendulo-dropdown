import React, { cloneElement, Children, useRef } from "react";
import { usePendulo } from "../hooks/usePendulo";
import { usePosition } from "../hooks/usePosition";
import { useToggleMenu } from "../hooks/useToggleMenu";
import { useKeyboard } from "../hooks/useKeyboard";
import penduloStyle from './Pendulo.module.css'

interface ChildProps {
    darkMode?: boolean;
    [key: string]: unknown;
}

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
    useKeyboard({ state })
    
    return (
        <section
        className={finalTheme} 
        style={{ top: state.position?.clientY - offset.height, left: state.position?.clientX - offset.width }} 
        ref={sectionRef} 
        hidden={!state.state}>
            {Children.map(children, (child: React.ReactNode) => {
                if (React.isValidElement<ChildProps>(child)) {
                    return cloneElement(child, { darkMode: darkMode })
                }
            })}
        </section>
    )
}