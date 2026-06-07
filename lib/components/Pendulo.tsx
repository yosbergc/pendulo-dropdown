import React, { useRef } from "react";
import { usePendulo } from "../hooks/usePendulo";
import { usePosition } from "../hooks/usePosition";
import { useToggleMenu } from "../hooks/useToggleMenu";
import { useKeyboard } from "../hooks/useKeyboard";
import { ItemsRender } from "./ItemsRender";
import { isItem, isHidden } from '../lib/helpers';
import penduloStyle from './Pendulo.module.css'
import { useMenu } from "../main";
interface PenduloType {
    id: string
    children: React.ReactNode
    darkMode?: boolean
}

interface ClickableElement extends React.ReactElement {
  props: {
    onClick: () => void;
  };
}


export function Pendulo({ id, children, darkMode = false } : PenduloType) {
    const { state } = usePendulo(id)
    const sectionRef = useRef<HTMLDivElement | null>(null)
    const { offset } = usePosition({ sectionRef, state })
    const finalTheme = darkMode ? penduloStyle.penduloWrapperDark : penduloStyle.penduloWrapper
    useToggleMenu({ state });
    const arrayElements = React.Children.toArray(children)
    const itemsIndex = arrayElements.map((child, index) => {
        if (React.isValidElement(child) && isItem(child) && !isHidden(child)) {
            return index
        }
    }).filter(child => child !== undefined)
    
    const { hideAll } = useMenu()
    const { currentItem } = useKeyboard({ state, itemsIndex, onEnter })

    function itemHasOnClick(item: React.ReactNode): item is ClickableElement {
        if (!React.isValidElement(item)) return false;
        const props = (item as React.ReactElement).props as { onClick?: unknown };

        return typeof props.onClick === 'function';
    }

    function onEnter() {
        const item = arrayElements[currentItem]

        if (itemHasOnClick(item)) {
            item.props?.onClick()
        }

        hideAll()
    }

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