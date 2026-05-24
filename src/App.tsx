import { Pendulo } from '../lib/components/Pendulo'
import { Item } from '../lib/components/Item'
import { useMenu } from '../lib/hooks/useMenu'

function App() {
  const { show } = useMenu()
  return (
    <>
      <Pendulo id='menu'>
        <Item text="View profile" />
        <Item text="Settings" />
        <Item text="Subscription" />
      </Pendulo>
      <button onClick={() => show({ id: 'menu' })}>Probar boton de mostrar</button>
    </>
  )
}

export default App
