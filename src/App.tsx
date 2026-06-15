import { Pendulo, useMenu, Item, Separator } from 'pendulo-dropdown'
import 'pendulo-dropdown/styles.css'
import { UserRound, Settings, Podcast, LogOut } from 'lucide-react'

function App() {
  const { show } = useMenu()
  return (
    <>
      <Pendulo id='menu' darkMode>
        <Item text="View profile" Icon={UserRound} hidden/>
        <Item text="Settings" Icon={Settings} onClick={() => console.log('Hello from settings')} onKeyMatch={(event) => {
          return event.altKey && event.key === 'l';
        }}/>
        <Item text="Subscription" Icon={Podcast}/>
        <Separator />
        <Item text="Log Out" Icon={LogOut}/>
      </Pendulo>
      <section style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh' }}>
        <button onClick={(event: React.MouseEvent) => show({ id: 'menu', event })} style={{
          backgroundColor: '#f0f0f0',
          color: '#333',
          padding: '10px 20px',
          border: '1px solid #dcdcdc',
          borderRadius: '8px',
          cursor: 'pointer',
          fontSize: '16px',
          fontWeight: '500',
          transition: 'all 0.2s ease'
        }}>Test button</button>
      </section>
    </>
  )
}

export default App
