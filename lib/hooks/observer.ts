type Listener = (text: string) => void

class PenduloObserver {
    private dropdownList = new Map<string, Listener>()
    
    subscribe(id: string, listener: Listener) {
        this.dropdownList.set(id, listener)

        return () => {
            this.off(id)
        }
    }

    off(id: string) {
        if (this.dropdownList.has(id)){
            this.dropdownList.delete(id)
        }
    }

    emit(id: string, payload: string){
        if (this.dropdownList.has(id)) {
            const listener = this.dropdownList.get(id)
            if (listener) {
                listener(payload)
            }
        }
    }
}

export const penduloObserverInstance = new PenduloObserver()