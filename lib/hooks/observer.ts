type Handler <T = boolean> = (args: T) => void;

class PenduloObserver {
    private dropdownList = new Map<string, Set<Handler>>()
    // Method to add a Pendulo (dropdown) and their handlers to "listen" signals when a render method is fired.
    subscribe(id: string, handler: Handler) {
        const hasMenu = this.dropdownList.has(id)
        const hasHandler = this.dropdownList.get(id)?.has(handler)
        if (hasMenu) {
            if (!hasHandler) {
                this.dropdownList.get(id)?.add(handler)
            }
        } else {
            this.dropdownList.set(id, new Set([handler]))
        }

        return (id: string, handler: Handler) => {
            this.unsubscribe(id, handler)
        }
    }
    // Method to delete handlers (so they stop listening when a render method is fired) once Pendulo is unmounted.
    unsubscribe(id: string, handler: Handler) {
        if (this.dropdownList.has(id)){
            this.dropdownList.get(id)?.delete(handler)
        }
    }

    emit(id: string, boolean: boolean){
        if (this.dropdownList.has(id)) {
            const listenerList = this.dropdownList.get(id)
            if (listenerList) {
                listenerList.forEach(listener => listener(boolean))
            }
            
        }
    }
}

export const penduloObserverInstance = new PenduloObserver()