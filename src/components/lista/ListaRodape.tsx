import ListaTarefas from '../../model/ListaTarefas'
import ListaBotao from './ListaBotao'

interface ListaRodapeProps {
  tarefas: ListaTarefas
  mudou: (tarefas: ListaTarefas) => void
}

export default function ListaRodape(props: ListaRodapeProps) {
  const { tarefas, mudou } = props

  function renderizarQtdeDeItens() {
    return (
      <>
        <span className="text-gray-400 hidden lg:inline ">
          {tarefas.quantidade}
          {tarefas.quantidade === 0
            ? 'Nenhuma tarefa encontrada'
            : tarefas.quantidade === 1
            ? ' tarefa encontrada'
            : ' tarefas encontradas'}
        </span>
        <span className="flex-1 hidden lg:inline"></span>
      </>
    )
  }

  function renderizarBotoesFiltro() {
    return (
      <>
        <ListaBotao
          selecionado={tarefas.exibindoTodas()}
          onClick={() => mudou(tarefas.removerFiltro())}
          className="hidden md:inline"
        >
          <span>Todas</span>
        </ListaBotao>
        <ListaBotao
          selecionado={tarefas.exibindoSomenteAtivas()}
          onClick={() => mudou(tarefas.filtrarAtivas())}
          className="mx-4"
        >
          <span>Ativas</span>
        </ListaBotao>
        <ListaBotao
          selecionado={tarefas.exibindoSomenteConcluidas()}
          onClick={() => mudou(tarefas.filtrarConcluidas())}
        >
          <span>Concluídas</span>
        </ListaBotao>
      </>
    )
  }

  function renderizarExcluirConcluidas() {
    return (
      <>
        <span className="flex-grow"></span>
        <ListaBotao onClick={() => mudou(tarefas.excluirConcluidas())}>
          Excluir <span className="hidden md:inline">concluídas</span>
        </ListaBotao>
      </>
    )
  }

  return (
    <li className="flex p-5">
      {renderizarQtdeDeItens()}
      {renderizarBotoesFiltro()}
      {renderizarExcluirConcluidas()}
    </li>
  )
}
