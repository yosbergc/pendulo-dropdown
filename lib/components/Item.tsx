import styles from './Item.module.css'
import { useKeyCombination } from '../hooks/useKeyCombination'
import type { HandlerInfo } from '../hooks/observer';

interface ItemType {
    text: string
    Icon?: React.ComponentType<React.SVGProps<SVGSVGElement>>
    onClick?: (event?: React.MouseEvent<HTMLElement>) => void;
    darkMode?: boolean
    disabled?: boolean
    hidden?: boolean
    closeOnCLick?: boolean,
    isCurrentSelected?: boolean
    onKeyMatch?: (event: KeyboardEvent) => boolean,
    state?: HandlerInfo
}

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
        ItemType)  => {
    
    useKeyCombination({ hidden, disabled, onClick, onKeyMatch, state })
    if (hidden) return;

    const finalStyle = darkMode ? styles.penduloItemComponentDarkTheme : styles.penduloItemComponent
    
    return (
        <button 
        className={`${finalStyle} ${isCurrentSelected ? darkMode ? styles.isSelectedItemDark : styles.isSelectedItem : ''}`}
        onClick={(event: React.MouseEvent<HTMLElement>) => {
            if (!closeOnCLick) {
                event.stopPropagation()
            }

            if (onClick) {
                onClick(event)
            }
        }}
        disabled={disabled}>
            { Icon && <Icon width={14} height={14}/> }
            <p>{text}</p>
        </button>
    )
}

Item.isItem = true;