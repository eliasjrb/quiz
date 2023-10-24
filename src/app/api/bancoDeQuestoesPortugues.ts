import QuestaoModel from "@/model/questao";
import RespostaModel from "@/model/resposta";

const portugues: QuestaoModel[] = [
    new QuestaoModel(1, 'Qual é a função do ponto final em uma frase?', [
        RespostaModel.errada('Indicar uma pergunta.'),
        RespostaModel.errada('Separar itens em uma lista.'),
        RespostaModel.errada('Indicar uma emoção.'),
        RespostaModel.errada('Indicar uma continuação.'),
        RespostaModel.certa('Indicar o final da frase.')
    ]),
    new QuestaoModel(2, 'Qual é o plural de "cão"?', [
        RespostaModel.errada('Cãos'),
        RespostaModel.errada('Cãezinhos'),
        RespostaModel.errada('Cãois'),
        RespostaModel.errada('Cãeses'),
        RespostaModel.certa('Cães'),
    ]),
    new QuestaoModel(3, 'Qual é a figura de linguagem usada em "Ele tem um coração de pedra"?', [
        RespostaModel.errada('Metáfora'),
        RespostaModel.errada('Elipse'),
        RespostaModel.errada('Hipérbole'),
        RespostaModel.errada('Personificação'),
        RespostaModel.certa('Metonímia'),
    ]),
    new QuestaoModel(4, 'Qual é o antônimo de "generoso"?', [
        RespostaModel.errada('Bondoso'),
        RespostaModel.errada('Egoísta'),
        RespostaModel.errada('Amigável'),
        RespostaModel.errada('Altruísta'),
        RespostaModel.certa('Avarento'),
    ]),
    new QuestaoModel(5, 'Qual é a classe gramatical da palavra "rápido"?', [
        RespostaModel.errada('Pronome'),
        RespostaModel.errada('Substantivo'),
        RespostaModel.errada('Verbo'),
        RespostaModel.errada('Advérbio'),
        RespostaModel.certa('Adjetivo'),
    ]),
    new QuestaoModel(6, 'Quem é o autor de "Dom Casmurro"?', [
        RespostaModel.errada('Chico Chavier'),
        RespostaModel.errada('Graciliano Ramos'),
        RespostaModel.errada('José de Alencar'),
        RespostaModel.errada('Carlos Drummond de Andrade'),
        RespostaModel.certa('Machado de Assis'),
    ]),
    new QuestaoModel(7, 'Qual é o plural de "país"?', [
        RespostaModel.errada('Paízes'),
        RespostaModel.errada('Pais'),
        RespostaModel.errada('Páises'),
        RespostaModel.errada('Paisezinhos'),
        RespostaModel.certa('Países'),
    ]),
    new QuestaoModel(8, 'Qual é o tempo verbal da frase: "Ela estava estudando quando o telefone tocou"?', [
        RespostaModel.errada('Presente'),
        RespostaModel.errada('Futuro'),
        RespostaModel.errada('Pretérito Perfeito'),
        RespostaModel.errada('Pretérito mais-que-perfeito'),
        RespostaModel.certa('Pretérito Imperfeito'),
    ]),
    new QuestaoModel(9, 'O que é um hiato na língua portuguesa?', [
        RespostaModel.errada('Encontro de duas vogais na mesma sílaba.'),
        RespostaModel.errada('Encontro de duas consoantes diferentes.'),
        RespostaModel.errada('Encontro de uma vogal e uma consoante na mesma sílaba.'),
        RespostaModel.errada('Encontro de uma consoante e uma vogal em sílabas diferentes.'),
        RespostaModel.certa('Encontro de duas vogais em sílabas diferentes.'),
    ]),
    new QuestaoModel(10, 'Qual é o sujeito da frase: "O pássaro cantou pela manhã"?', [
        RespostaModel.errada('Todas estão corretas'),
        RespostaModel.errada('Cantou'),
        RespostaModel.errada('Manhã'),
        RespostaModel.errada('Pela'),
        RespostaModel.certa('O pássaro.'),
    ]),
    new QuestaoModel(11, 'Qual é o plural de "luz"?', [
        RespostaModel.errada('Luzeres'),
        RespostaModel.errada('Luzez'),
        RespostaModel.errada('Luzares'),
        RespostaModel.errada('Luze'),
        RespostaModel.certa('Luzes'),
    ]),
    new QuestaoModel(12, 'Qual é a função da vírgula na frase: "Ana, que é minha amiga, vai viajar"?', [
        RespostaModel.errada('Separar o sujeito do predicado.'),
        RespostaModel.errada('Indicar uma pausa breve.'),
        RespostaModel.errada('Indicar uma pausa na respiração.'),
        RespostaModel.errada('Indicar uma pergunta indireta.'),
        RespostaModel.certa('Separar elementos de uma enumeração.'),
    ]),
    new QuestaoModel(13, 'Qual é a classe gramatical da palavra "felicidade"?', [
        RespostaModel.errada('Adjetivo'),
        RespostaModel.errada('Verbo'),
        RespostaModel.errada('Advérbio'),
        RespostaModel.errada('Preposição'),
        RespostaModel.certa('Substantivo'),
    ]),
    new QuestaoModel(14, 'Qual é a alternativa correta para completar a frase: "Ela _____ a festa ontem à noite"?', [
        RespostaModel.errada('Viram'),
        RespostaModel.errada('Veram'),
        RespostaModel.errada('Vêram'),
        RespostaModel.errada('Vê'),
        RespostaModel.certa('Viu'),
    ]),
    new QuestaoModel(15, 'Qual é o significado da palavra "aliteração"?', [
        RespostaModel.errada('Repetição de sons consonantais no fim das palavras.'),
        RespostaModel.errada('Repetição de sons vocálicos no início das palavras.'),
        RespostaModel.errada('Repetição de sons consonantais no meio das palavras.'),
        RespostaModel.errada('Repetição de sons vocálicos no meio das palavras.'),
        RespostaModel.certa('Repetição de sons consonantais no início das palavras.'),
    ]),
    new QuestaoModel(16, 'Qual é o plural de "caráter"?', [
        RespostaModel.errada('Caracteres'),
        RespostaModel.errada('Cárateres'),
        RespostaModel.errada('Caratéres'),
        RespostaModel.errada('Caratér'),
        RespostaModel.certa('Caráteres'),
    ]),
    
    new QuestaoModel(17, 'Qual é o sinônimo de "alegre"?', [
        RespostaModel.errada('Triste'),
        RespostaModel.errada('Aborrecido'),
        RespostaModel.errada('Bravo'),
        RespostaModel.errada('Sério'),
        RespostaModel.certa('Feliz'),
    ]),
    new QuestaoModel(18, 'Qual é a alternativa correta para completar a frase: "Eles _____ muito bem no teste"?', [
        RespostaModel.errada('Estudam'),
        RespostaModel.errada('Estudará'),
        RespostaModel.errada('Estudavam'),
        RespostaModel.errada('Estudara'),
        RespostaModel.certa('Estudaram'),
    ]),
    new QuestaoModel(19, 'Qual é a função do travessão em um texto?', [
        RespostaModel.errada('Indicar uma citação direta.'),
        RespostaModel.errada('Indicar uma pausa.'),
        RespostaModel.errada('Indicar uma pergunta direta.'),
        RespostaModel.errada('Indicar uma conclusão.'),
        RespostaModel.certa('Indicar uma fala de personagem.'),
    ]),
    new QuestaoModel(20, 'Qual é a figura de linguagem usada em "O silêncio da noite calma"?', [
        RespostaModel.errada('Metáfora'),
        RespostaModel.errada('Elipse'),
        RespostaModel.errada('Eufemismo'),
        RespostaModel.errada('Personificação'),
        RespostaModel.certa('Hipérbole'),
    ]),
]

export default portugues