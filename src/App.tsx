import { Pendulo } from '../lib/components/Pendulo'
import { useMenu } from '../lib/hooks/useMenu'
function App() {
  const { show } = useMenu({
    id: 'menu'
  })
  const { show: showTwo } = useMenu({
    id: 'menu2'
  })
  return (
    <>
      <Pendulo id='menu'>
        <section>
          <h2>Hello from children</h2>
        </section>
      </Pendulo>
      <Pendulo id='menu2'>
        <section>
          <h2>Hello from children 2</h2>
        </section>
      </Pendulo>
      <button onClick={show}>Probar boton de mostrar</button>
      <button onClick={showTwo}>Probar boton de mostrar menu2</button>
    </>
  )
}

export default App
