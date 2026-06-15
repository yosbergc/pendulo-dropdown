'use client'
import styles from './Item.module.css'
import { useKeyCombination } from '../hooks/useKeyCombination'
import { handleOnClick } from '../lib/helpers'
import type { ItemType } from '../types'

export const Item = (
    { 
    text, 
    Icon, 
    onClick, 
    darkMode = false, 
    disabled = false, 
    hidden = false, 
    closeOnCLick = true, 
    isCurrentSelected, 
    onKeyMatch,
    state } : ItemType )  => {
    
    useKeyCombination({ hidden, disabled, onClick, onKeyMatch, state })
    
    if (hidden) return;
    
    const finalStyle = darkMode ? styles.penduloItemComponentDarkTheme : styles.penduloItemComponent
    const classNames = `${finalStyle} ${isCurrentSelected ? darkMode ? styles.isSelectedItemDark : styles.isSelectedItem : ''}`

    return (
        <button 
          className={classNames}
          onClick={(event: React.MouseEvent<HTMLElement>) => (
            handleOnClick(event, closeOnCLick, onClick)
          )}
          disabled={disabled}>
            { Icon && <Icon width={14} height={14}/> }
            <p>{text}</p>
        </button>
    )
}

Item.isItem = true;