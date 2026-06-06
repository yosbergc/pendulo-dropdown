
export function isItem(child: React.ReactElement<unknown, string | React.JSXElementConstructor<unknown>> | React.ReactPortal) {
    if (child.type && (typeof child.type === 'object' || typeof child.type === 'function') && Object.hasOwn(child.type, 'isItem')) {
        return true
    }

    return false;
}

export function isHidden(child: React.ReactElement<unknown, string | React.JSXElementConstructor<unknown>> | React.ReactPortal) {
    if (child.props && (typeof child.type === 'object' || typeof child.type === 'function') && Object.hasOwn(child.props, 'hidden')) {
        return true
    }
    
    return false;
}