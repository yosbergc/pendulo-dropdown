import { useRef } from "react";
import { usePendulo } from "../hooks/usePendulo";
import { usePosition } from "../hooks/usePosition";
import { useToggleMenu } from "../hooks/useToggleMenu";
import { useKeyboard } from "../hooks/useKeyboard";
import { ItemsRender } from "./ItemsRender";
import { useItems } from "../lib/helpers";
import penduloStyle from './Pendulo.module.css'
import type { PenduloType } from "../types";

export function Pendulo({ id, children, darkMode = false } : PenduloType) {
    const sectionRef = useRef<HTMLDivElement | null>(null)
    const { state } = usePendulo(id)
    const { offset } = usePosition({ sectionRef, state })
    const { itemsIndex, arrayElements } = useItems(children)
    const { currentItem } = useKeyboard({ state, itemsIndex, arrayElements })
    const finalTheme = darkMode ? penduloStyle.penduloWrapperDark : penduloStyle.penduloWrapper
    
    useToggleMenu({ state });
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