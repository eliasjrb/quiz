import styles from '../styles/Questao.module.css'
import QuestaoModel from '../model/questao'
import Enunciado from './Enunciado'
import Temporizador from './Temporizador'
import Resposta from './Resposta'

const letras = [
    { valor: 'A', cor: '#ebbb4b' },
    { valor: 'B', cor: '#d85aa5' },
    { valor: 'C', cor: '#4ac6f7' },
    { valor: 'D', cor: '#abfd5e' },
    { valor: 'E', cor: '#7356f5' },
]

interface QuestaoProps {
    valor: QuestaoModel
    tempoPraResposta?: number
    respostaFornecida: (indice: number) =>  void
    tempoEsgotado: () => void
}

export default function Questao(props: QuestaoProps) {
    const questao = props.valor

    function renderizarRespostas() {
        return questao.respostas.map((resposta, i) => {
            return (
                <Resposta
                    key={`${questao.id}-${i}`}
                    valor={resposta}
                    indice={i}
                    letra={letras[i].valor}
                    corFundoLetra={letras[i].cor}
                    respostaFornecida={props.respostaFornecida}
                />
            )
        })
    }

    return (
        <div className="flex w-full flex-col justify-center items-center">
            <Enunciado texto={questao.enunciado} />
            <Temporizador key={questao.id}
                duracao={props.tempoPraResposta ?? 10}
                tempoEsgotado={props.tempoEsgotado} />
            {renderizarRespostas()}
        </div>
    )
}