import { penduloObserverInstance } from './observer'
import { RESERVED } from '../static/static'

function useMenu() {
    // Method to show a Pendulo, hide automatically all the ones who were render.
    const show = ({ id, event } : { id: string, event: React.MouseEvent }) => {
        event.stopPropagation()
        penduloObserverInstance.emit(RESERVED.HIDE_ALL, { state: true, position: { clientX: 0, clientY: 0 } })
        penduloObserverInstance.emit(id, { 
            state: true,
            position: {
                clientX: event.clientX,
                clientY: event.clientY
            }
        })
    }

    // Method to hide all the pendulos (menu).
    const hideAll = () => {
        penduloObserverInstance.emit(RESERVED.HIDE_ALL, { state: false, position: { clientX: 0, clientY: 0 } })
    }

    return { 
        show,
        hideAll
     }
}

export { useMenu }