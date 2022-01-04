import TipoFiltro from '../model/TipoFiltro'
import Tarefa from '../model/Tarefa'
import ListaTarefa from '../model/ListaTarefas'

const tarefasIniciais: Tarefa[] = [
  Tarefa.criarAtiva(1, 'Estudar Next'),
  Tarefa.criarConcluida(2, 'Limpar carro'),
  Tarefa.criarAtiva(3, 'Comprar livro')
]

export default new ListaTarefa(tarefasIniciais, TipoFiltro.NENHUM)
