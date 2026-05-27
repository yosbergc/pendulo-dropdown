import { usePendulo } from "../hooks/usePendulo";
import { usePosition } from "../hooks/usePosition";
import { useToggleMenu } from "../hooks/useToggleMenu";
import React, { cloneElement, Children } from "react";
import { useRef } from "react";

interface ChildProps {
    darkMode?: boolean;
    [key: string]: unknown;
}
export function Pendulo({ id, children, darkMode = false } : { id: string, children: React.ReactNode, darkMode?: boolean }) {
    const { state } = usePendulo(id)
    const sectionRef = useRef<HTMLDivElement | null>(null)
    const { offset } = usePosition({ sectionRef, state })

    useToggleMenu({ state });
    
    return (
        <section style={{
            position: 'fixed',
            top: state.position?.clientY - offset.height,
            left: state.position?.clientX - offset.width,
            background: darkMode ? '#27272a' : 'white',
            boxShadow: '0px 0px 4px #f3f4f6',
            padding: '8px 8px',
            borderRadius: '6px',
            border: darkMode ? '1px solid #09090b' : '1px solid #f3f4f6',
        }} 
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