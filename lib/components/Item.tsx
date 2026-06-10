import styles from './Item.module.css'
import { useKeyCombination } from '../hooks/useKeyCombination'
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
        state } : 
        ItemType )  => {
    
    useKeyCombination({ hidden, disabled, onClick, onKeyMatch, state })
    
    if (hidden) return;
    
    const finalStyle = darkMode ? styles.penduloItemComponentDarkTheme : styles.penduloItemComponent
    
    function handleOnClick(event: React.MouseEvent<HTMLElement>) {
        if (!closeOnCLick) {
            event.stopPropagation()
        }

        if (onClick) {
            onClick(event)
        }
    }

    const classNames = `${finalStyle} ${isCurrentSelected ? darkMode ? styles.isSelectedItemDark : styles.isSelectedItem : ''}`

    return (
        <button 
          className={classNames}
          onClick={handleOnClick}
          disabled={disabled}>
            { Icon && <Icon width={14} height={14}/> }
            <p>{text}</p>
        </button>
    )
}

Item.isItem = true;