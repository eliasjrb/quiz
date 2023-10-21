import QuestaoModel from "@/model/questao";
import RespostaModel from "@/model/resposta";

const questoes: QuestaoModel[] = [
    new QuestaoModel(
        1,
        `. O objetivo do Secure Socket Layer (SSL) é prover
        autenticidade, privacidade e integridade às conexões
        entre cliente e servidor, sendo usado, na maioria das
        vezes, em conjunto com o protocolo HTTP. Para fornecer
        as propriedades de autenticidade e privacidade, o SSL
        emprega (BANSIRUL - 2017)`, [
        RespostaModel.errada('apenas criptografia de certificado digital.'),
        RespostaModel.errada('apenas criptografia de chave pública.'),
        RespostaModel.errada('apenas criptografia de chave simétrica.'),
        RespostaModel.errada(' funções de resumo criptográfico (hash). '),
        RespostaModel.certa(' criptografia de chave pública e criptografia de chave simétrica.'),
    ]),
    new QuestaoModel(
        2,
        `Uma tabela de roteamento IPv4 possui várias entradas,
        cada uma fornece uma rota para uma rede de destino.
        Entre essas é possível definir uma rota, chamada de
        rota específica, que representa uma rota alternativa
        para se chegar a uma determinada estação (interface
        de rede de um equipamento). Qual é a máscara de rede
        associada à rota específica?  (BANSIRUL - 2017)`, [
        RespostaModel.errada('0.0.0.0'),
        RespostaModel.errada(' 255.0.0.0'),
        RespostaModel.errada('255.255.0.0'),
        RespostaModel.errada('255.255.255.0'),
        RespostaModel.certa('255.255.255.255'),
    ]),
    new QuestaoModel(3,
        `Tempos atrás, uma organização recebeu um bloco
        IPv4 /18 (alocação Classless Inter Domain Routing –
        CIDR). Os administradores de rede dividiram todo esse
        bloco em sub-redes, cada uma delas com, no máximo, 510 endereços IPv4 disponíveis para interfaces de
        rede. Agora, com o advento do IPv6, essa mesma organização recebeu um bloco IPv6 /48. Considere que
        os administradores de rede querem dividir esse
        bloco IPv6 de forma a manter o mesmo número de
        sub-redes que havia na antiga infraestrutura IPv4.
        Nessa situação, em notação CIDR, qual é a máscara de
        rede que deve ser empregada para a rede IPv6 dessa
        organização? (BANSIRUL - 2017)`, [
        RespostaModel.errada('/23'),
        RespostaModel.errada('/59'),
        RespostaModel.errada(' /69'),
        RespostaModel.errada('/115'),
        RespostaModel.certa('/53'),
    ]),
    new QuestaoModel(4,
        `Considere as camadas definidas no Modelo de Referência
        Open System Interconnection (MR-OSI) para guiar a
        criação de arquiteturas de redes. Em que camadas
        atuam, respectivamente, os seguintes equipamentos
        de interconexão: ponto de acesso sem fio (base wireless),
        switch não gerenciável e roteador? (BANSIRUL - 2017)`, [
        RespostaModel.errada('1, 3 e 2'),
        RespostaModel.errada('1, 3 e 3'),
        RespostaModel.errada('2, 3 e 3'),
        RespostaModel.errada('3, 3 e 2'),
        RespostaModel.certa('2, 2 e 3'),
    ]),
    new QuestaoModel(5,
        `No contexto da definição de um plano de continuidade
        de negócios, é preciso definir pelo menos uma estratégia de contingência. Como se denomina a estratégia
        em que é feito um acordo formal com empresas que
        possuem características físicas, tecnológicas ou humanas semelhantes, para que possam servir como uma
        alternativa operacional em caso de incidentes? (BANSIRUL - 2017)`, [
        RespostaModel.errada('Autossuficiência.'),
        RespostaModel.errada('Bureau de serviços.'),
        RespostaModel.errada('Hot-site.'),
        RespostaModel.errada('Realocação de operação.'),
        RespostaModel.certa('Acordo de reciprocidade.'),
    ]),
    new QuestaoModel(6,
        `Um plano de contingência de negócios (PCN) é subdividido em módulos distintos e complementares, também
        denominados de planos, que tratam dos diferentes
        momentos vividos pela organização, no caso de
        ocorrência de incidentes. O plano responsável por
        definir a restauração das funcionalidades dos ativos
        afetados que implantam os processos do negócio, a fim
        de restabelecer o ambiente e as condições originais de
        operação, é o  (BANSIRUL - 2017)`, [
        RespostaModel.errada('plano de administração de crises (PAC).'),
        RespostaModel.errada('plano de análise de impacto no negócio (PIN).'),
        RespostaModel.errada('plano de continuidade operacional (PCO).'),
        RespostaModel.errada('plano de segurança da informação (PSI).'),
        RespostaModel.certa('plano de recuperação de desastres (PRD).'),
    ]),
    new QuestaoModel(7,
        `Qual dos espécimes abaixo NÃO é considerado um
        malware do tipo Advanced Persistent Threat (APT)? (BANSIRUL - 2017)`, [
        RespostaModel.errada('Stuxnet'),
        RespostaModel.errada('Flame'),
        RespostaModel.errada('Duqu'),
        RespostaModel.errada('Red October'),
        RespostaModel.certa('WannaCry'),
    ]),
    new QuestaoModel(8,
        `Conforme o PMBOK versão 6, o cumprimento dos objetivos
        do projeto (IADES - 2023)`, [
        RespostaModel.errada(`certamente resulta em um produto único isolado, que
            não forma um componente de outro item.`),
        RespostaModel.errada(`não resulta na entrega de serviços, sendo sempre um
            componente de parte de um sistema maior.`),
        RespostaModel.errada(`certamente produz a combinação de diversos itens
            previamente existentes, sendo que projetos consistem em integrações de sistemas.`),
        RespostaModel.errada(`não implica entrega de valor, sendo que projetos são
            meras formalidades`),
        RespostaModel.certa('pode resultar na entrega de um documento, como um relatório final.'),
    ]),
    new QuestaoModel(9,
        `De acordo com o PMBOK versão 6, o gerenciamento eficaz
        de projetos ajuda indivíduos, grupos e organizações públicas
        e privadas a (IADES - 2023)`, [
        RespostaModel.errada('perderem prazos.'),
        RespostaModel.errada('perderem reputação.'),
        RespostaModel.errada('satisfazerem apenas as expectativas dos clientes.'),
        RespostaModel.errada('expandirem o projeto de forma descontrolada.'),
        RespostaModel.certa('serem mais previsíveis.'),
    ]),
    new QuestaoModel(10,
        `O termo “valor de negócios” faz referência aos benefícios
        resultantes de um projeto, que podem ser tangíveis,
        intangíveis ou ambos. No contexto do PMBOK versão 6,
        assinale a alternativa que indica um benefício intangível. (IADES - 2023)`, [
        RespostaModel.errada('Capital acionário'),
        RespostaModel.errada('Ativos monetários'),
        RespostaModel.errada('Instalações'),
        RespostaModel.errada('Participação de mercado'),
        RespostaModel.certa('Marcas registradas'),
    ]),
    new QuestaoModel(11,
        `Os princípios fundamentais da segurança da informação são
        comumente referidos com a expressão “Triângulo CIA”,
        sigla em inglês que representa confidencialidade, integridade
        e disponibilidade. Assinale a alternativa que apresenta um
        exemplo de medida com foco em confidencialidade. (IADES - 2023)`, [
        RespostaModel.errada('Armazenamento de dados em discos de rede em vez de discos locais.'),
        RespostaModel.errada(`As ações dos usuários são gravadas de forma a
        permitir a rastreabilidade das informações`),
        RespostaModel.errada(`Ações vitais para o sistema não podem ser conduzidas
        por uma só pessoa, sendo necessárias, no mínimo, duas
        pessoas para a realização de mudanças que tenham
        graves consequências.`),
        RespostaModel.errada('Realização de backups diários.'),
        RespostaModel.certa('Adoção da política da mesa limpa.'),
    ]),
    new QuestaoModel(12,
        `Se um firewall tem diversas portas abertas, há uma
        maior probabilidade de um invasor usar uma delas para
        acessar a rede de forma não autorizada. Se os usuários não
        forem treinados nos processos e procedimentos, haverá uma
        maior probabilidade de um funcionário cometer um erro,
        intencional ou não, que possa destruir dados. Se um sistema
        de detecção de intrusão não for implementado na rede,
        haverá maior probabilidade de um ataque não ser percebido
        até que seja tarde demais. Consiste na amarração da
        vulnerabilidade, da ameaça e da probabilidade de exploração
        ao impacto resultante nos negócios.
        BAARS, Hans et al. Fundamentos de segurança da informação.
        Editora Brasport, 2017, com adaptações.
        No contexto da segurança da informação, assinale a
        alternativa correspondente ao termo definido no texto
        apresentado (IADES - 2023).
        `, [
        RespostaModel.errada('Disponibilidade'),
        RespostaModel.errada('Salvaguarda'),
        RespostaModel.errada('Contramedida'),
        RespostaModel.errada('Hexagrama parkeriano'),
        RespostaModel.certa('Risco'),
    ]),
    new QuestaoModel(13,
        `Considerando a segurança da informação, assinale a
        alternativa que indica uma quantidade atribuída a um único
        evento, que representa a perda potencial de uma empresa,
        caso determinada ameaça se concretize. (IADES - 2023)`, [
        RespostaModel.errada('ARO'),
        RespostaModel.errada('ALE'),
        RespostaModel.errada('EF'),
        RespostaModel.errada('ML'),
        RespostaModel.certa('SLE'),
    ]),
    new QuestaoModel(14,
        `Com base no ITIL 3, assinale a alternativa correspondente à
        denominação do conceito que representa a promessa de que o
        produto ou serviço atenderá aos requerimentos acordados. (IADES - 2023)`, [
        RespostaModel.errada('Utilidade'),
        RespostaModel.errada('Habilidades'),
        RespostaModel.errada('Recursos'),
        RespostaModel.errada('Risco'),
        RespostaModel.certa('Garantia'),
    ]),
    new QuestaoModel(15, 
        `Assinale a alternativa que indica o objetivo primário do
        gerenciamento de catálogo de serviços no contexto do ITIL 3. (IADES - 2023)`, [
        RespostaModel.errada(`Revisar regularmente os serviços com os clientes para
        identificar oportunidades de melhorias no
        fornecimento dos serviços.`),
        RespostaModel.errada(`Detalhar todos os serviços entregues ao cliente, com a
        relação das unidades e dos processos de negócio que
        usam os serviços de tecnologia da informação.`),
        RespostaModel.errada(`Mostrar números referentes aos níveis de serviços
        necessários e aos níveis de serviços medidos de fato.`),
        RespostaModel.errada(`Realizar o monitoramento contínuo da disponibilidade
        dos serviços ofertados.`),
        RespostaModel.certa(`Assegurar que o catálogo de serviços seja produzido,
        mantido e que contenha informações precisas
        relacionadas a todos os serviços operacionais e
        também àqueles que estão para entrar em produção.`),
    ]),
    new QuestaoModel(16, 
        `Assinale a alternativa que apresenta o maior nível de
        maturidade no contexto do CMMi. (IADES - 2023)`, [
        RespostaModel.errada('Incompleto'),
        RespostaModel.errada('Inicial'),
        RespostaModel.errada('Definido'),
        RespostaModel.errada('Gerenciado'),
        RespostaModel.certa('Gerenciado quantitativamente'),
    ]),
]

export default questoes