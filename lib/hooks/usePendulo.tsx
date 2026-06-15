'use client'
import { useEffect, useState } from "react";
import { penduloObserverInstance } from './observer'
import { RESERVED } from "../static/static";
import type { HandlerInfo } from "../types";

export function usePendulo(id: string) {
    const [state, setState] = useState<HandlerInfo>({
        state: false,
        position: {
            clientX: 0,
            clientY: 0
        }
    })
    
    useEffect(() => {
        penduloObserverInstance.subscribe(RESERVED.HIDE_ALL, setState)
        const unsubscribe = penduloObserverInstance.subscribe(id, setState)

        return () => {
            unsubscribe(RESERVED.HIDE_ALL, setState)
            unsubscribe(id, setState)
        }
        
    }, [id, setState])

    return {
        state,
        setState
    }
}
