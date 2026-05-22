import { penduloObserverInstance } from './observer'

function useMenu({ id } : { id: string }) {
    const show = () => {
        penduloObserverInstance.emit(id)
    }

    return { show }
}

export { useMenu }