import styles from './Item.module.css'

interface ItemType {
    text: string
    Icon?: React.ComponentType<React.SVGProps<SVGSVGElement>>
    onClick?: (event: React.MouseEvent<HTMLElement>) => void;
    darkMode?: boolean
    disabled?: boolean
    hidden?: boolean
    closeOnCLick?: boolean,
    isCurrentSelected?: boolean
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
        isCurrentSelected } : 
        ItemType)  => {

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