import styles from './Item.module.css'

interface ItemType {
    text: string
    Icon?: React.ComponentType<React.SVGProps<SVGSVGElement>>
    onClick?: (event: React.MouseEvent<HTMLElement>) => void;
    darkMode?: boolean
}
export function Item({ text, Icon, onClick, darkMode = false } : ItemType) {
    const finalStyles = darkMode ? styles.penduloItemComponentDarkTheme : styles.penduloItemComponent
    return (
        <section className={finalStyles} onClick={onClick}>
            { Icon && <Icon width={14} height={14}/> }
            <p style={darkMode ? {
                color: '#e5e5e5'
            } : {}}>{text}</p>
        </section>
    )
}