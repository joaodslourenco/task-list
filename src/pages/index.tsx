import { useState } from 'react'
import Formulario from '../components/formulario/Formulario'
import Lista from '../components/lista/Lista'
import Cabecalho from '../components/template/Cabecalho'
import Conteudo from '../components/template/Conteudo'
import TarefasIniciais from '../data/mock'
import Tarefa from '../model/Tarefa'

export default function Home() {
  const [tarefas, setTarefas] = useState(TarefasIniciais)

  function novaTarefaCriada(novaTarefa: Tarefa) {
    setTarefas(tarefas.adicionarTarefa(novaTarefa))
  }
  return (
    <div
      className={`
    h-screen flex flex-col bg-gray-300
    `}
    >
      <Cabecalho>
        <Formulario novaTarefaCriada={novaTarefaCriada} />
      </Cabecalho>

      <Conteudo>
        <Lista
          tarefas={tarefas}
          mudou={novasTarefas => {
            setTarefas(novasTarefas)
          }}
        />
      </Conteudo>
    </div>
  )
}
