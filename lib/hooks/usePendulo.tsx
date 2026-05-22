import { useEffect, useState } from "react";
import { penduloObserverInstance } from './observer'
export function usePendulo(id: string) {
    const [visible, setVisible] = useState(false)
    useEffect(() => {
        const unsubscribe = penduloObserverInstance.subscribe(id, setVisible)

        return () => {
            unsubscribe()
        }
    }, [id, setVisible])

    return {
        visible,
        setVisible
    }
}
