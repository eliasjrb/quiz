import styles from '@/styles/Temporizador.module.css'

import { CountdownCircleTimer } from 'react-countdown-circle-timer'

interface TemporizadorProps {
    key: any
    duracao: number
    tempoEsgotado: () => void
}

export default function Temporizador(props: TemporizadorProps) {
    return (
        <div className={styles.temporizador}>
            <CountdownCircleTimer
                duration={props.duracao}
                size={120}
                isPlaying
                onComplete={props.tempoEsgotado}
                colors={['#004777', '#F7B801', '#A30000', '#A30000']}
                colorsTime={[7, 5, 2, 0]}
                // colors={[
                //     ['#BCE596', 0.33],
                //     ['#F7B801', 0.33],
                //     ['#ED827A', 0.33],
                // ]}
                >
                {({ remainingTime }) => remainingTime}
            </CountdownCircleTimer>
        </div>
    )
}