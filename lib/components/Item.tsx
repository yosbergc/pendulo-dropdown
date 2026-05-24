import '../index.css'
export function Item({ text, Icon } : { text: string, Icon?: React.ComponentType<React.SVGProps<SVGSVGElement>> }) {
    return (
        <section className="pendulo-item--component">
            { Icon && <Icon width={14} height={14}/> }
            <p>{text}</p>
        </section>
    )
}