import { usePendulo } from "../hooks/usePendulo";

export function Pendulo({ id, children } : { id: string, children: React.ReactNode }) {
    const { state } = usePendulo(id)
    if (state.state) {
        return (
            <section style={{
                position: 'fixed',
                top: state.position?.clientY,
                left: state.position?.clientX,
                background: 'white',
                boxShadow: '0px 0px 4px #f3f4f6',
                padding: '8px 8px',
                borderRadius: '6px',
                border: '1px solid #f3f4f6'
            }}>
                {children}
            </section>
        )
    }
}