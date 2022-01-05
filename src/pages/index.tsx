import Tarefa from '../model/Tarefa'
import tarefasIniciais from '../data/mock'
import Selecao from '../components/lista/Selecao'

export default function Home() {
  return (
    <div
      className={`
    h-screen flex flex-col justify-center items-center 
    text-white 
    bg-gradient-to-tr from-gray-600 to-gray-900
    `}
    >
      <Selecao valor={true} />
      <Selecao valor={false} />
    </div>
  )
}
