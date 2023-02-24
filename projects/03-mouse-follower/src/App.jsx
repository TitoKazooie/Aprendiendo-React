import { useEffect, useState } from 'react'

const FollowMouse = () => {
  const [enabled, setEbabled] = useState(false)
  const [position, setPosition] = useState({ x: 0, y: 0 })

  useEffect(() => {
    console.log('effect', { enabled })
    const handleMove = (e) => {
      const { clientX, clientY } = e
      console.log('movimiento', { clientX, clientY })
      setPosition({ x: clientX, y: clientY })
    }

    if (enabled) {
      window.addEventListener('pointermove', handleMove)
    }

    // cleanup
    // cuando el componente se desmonta
    return () => {
      window.removeEventListener('pointermove', handleMove)
    }
  }, [enabled])
  return (
    <>
      <div style={{
        position: 'absolute',
        backgroundColor: '#09f',
        borderRadius: '50%',
        opacity: 0.8,
        pointerEvents: 'none',
        left: -20,
        top: -20,
        width: 40,
        height: 40,
        transform: `translate(${position.x}px, ${position.y}px)`
      }}
      />
      <button onClick={() => setEbabled(!enabled)}>
        {enabled ? 'Desactivar' : 'Activar'} Seguir puntero
      </button>
    </>
  )
}

function App () {
  return (
    <main>
      <FollowMouse />
    </main>
  )
}

export default App
