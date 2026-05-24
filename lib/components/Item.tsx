import styles from './Item.module.css'
export function Item({ text, Icon } : { text: string, Icon?: React.ComponentType<React.SVGProps<SVGSVGElement>> }) {
    return (
        <section className={styles.penduloItemComponent}>
            { Icon && <Icon width={14} height={14}/> }
            <p>{text}</p>
        </section>
    )
}