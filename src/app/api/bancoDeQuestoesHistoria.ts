import QuestaoModel from "@/model/questao";
import RespostaModel from "@/model/resposta";

const historia: QuestaoModel[] = [
    new QuestaoModel(1, 'Quem foi o primeiro presidente do Brasil?', [
        RespostaModel.errada('Getúlio Vargas'),
        RespostaModel.errada('Juscelino Kubitschek'),
        RespostaModel.errada('Dilma Rousseff'),
        RespostaModel.errada('Luiz Inácio Lula da Silva'),
        RespostaModel.certa('Marechal Deodoro da Fonseca')
    ]),
    new QuestaoModel(2, 'Qual foi o evento que marcou o início da Idade Moderna?', [
        RespostaModel.errada('Queda do Império Romano'),
        RespostaModel.errada('Revolução Industrial'),
        RespostaModel.errada('Revolução Francesa'),
        RespostaModel.errada('Descobrimento da América'),
        RespostaModel.certa('Queda de Constantinopla')
    ]),
    new QuestaoModel(3, 'Em que período histórico ocorreu a Revolução Francesa?', [
        RespostaModel.errada('Idade Antiga'),
        RespostaModel.errada('Idade Média'),
        RespostaModel.errada('Idade Contemporânea'),
        RespostaModel.errada('Era Contemporânea'),
        RespostaModel.certa('Idade Moderna')
    ]),
    new QuestaoModel(4, 'Quem foi o líder do movimento pelos direitos civis dos negros nos Estados Unidos?', [
        RespostaModel.errada('Malcolm X'),
        RespostaModel.errada('Marcus Garvey'),
        RespostaModel.errada('Harriet Tubman'),
        RespostaModel.errada('Rosa Parks'),
        RespostaModel.certa('Martin Luther King Jr.')
    ]),
    new QuestaoModel(5, 'O que foi a Guerra Fria?', [
        RespostaModel.errada('Conflito militar entre Estados Unidos e União Soviética'),
        RespostaModel.errada('Guerra entre Alemanha e França'),
        RespostaModel.errada('Conflito armado na América Latina'),
        RespostaModel.errada('Revolução Cultural na China'),
        RespostaModel.certa('Confronto ideológico e político entre EUA e URSS após a Segunda Guerra Mundial')
    ]),
    new QuestaoModel(6, 'Qual foi o líder responsável pela independência da Índia do domínio britânico?', [
        RespostaModel.errada('Nelson Mandela'),
        RespostaModel.errada('Jawaharlal Nehru'),
        RespostaModel.errada('Indira Gandhi'),
        RespostaModel.errada('Muhammad Ali Jinnah'),
        RespostaModel.certa('Mahatma Gandhi')
    ]),
    new QuestaoModel(7, 'Qual foi o evento que marcou o fim da Primeira Guerra Mundial?', [
        RespostaModel.errada('Batalha de Stalingrado'),
        RespostaModel.errada('Bombardeio de Hiroshima'),
        RespostaModel.errada('Tratado de Tordesilhas'),
        RespostaModel.errada('Assassinato de Franz Ferdinand'),
        RespostaModel.certa('Tratado de Versalhes')
    ]),
    new QuestaoModel(8, 'Quem foi o autor da teoria da relatividade?', [
        RespostaModel.errada('Isaac Newton'),
        RespostaModel.errada('Nikola Tesla'),
        RespostaModel.errada('Marie Curie'),
        RespostaModel.errada('Galileu Galilei'),
        RespostaModel.certa('Albert Einstein')
    ]),
    new QuestaoModel(9, 'Qual foi o objetivo da Revolução Russa de 1917?', [
        RespostaModel.errada('Implantar o democracia na Rússia'),
        RespostaModel.errada('Restaurar a monarquia na Rússia'),
        RespostaModel.errada('Estabelecer o capitalismo na Rússia'),
        RespostaModel.errada('Expandir o Império Russo'),
        RespostaModel.certa('Implantar o comunismo na Rússia')
    ]),
    new QuestaoModel(10, 'Quem liderou o movimento pela independência do Brasil?', [
        RespostaModel.errada('Dom Pedro II'),
        RespostaModel.errada('José Bonifácio'),
        RespostaModel.errada('Tiradentes'),
        RespostaModel.errada('Getúlio Vargas'),
        RespostaModel.certa('Dom Pedro I')
    ]),
    new QuestaoModel(11, 'O que foi o Apartheid na África do Sul?', [
        RespostaModel.errada('Movimento de independência'),
        RespostaModel.errada('Disputas territoriais'),
        RespostaModel.errada('Partido político'),
        RespostaModel.errada('Guerra civil'),
        RespostaModel.certa('Sistema de segregação racial')
    ]),
    new QuestaoModel(12, 'Qual foi o líder responsável pela unificação da Itália?', [
        RespostaModel.errada('Otto von Bismarck'),
        RespostaModel.errada('Napoleão Bonaparte'),
        RespostaModel.errada('Mussolini'),
        RespostaModel.errada('Garibaldi'),
        RespostaModel.certa('Cavour')
    ]),
    new QuestaoModel(13, 'Qual foi o evento que marcou o início da Segunda Guerra Mundial?', [
        RespostaModel.errada('Ataque a Pearl Harbor'),
        RespostaModel.errada('Bombardeio de Londres'),
        RespostaModel.errada('Invasão da França'),
        RespostaModel.errada('Batalha de Stalingrado'),
        RespostaModel.certa('Invasão da Polônia')
    ]),
    new QuestaoModel(14, 'O que foi a Revolução Industrial?', [
        RespostaModel.errada('Revolução tecnológica na agricultura'),
        RespostaModel.errada('Revolução cultural e artística'),
        RespostaModel.errada('Revolução política na Europa'),
        RespostaModel.errada('Revolução científica no campo da medicina'),
        RespostaModel.certa('Transformação econômica e social pela mecanização da produção')
    ]),
    new QuestaoModel(15, 'Quem foi Francisco Franco?', [
        RespostaModel.errada('Ditador da Itália'),
        RespostaModel.errada('Presidente dos Estados Unidos'),
        RespostaModel.errada('Líder comunista na União Soviética'),
        RespostaModel.errada('Ditador da Alemanha'),
        RespostaModel.certa('Ditador da Espanha')
    ]),
    new QuestaoModel(16, 'O que foi a Revolução Cubana?', [
        RespostaModel.errada('Revolução política na Argentina'),
        RespostaModel.errada('Revolução cultural no Brasil'),
        RespostaModel.errada('Revolução industrial em Cuba'),
        RespostaModel.errada('Revolução tecnológica em Cuba'),
        RespostaModel.certa('Movimento revolucionário liderado por Fidel Castro que resultou no estabelecimento de um governo comunista em Cuba')
    ]),
    new QuestaoModel(17, 'Quem foi Nelson Mandela?', [
        RespostaModel.errada('Presidente da Nigéria'),
        RespostaModel.errada('Líder da Revolução Cubana'),
        RespostaModel.errada('Ditador do Zimbábue'),
        RespostaModel.errada('Líder do movimento pelos direitos civis nos EUA'),
        RespostaModel.certa('Líder anti-apartheid na África do Sul e primeiro presidente negro do país')
    ]),
    new QuestaoModel(18, 'Qual foi o evento que marcou o fim da Guerra Fria?', [
        RespostaModel.errada('Queda da Bastilha'),
        RespostaModel.errada('Invasão do Iraque'),
        RespostaModel.errada('Queda da Muralha da China'),
        RespostaModel.errada('Tratado de Versalhes'),
        RespostaModel.certa('Queda do Muro de Berlim')
    ]),
    new QuestaoModel(19, 'O que foi a Revolução Industrial?', [
        RespostaModel.errada('Revolução tecnológica na agricultura'),
        RespostaModel.errada('Revolução cultural e artística'),
        RespostaModel.errada('Revolução política na Europa'),
        RespostaModel.errada('Revolução científica no campo da medicina'),
        RespostaModel.certa('Transformação econômica e social pela mecanização da produção')
    ]),
    new QuestaoModel(20, 'O que foi a Guerra do Vietnã?', [
        RespostaModel.errada('Guerra civil na Rússia'),
        RespostaModel.errada('Conflito entre Estados Unidos e Cuba'),
        RespostaModel.errada('Guerra entre Coreia do Norte e Coreia do Sul'),
        RespostaModel.errada('Guerra entre Israel e Palestina'),
        RespostaModel.certa('Conflito militar durante a Guerra Fria entre Vietnã do Norte, apoiado pelos comunistas, e Vietnã do Sul, apoiado pelos Estados Unidos')
    ])
    
]

export default historia