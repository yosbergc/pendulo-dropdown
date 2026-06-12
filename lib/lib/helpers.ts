import React from "react";
import type { ClickableElement } from "../types";

export function isItem(child: React.ReactElement<unknown, string | React.JSXElementConstructor<unknown>> | React.ReactPortal) {
    if (child.type && (typeof child.type === 'object' || typeof child.type === 'function') && Object.hasOwn(child.type, 'isItem')) {
        return true
    }

    return false;
}

export function isHidden(child: React.ReactElement<unknown, string | React.JSXElementConstructor<unknown>> | React.ReactPortal) {
    if (child.props && (typeof child.type === 'object' || typeof child.type === 'function') && Object.hasOwn(child.props, 'hidden')) {
        return true
    }
    
    return false;
}

function itemHasOnClick(item: React.ReactNode): item is ClickableElement {
    if (!React.isValidElement(item)) return false;
    const props = (item as React.ReactElement).props as { onClick?: unknown };

    return typeof props.onClick === 'function';
}

export function onEnter(hideAll: () => void, arrayElements: React.ReactNode[], currentItem: number) {
    const item = arrayElements[currentItem]

    if (itemHasOnClick(item)) {
        item.props?.onClick()
    }

    hideAll()
}

export function useItems(children: React.ReactNode) {
    const arrayElements = React.Children.toArray(children)
    const itemsIndex = arrayElements.map((child, index) => {
        if (React.isValidElement(child) && isItem(child) && !isHidden(child)) {
            return index
        }
    }).filter(child => child !== undefined)

    return { arrayElements, itemsIndex }
}

export function handleOnClick(event: React.MouseEvent<HTMLElement>, closeOnCLick: boolean, onClick: ((event?: React.MouseEvent<HTMLElement, MouseEvent> | undefined) => void) | undefined) {
    if (!closeOnCLick) {
        event.stopPropagation()
    }

    if (onClick) {
        onClick(event)
    }
}