import { usePendulo } from "../hooks/usePendulo";
import { usePosition } from "../hooks/usePosition";
import { useToggleMenu } from "../hooks/useToggleMenu";
import { useRef } from "react";

export function Pendulo({ id, children } : { id: string, children: React.ReactNode }) {
    const { state } = usePendulo(id)
    const sectionRef = useRef<HTMLDivElement | null>(null)
    const { offset } = usePosition({ sectionRef, state })

    useToggleMenu({ state });
    
    return (
        <section style={{
            position: 'fixed',
            top: state.position?.clientY - offset.height,
            left: state.position?.clientX - offset.width,
            background: 'white',
            boxShadow: '0px 0px 4px #f3f4f6',
            padding: '8px 8px',
            borderRadius: '6px',
            border: '1px solid #f3f4f6',
        }} 
        ref={sectionRef} 
        hidden={!state.state}>
            {children}
        </section>
    )
}