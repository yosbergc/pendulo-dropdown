import { Pendulo } from '../lib/components/Pendulo'
import { useMenu } from '../lib/hooks/useMenu'
function App() {
  const { show } = useMenu({
    id: 'menu'
  })
  return (
    <>
      <Pendulo id='menu'>
        <section>
          <h2>Hello from children</h2>
        </section>
      </Pendulo>
      <button onClick={show}>Probar boton de mostrar</button>
    </>
  )
}

export default App
