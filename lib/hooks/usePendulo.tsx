import { useEffect, useState } from "react";
import { penduloObserverInstance } from './observer'
import { RESERVED } from "../static/static";

export function usePendulo(id: string) {
    const [visible, setVisible] = useState(false)
    
    useEffect(() => {
        penduloObserverInstance.subscribe(RESERVED.HIDE_ALL, setVisible)
        const unsubscribe = penduloObserverInstance.subscribe(id, setVisible)

        return () => {
            unsubscribe(RESERVED.HIDE_ALL, setVisible)
            unsubscribe(id, setVisible)
        }
        
    }, [id, setVisible])

    return {
        visible,
        setVisible
    }
}
