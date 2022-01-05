import { useState } from 'react'
import Lista from '../components/lista/Lista'
import TarefasIniciais from '../data/mock'

export default function Home() {
  const [tarefas, setTarefas] = useState(TarefasIniciais)
  return (
    <div
      className={`
    h-screen flex flex-col justify-center items-center  
    bg-gray-300
    `}
    >
      <Lista
        tarefas={tarefas}
        mudou={novasTarefas => {
          setTarefas(novasTarefas)
        }}
      />
    </div>
  )
}
