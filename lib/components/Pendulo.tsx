import { usePendulo } from "../hooks/usePendulo";

export function Pendulo({ id, children } : { id: string, children: React.ReactNode}) {
    const { visible } = usePendulo(id)

    if (visible) {
        return (
            <section>
                Hello world

                {children}
            </section>
        )
    }
}