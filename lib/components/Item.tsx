import styles from './Item.module.css'

interface ItemType {
    text: string
    Icon?: React.ComponentType<React.SVGProps<SVGSVGElement>>
    onClick?: (event: React.MouseEvent<HTMLElement>) => void;
}
export function Item({ text, Icon, onClick } : ItemType) {
    return (
        <section className={styles.penduloItemComponent} onClick={onClick}>
            { Icon && <Icon width={14} height={14}/> }
            <p>{text}</p>
        </section>
    )
}