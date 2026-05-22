type Handler <T = any> = (args?: T) => void;

class PenduloObserver {
    private dropdownList = new Map<string, Set<Handler>>()
    
    subscribe(id: string, handler: Handler) {
        this.dropdownList.set(id, new Set([handler]))

        return () => {
            this.unsubscribe(id)
        }
    }

    unsubscribe(id: string) {
        if (this.dropdownList.has(id)){
            this.dropdownList.delete(id)
        }
    }

    emit(id: string){
        if (this.dropdownList.has(id)) {
            const listenerList = this.dropdownList.get(id)!
            listenerList.forEach(listener => listener(true))
        }
    }
}

export const penduloObserverInstance = new PenduloObserver()