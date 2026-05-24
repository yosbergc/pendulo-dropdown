export function Item({ text } : { text: string }) {
    return (
        <section>
            <p style={{
                fontFamily: 'sans-serif',
                color: 'gray',
                fontSize: '0.9rem',
                minWidth: '200px',
            }}>{text}</p>
        </section>
    )
}