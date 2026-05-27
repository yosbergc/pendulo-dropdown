import { useMenu } from "./useMenu";
import type { HandlerInfo } from "./observer";
import { useEffect } from "react";

export function useToggleMenu({ state } : { state: HandlerInfo }) {
    const { hideAll } = useMenu()

    useEffect(() => {
        if (state.state) {
            window.document.addEventListener('click', hideAll)
        }

        return () => {
            window.document.removeEventListener('click', hideAll)
        }
    }, [hideAll, state.state])
}