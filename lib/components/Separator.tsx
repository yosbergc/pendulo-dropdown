import type { SeparatorProps } from "../types"
import styles from './Separator.module.css'

export function Separator({ darkMode = false }: SeparatorProps ) {
    return (
        <hr className={`${styles.separatorStyle} ${darkMode ? styles.separatorStyleBlack : styles.separatorStyleWhite}`}></hr>
    )
}

