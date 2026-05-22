import { penduloObserverInstance } from './observer'
import { RESERVED } from '../static/static'
function useMenu({ id } : { id: string }) {
    const show = () => {
        // Hide all menu currently showing
        penduloObserverInstance.emit(RESERVED.HIDE_ALL, false)
        // Show menu
        penduloObserverInstance.emit(id, true)
    }

    return { show }
}

export { useMenu }