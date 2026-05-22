import { usePendulo } from "../hooks/usePendulo";

export function Pendulo({ id, children } : { id: string, children: React.ReactNode }) {
    const { visible } = usePendulo(id)

    if (visible) {
        return (
            <section style={{
                background: 'white',
                boxShadow: '0px 0px 8px rgba(0, 0, 0, 0.2)',
                padding: '16px 16px',
                borderRadius: '4px'
            }}>
                {children}
            </section>
        )
    }
}