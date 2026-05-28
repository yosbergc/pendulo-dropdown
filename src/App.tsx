import { Pendulo } from '../lib/components/Pendulo'
import { Item } from '../lib/components/Item'
import { Separator } from '../lib/components/Separator'
import { useMenu } from '../lib/hooks/useMenu'
import { UserRound, Settings, Podcast, LogOut } from 'lucide-react'

function App() {
  const { show, hideAll } = useMenu()
  return (
    <>
      <Pendulo id='menu' darkMode>
        <Item text="View profile" Icon={UserRound} />
        <Item text="Settings" Icon={Settings}/>
        <Item text="Subscription" Icon={Podcast}/>
        <Separator />
        <Item text="Log Out" Icon={LogOut}/>
      </Pendulo>
      <section style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh' }}>
        <button onClick={(event: React.MouseEvent) => show({ id: 'menu', event })}>Probar boton de mostrar</button>
        <button onClick={hideAll}>Eliminar menu</button>
      </section>
    </>
  )
}

export default App
