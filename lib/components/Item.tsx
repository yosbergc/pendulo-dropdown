import styles from './Item.module.css'

interface ItemType {
    text: string
    Icon?: React.ComponentType<React.SVGProps<SVGSVGElement>>
    onClick?: (event: React.MouseEvent<HTMLElement>) => void;
    darkMode?: boolean
    disabled?: () => boolean
}
export function Item({ text, Icon, onClick, darkMode = false, disabled = () => false } : ItemType) {
    const finalStyles = darkMode ? styles.penduloItemComponentDarkTheme : styles.penduloItemComponent
    return (
        <button 
        className={finalStyles}
        onClick={onClick}
        disabled={disabled()}>
            { Icon && <Icon width={14} height={14}/> }
            <p>{text}</p>
        </button>
    )
}