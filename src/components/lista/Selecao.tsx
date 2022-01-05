interface SelecaoProps {
  valor: boolean
}

export default function Selecao(props: SelecaoProps) {
  const gradiente = props.valor
    ? 'bg-gradient-to-br from-blue-400 to-purple-500'
    : ''

  return (
    <div
      className={`flex justify-center items-center
    h-7 w-7 rounded-full cursor-pointer
    border border-gray-400 ${gradiente}
    `}
    >
      {props.valor ? 'x' : ''}
    </div>
  )
}