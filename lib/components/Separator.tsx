export function Separator({ darkMode = false } : { darkMode?: boolean}) {
    return (
        <hr style={{
            border: 'none',
            borderRadius: '6px',
            height: '2px',
            backgroundColor: darkMode ? '#3f3f46' : '#e5e7eb'
        }}></hr>
    )
}