import { Pendulo } from '../lib/components/Pendulo'
import { useMenu } from '../lib/hooks/useMenu'
function App() {
  const { show } = useMenu()
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
      <button onClick={() => show({ id: 'menu' })}>Probar boton de mostrar</button>
    </>
  )
}

export default App
