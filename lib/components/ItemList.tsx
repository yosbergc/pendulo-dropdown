import React, { cloneElement} from 'react'
import type { ChildProps, ItemsRenderProps } from '../types'

export function ItemList({ 
    arrayElements, 
    darkMode, 
    currentItem, 
    state 
    } : Partial<ItemsRenderProps>) {
    return React.Children.map(arrayElements, (child, index) => {
        if (React.isValidElement<ChildProps>(child)) {
            return cloneElement(child, { darkMode, isCurrentSelected: index === currentItem, state })
        }
    })
}