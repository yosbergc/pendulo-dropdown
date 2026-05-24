import { Pendulo } from '../lib/components/Pendulo'
import { Item } from '../lib/components/Item'
import { Separator } from '../lib/components/Separator'
import { useMenu } from '../lib/hooks/useMenu'
import { UserRound, Settings, Podcast, LogOut } from 'lucide-react'
function App() {
  const { show } = useMenu()
  return (
    <>
      <Pendulo id='menu'>
        <Item text="View profile" Icon={UserRound} />
        <Item text="Settings" Icon={Settings}/>
        <Item text="Subscription" Icon={Podcast}/>
        <Separator />
        <Item text="Log Out" Icon={LogOut}/>
      </Pendulo>
      <button onClick={() => show({ id: 'menu' })}>Probar boton de mostrar</button>
    </>
  )
}

export default App
