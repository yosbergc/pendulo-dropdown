import { penduloObserverInstance } from './observer'
import { RESERVED } from '../static/static'

function useMenu() {
    // Method to show a Pendulo, hide automatically all the ones who were render.
    const show = ({ id } : { id: string }) => {
        penduloObserverInstance.emit(RESERVED.HIDE_ALL, false)
        penduloObserverInstance.emit(id, true)
    }
    // Method to hide all the pendulos (menu).
    const hideAll = () => {
        penduloObserverInstance.emit(RESERVED.HIDE_ALL, false)
    }

    return { 
        show,
        hideAll
     }
}

export { useMenu }