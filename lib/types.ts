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

export interface ChildProps {
    darkMode?: boolean;
    [key: string]: unknown;
}

export interface ItemsRenderProps {
    finalTheme: string,
    state: HandlerInfo,
    sectionRef: React.RefObject<HTMLDivElement | null>,
    darkMode: boolean,
    offset: {
        width: number,
        height: number
    },
    currentItem: number,
    arrayElements?: React.ReactNode[]
}

export interface PenduloType {
    id: string
    children: React.ReactNode
    darkMode?: boolean
}

export interface ClickableElement extends React.ReactElement {
  props: {
    onClick: () => void;
  };
}

export interface SeparatorProps { 
    darkMode?: boolean
}

export interface useKeyboardProps { 
    state: HandlerInfo, 
    itemsIndex: number[], 
    arrayElements: React.ReactNode[] 
}

export interface usePositionProps { 
    sectionRef: React.RefObject<HTMLDivElement | null>
    state: HandlerInfo 
}