import type { ItemsRenderProps } from '../types'
import { ItemList } from './ItemList'

export function ItemsRender({ 
    finalTheme, 
    state, 
    sectionRef, 
    arrayElements, 
    darkMode, 
    offset, 
    currentItem } : ItemsRenderProps) {
    
    const position = { top: state.position?.clientY - offset.height, left: state.position?.clientX - offset.width }
    
    return (
        <section className={finalTheme} style={position} ref={sectionRef} hidden={!state.state}>
            <ItemList 
              arrayElements={arrayElements} 
              darkMode={darkMode} 
              currentItem={currentItem} 
              state={state}
            />
        </section>
    )
}