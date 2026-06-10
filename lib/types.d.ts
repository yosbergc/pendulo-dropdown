export interface ItemType {
    text: string
    Icon?: React.ComponentType<React.SVGProps<SVGSVGElement>>
    onClick?: (event?: React.MouseEvent<HTMLElement>) => void;
    darkMode?: boolean
    disabled?: boolean
    hidden?: boolean
    closeOnCLick?: boolean,
    isCurrentSelected?: boolean
    onKeyMatch?: (event: KeyboardEvent) => boolean,
    state?: HandlerInfo
}

export interface HandlerInfo {
    state: boolean
    position: {
        clientX: number
        clientY: number
    }
}

export interface KeyCombinationHook { 
    hidden: boolean, 
    onKeyMatch?: (event: KeyboardEvent) => boolean, 
    disabled: boolean,
    onClick?: (event?: React.MouseEvent<HTMLElement>) => void;
    state?: HandlerInfo
}

export type Handler <T = HandlerInfo> = (args: T) => void;