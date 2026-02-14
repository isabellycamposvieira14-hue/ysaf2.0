export interface ContentBlock {
  type: "text" | "heading" | "subheading" | "quote" | "list" | "highlight" | "image" | "divider" | "table"
  content?: string
  items?: string[]
  src?: string
  alt?: string
  caption?: string
  rows?: string[][]
}

export interface Chapter {
  id: number
  number: string
  title: string
  description: string
  image: string
  readTime: string
  blocks: ContentBlock[]
}

export function getChapterById(id: number): Chapter | undefined {
  return chapters.find((c) => c.id === id)
}

export const chapters: Chapter[] = [
  {
    id: 1,
    number: "01",
    title: "A Realidade do Mercado Digital",
    description: "O que realmente da dinheiro, por que a maioria falha e a mentalidade estrategica.",
    image: "/images/digital-market.jpg",
    readTime: "18 min de leitura",
    blocks: [
      { type: "image", src: "/images/digital-market.jpg", alt: "Mercado digital", caption: "O mercado digital oferece oportunidades sem precedentes para quem domina a estrategia certa." },
      { type: "heading", content: "A Nova Era do Faturamento Digital" },
      { type: "text", content: "No vasto e efervescente universo do mercado digital, a promessa de faturar alto na internet ressoa como um canto de sereia, atraindo milhoes de empreendedores com a visao de liberdade financeira e sucesso. Contudo, a realidade muitas vezes se choca com essa expectativa idilica. Enquanto alguns poucos alcancam resultados extraordinarios, a grande maioria se depara com frustracoes, investimentos perdidos e a sensacao de que algo fundamental esta faltando." },
      { type: "text", content: "Este material nao e mais um guia que promete atalhos magicos ou fortunas instantaneas. Pelo contrario, ele se propoe a ser um mapa detalhado e realista para aqueles que buscam construir um negocio digital solido, lucrativo e escalavel." },
      { type: "text", content: "A tese central que permeia cada pagina deste material e clara e inegociavel: o verdadeiro sucesso no ambiente online nao advem meramente do dominio de ferramentas ou da perseguicao de tendencias passageiras. Ele emerge da fusao estrategica entre a Estrategia Humana -- profundamente enraizada na psicologia do consumidor, na comunicacao persuasiva e na compreensao do comportamento humano -- e a Alavancagem Tecnologica -- potencializada pela Inteligencia Artificial (IA) e pela automacao inteligente." },
      { type: "quote", content: "A IA, por si so, e uma ferramenta poderosa, mas sem uma mente estrategica por tras, ela se torna apenas um motor sem direcao. Da mesma forma, a melhor estrategia humana, sem a capacidade de escala que a tecnologia oferece, permanecera limitada." },
      { type: "divider" },
      { type: "heading", content: "O Que Realmente Da Dinheiro Hoje" },
      { type: "text", content: "Contrariando a crenca popular de que o dinheiro esta em 'formulas secretas' ou 'nichos inexplorados', a verdade e que o faturamento consistente e elevado no mercado digital sempre esteve e sempre estara em resolver problemas reais e profundos das pessoas. Seja atraves de um produto, um servico ou uma informacao, o valor percebido pelo cliente e diretamente proporcional a eficacia da sua solucao em aliviar uma dor ou realizar um desejo intenso." },
      { type: "text", content: "Ferramentas, plataformas e tecnologias sao apenas os veiculos que transportam essa solucao ate o cliente. O foco, portanto, deve ser sempre no problema do cliente e na sua capacidade de oferecer uma transformacao genuina. Quem entende isso, para de perseguir modismos e comeca a construir negocios duradouros." },
      { type: "divider" },
      { type: "heading", content: "Por Que a Maioria Falha" },
      { type: "text", content: "A taxa de insucesso no empreendedorismo digital e alta, e as razoes sao multifacetadas, mas convergem para alguns pontos cruciais:" },
      { type: "list", items: [
        "Falta de Estrategia Clara: Muitos iniciam sem um plano de negocios solido, sem conhecer seu publico-alvo a fundo, sem uma proposta de valor definida ou um funil de vendas estruturado. Acoes isoladas e sem proposito estrategico raramente geram resultados duradouros.",
        "Mentalidade de Curto Prazo: A busca por 'dinheiro rapido' leva a desistencia precoce. O sucesso digital, como qualquer empreendimento, exige consistencia, paciencia e a capacidade de aprender com os erros. A expectativa de resultados imediatos, sem o devido esforco e tempo de maturacao, e uma armadilha comum.",
        "Foco Excessivo em Ferramentas, Pouco em Pessoas: A obsessao por qual e a 'melhor ferramenta de IA' ou a 'nova plataforma' desvia o foco do que realmente importa: entender o ser humano por tras da tela. Ferramentas sao importantes, mas sao apenas meios. A venda e um processo humano, mediado por emocoes e necessidades."
      ] },
      { type: "divider" },
      { type: "heading", content: "A Diferenca Entre Curiosos e Profissionais" },
      { type: "text", content: "A distincao entre aqueles que apenas 'tentam' e aqueles que realmente 'constroem' no mercado digital reside fundamentalmente na mentalidade e na abordagem." },
      { type: "table", rows: [
        ["Caracteristica", "Curioso", "Profissional"],
        ["Mentalidade", "Busca atalhos, dinheiro facil, resultados rapidos.", "Foco em construcao, valor, longo prazo, aprendizado continuo."],
        ["Acoes", "Pula de galho em galho, nao persiste, copia sem entender.", "Planeja, executa, analisa, otimiza, persiste."],
        ["Ferramentas", "Acredita que a ferramenta fara o trabalho por ele.", "Ve a ferramenta como uma alavanca para sua estrategia."],
        ["Foco Principal", "No proprio lucro e nas tendencias.", "Na dor do cliente e na solucao que oferece."],
        ["Resultado Comum", "Frustracao, desistencia, pouco ou nenhum lucro.", "Crescimento sustentavel, autoridade, faturamento alto."]
      ] },
      { type: "divider" },
      { type: "heading", content: "Por Que Tecnologia Sozinha Nao Vende" },
      { type: "text", content: "Esta e uma verdade fundamental que muitos demoram a compreender. Ter acesso as mais avancadas IAs ou as plataformas mais robustas nao garante vendas. A tecnologia e um amplificador. Se voce tem uma estrategia de vendas fraca, a IA apenas amplificara essa fraqueza. Se voce tem uma estrategia poderosa, a IA amplificara seu poder de alcance e escala." },
      { type: "highlight", content: "A venda e, em sua essencia, um ato de comunicacao e persuasao, que exige a compreensao das motivacoes humanas. A IA pode otimizar essa comunicacao, mas nao pode criar a estrategia fundamental que a sustenta." },
      { type: "divider" },
      { type: "heading", content: "O Papel da Mentalidade Estrategica" },
      { type: "text", content: "A mentalidade estrategica e a bussola que guia o empreendedor profissional. Ela envolve a capacidade de:" },
      { type: "list", items: [
        "Analisar o Mercado: Identificar lacunas, dores e oportunidades reais.",
        "Definir o Publico: Conhecer profundamente quem voce quer ajudar.",
        "Criar Valor: Desenvolver solucoes que realmente transformem a vida do cliente.",
        "Planejar a Execucao: Estruturar funis, ofertas e abordagens de vendas.",
        "Otimizar Constantemente: Medir resultados, aprender com os dados e ajustar a rota."
      ] },
      { type: "text", content: "Neste cenario, a Inteligencia Artificial surge como a maior aliada do estrategista, permitindo que ele execute suas visoes com uma velocidade e escala antes inimaginaveis. Mas a visao, a estrategia e a compreensao humana vem primeiro. E essa sinergia que desbloqueia o verdadeiro potencial do faturamento alto na internet." },
    ],
  },
  {
    id: 2,
    number: "02",
    title: "IA: A Maior Alavanca Financeira da Historia",
    description: "Como a IA multiplica tempo, dinheiro e escala. Empresas que faturam milhoes com IA.",
    image: "/images/ai-brain-network.jpg",
    readTime: "22 min de leitura",
    blocks: [
      { type: "image", src: "/images/ai-brain-network.jpg", alt: "Inteligencia Artificial", caption: "A IA e a maior alavanca financeira disponivel para empreendedores digitais." },
      { type: "heading", content: "O Que e IA de Forma Pratica" },
      { type: "text", content: "A Inteligencia Artificial (IA) nao e mais um conceito futurista restrito a filmes de ficcao cientifica ou laboratorios de pesquisa. Ela e uma realidade presente, uma forca transformadora que esta remodelando industrias, profissoes e, crucialmente, a forma como geramos riqueza. No contexto do empreendedorismo digital, a IA emerge como a maior alavanca financeira da historia, capaz de multiplicar tempo, dinheiro e escala de maneiras antes inimaginaveis." },
      { type: "text", content: "Para muitos, a IA ainda e envolta em um veu de complexidade e misterio. No entanto, em sua aplicacao pratica para o faturamento digital, podemos entende-la de uma forma muito mais acessivel: a IA e um exercito de estagiarios superdotados e incansaveis. Imagine ter a sua disposicao uma equipe de especialistas que pode:" },
      { type: "list", items: [
        "Escrever textos persuasivos em segundos.",
        "Criar imagens e videos com qualidade profissional em minutos.",
        "Analisar dados complexos e identificar padroes de mercado.",
        "Atender clientes 24 horas por dia, 7 dias por semana.",
        "Gerenciar suas redes sociais e campanhas de marketing."
      ] },
      { type: "text", content: "E tudo isso, sem reclamar, sem pedir aumento e sem precisar de descanso. Essa e a IA em sua essencia: uma ferramenta que automatiza tarefas cognitivas e criativas, liberando o potencial humano para o que realmente importa: a estrategia, a inovacao e a conexao genuina." },
      { type: "divider" },
      { type: "heading", content: "IA Nao Substitui Pessoas, Substitui Tarefas" },
      { type: "text", content: "Um dos maiores medos e equivocos em relacao a IA e a ideia de que ela substituira empregos e, consequentemente, pessoas. A verdade e mais matizada. A IA nao substitui pessoas; ela substitui tarefas. Tarefas repetitivas, demoradas, que exigem grande volume de processamento ou que podem ser otimizadas por algoritmos." },
      { type: "text", content: "Profissionais que se adaptam e aprendem a colaborar com a IA se tornam exponencialmente mais produtivos e valiosos. Aqueles que se recusam a integrar a IA em seus processos correm o risco de serem superados por quem o faz." },
      { type: "quote", content: "A IA nao vai tirar seu emprego. Uma pessoa usando IA vai. -- Andrew Ng, um dos maiores nomes da Inteligencia Artificial." },
      { type: "divider" },
      { type: "heading", content: "Como Empresas Usam IA para Faturar Milhoes" },
      { type: "text", content: "Grandes e pequenas empresas ja estao colhendo os frutos da IA, transformando-a em uma maquina de faturamento. Vejamos alguns exemplos:" },
      { type: "list", items: [
        "Netflix: Utiliza IA para analisar o historico de visualizacao dos usuarios e recomendar filmes e series, aumentando o engajamento e a retencao de assinantes. Isso se traduz em bilhoes de dolares em receita anual.",
        "Amazon: Emprega IA em toda a sua operacao, desde a otimizacao de rotas de entrega ate a personalizacao de ofertas de produtos, resultando em um aumento massivo nas vendas e na satisfacao do cliente.",
        "Startups de Conteudo: Empresas como Jasper.ai e Copy.ai permitem que criadores de conteudo e profissionais de marketing gerem textos de alta qualidade em escala, reduzindo drasticamente o tempo e o custo de producao.",
        "E-commerce Personalizado: Lojas virtuais usam IA para personalizar a experiencia de compra, desde a exibicao de produtos ate ofertas exclusivas, aumentando as taxas de conversao e o valor medio do pedido."
      ] },
      { type: "text", content: "Esses exemplos demonstram que a IA nao e apenas para gigantes da tecnologia. Com as ferramentas certas e uma estrategia inteligente, qualquer empreendedor pode aplicar esses principios para escalar seu proprio faturamento." },
      { type: "divider" },
      { type: "heading", content: "IA Como Multiplicador de Tempo, Dinheiro e Escala" },
      { type: "text", content: "O verdadeiro poder da IA reside em sua capacidade de atuar como um multiplicador em tres dimensoes criticas para qualquer negocio:" },
      { type: "list", items: [
        "Multiplicador de Tempo: A IA automatiza tarefas que levariam horas ou dias para serem concluidas manualmente. Isso libera seu tempo para atividades de maior valor, como estrategia, networking e desenvolvimento de novos produtos. Em vez de passar horas escrevendo um e-mail de vendas, a IA pode gerar rascunhos em minutos, permitindo que voce se concentre no refinamento e na personalizacao.",
        "Multiplicador de Dinheiro: Ao otimizar processos, reduzir erros e personalizar a experiencia do cliente, a IA impacta diretamente a lucratividade. Campanhas de marketing mais eficientes, atendimento ao cliente mais rapido e produtos mais relevantes levam a mais vendas e maior lucratividade.",
        "Multiplicador de Escala: A IA permite que um unico empreendedor ou uma pequena equipe opere com a capacidade de uma grande corporacao. Voce pode gerenciar milhares de interacoes com clientes, produzir centenas de pecas de conteudo ou analisar volumes massivos de dados sem a necessidade de uma equipe gigantesca."
      ] },
      { type: "divider" },
      { type: "heading", content: "Quem Domina IA Trabalha Menos e Fatura Mais" },
      { type: "text", content: "Esta nao e uma hiperbole, mas uma constatacao para aqueles que aprenderam a orquestrar a IA em seus negocios. Ao delegar as tarefas operacionais e repetitivas para a inteligencia artificial, o empreendedor pode focar em atividades estrategicas, criativas e de alto impacto. Isso nao significa preguica, mas sim inteligencia na alocacao de recursos -- sendo o tempo o mais valioso deles." },
      { type: "highlight", content: "O resultado e um modelo de negocio onde o esforco humano e direcionado para a inovacao e a diferenciacao, enquanto a IA cuida da execucao em massa, levando a um faturamento significativamente maior com um investimento de tempo e energia otimizado." },
      { type: "table", rows: [
        ["Aspecto", "Modelo Tradicional", "Modelo com IA"],
        ["Trabalho", "Manual e repetitivo, sem escala", "Automatizado, foco em estrategia"],
        ["Crescimento", "Linear, limitado pela capacidade humana", "Exponencial, profissionais com IA faturam 3x mais"],
        ["Velocidade", "1X", "10X"],
        ["Escala", "Baixa", "Infinita"]
      ] },
    ],
  },
  {
    id: 3,
    number: "03",
    title: "Tipos de IA e Como Usar para Ganhar Dinheiro",
    description: "IA de texto, imagem, video e automacao. Ferramentas e estrategias de monetizacao.",
    image: "/images/ai-brain-network.jpg",
    readTime: "25 min de leitura",
    blocks: [
      { type: "heading", content: "Os Quatro Pilares da IA para Faturamento" },
      { type: "text", content: "Compreender a Inteligencia Artificial como uma alavanca estrategica e o primeiro passo. O segundo, e igualmente crucial, e conhecer os diferentes tipos de IA disponiveis e, mais importante, como transforma-los em fontes de receita concretas. Neste capitulo, vamos mergulhar nas quatro principais categorias de IA que estao revolucionando o mercado digital, detalhando suas ferramentas, aplicacoes e, principalmente, as estrategias para monetiza-las." },
      { type: "divider" },
      { type: "heading", content: "IA para Texto e Estrategia" },
      { type: "text", content: "Esta e talvez a forma mais acessivel e versatil de IA. Modelos de linguagem como o GPT-4 da OpenAI, o Claude 3 da Anthropic e o Gemini do Google sao cerebros digitais capazes de entender, gerar e analisar linguagem humana com uma sofisticacao impressionante. Eles sao a base para a criacao de conteudo, comunicacao e planejamento estrategico em escala." },
      { type: "table", rows: [
        ["Ferramentas", "Aplicacoes Estrategicas", "Como Monetizar"],
        ["GPT-4, Claude 3, Gemini", "Copywriting, scripts de vendas, roteiros de videos", "Vender servicos de copywriting para empresas"],
        ["Jasper, Copy.ai", "Funis de vendas, propostas de valor, ofertas irresistiveis", "Consultoria de funis de vendas completos"],
        ["ManyChat, Intercom", "Chatbots, atendimento 24/7, analise de sentimento", "Implementacao e gestao de chatbots para empresas"]
      ] },
      { type: "divider" },
      { type: "heading", content: "IA para Imagens e Criativos" },
      { type: "text", content: "A capacidade da IA de gerar imagens a partir de texto (text-to-image) abriu um novo universo para branding, publicidade e criacao de produtos. Ferramentas como Midjourney, DALL-E 3 e Stable Diffusion transformam ideias em visuais impactantes em questao de segundos, democratizando o design de alta qualidade." },
      { type: "table", rows: [
        ["Ferramentas", "Aplicacoes Estrategicas", "Como Monetizar"],
        ["Midjourney, DALL-E 3", "Criativos para anuncios de alto impacto, campanhas em Meta Ads", "Pacotes de criativos para gestores de trafego"],
        ["Canva (com IA)", "Branding, identidade visual, logotipos", "Servico de 'Branding em 24 horas'"],
        ["Magnific.ai, Krea.ai", "Capas de ebooks, mockups, ilustracoes", "Criar e vender PLRs com design premium"]
      ] },
      { type: "divider" },
      { type: "heading", content: "IA para Video" },
      { type: "text", content: "A geracao e edicao de video com IA esta avancando a uma velocidade estonteante. Ferramentas como Runway, Pika Labs, Synthesia e HeyGen estao permitindo a criacao de conteudo em video que antes exigia equipes de producao e orcamentos elevados, tornando-se uma arma poderosa para engajamento e construcao de autoridade." },
      { type: "table", rows: [
        ["Ferramentas", "Aplicacoes Estrategicas", "Como Monetizar"],
        ["Runway, Pika Labs", "Conteudo viral para TikTok, Reels e Shorts", "Gerenciar canais dark para nichos especificos"],
        ["Synthesia, HeyGen", "VSLs com avatares realistas, sem necessidade de gravar", "Servico de criacao de VSLs para empresas"],
        ["Opus Clip, CapCut AI", "Cortes automaticos, legendas, edicao rapida", "Servicos de cortes para influenciadores e podcasters"]
      ] },
      { type: "divider" },
      { type: "heading", content: "IA para Automacao" },
      { type: "text", content: "A automacao com IA e o motor que permite a escala. Ela conecta as outras IAs e as coloca para trabalhar de forma orquestrada, gerenciando processos e interacoes sem intervencao humana direta. E aqui que a verdadeira maquina de faturamento e construida." },
      { type: "table", rows: [
        ["Ferramentas", "Aplicacoes Estrategicas", "Como Monetizar"],
        ["ManyChat, Botpress", "Atendimento e qualificacao 24/7 no Instagram e WhatsApp", "Sistemas de automacao para negocios locais"],
        ["Zapier, Make", "Follow-up inteligente, integracao de processos", "Consultoria de otimizacao de processos"],
        ["APIs customizadas", "Escala de conversas, gerenciar milhares de vendas", "Solucoes sob medida para grandes players"]
      ] },
      { type: "highlight", content: "Nao se apaixone pela ferramenta, apaixone-se pelo problema que ela resolve. O erro mais comum e tentar usar uma IA da moda sem ter uma estrategia clara de como ela se encaixa no seu modelo de negocio e resolve uma dor real do seu cliente. A ferramenta e o meio, nao o fim." },
      { type: "text", content: "Ao dominar a aplicacao estrategica dessas quatro categorias de IA, voce deixa de ser um mero espectador da revolucao tecnologica e se torna um arquiteto de sistemas de faturamento inteligentes e escalaveis." },
    ],
  },
  {
    id: 4,
    number: "04",
    title: "IA Como Fabrica de Produtos Digitais",
    description: "Crie ebooks, cursos e PLRs em horas. Ferramentas automaticas e estrategias de venda.",
    image: "/images/digital-products.jpg",
    readTime: "20 min de leitura",
    blocks: [
      { type: "image", src: "/images/digital-products.jpg", alt: "Produtos digitais", caption: "A IA transforma a criacao de produtos digitais de semanas para horas." },
      { type: "heading", content: "A Fabrica de Produtos da Nova Era" },
      { type: "text", content: "No mercado digital, a criacao de produtos e a espinha dorsal de muitos negocios lucrativos. No entanto, o processo tradicional de pesquisa, escrita, design e lancamento pode ser demorado e custoso. A Inteligencia Artificial surge como uma verdadeira fabrica de produtos digitais, permitindo que empreendedores criem ativos de alta qualidade em uma fracao do tempo e do custo, transformando ideias em fontes de renda escalaveis." },
      { type: "divider" },
      { type: "heading", content: "Criacao de eBooks com IA: Roteiro de 7 Dias" },
      { type: "text", content: "EBooks sao um dos produtos digitais mais populares e acessiveis para comecar. Com a IA, voce pode criar um eBook premium, com centenas de paginas, em questao de dias:" },
      { type: "list", items: [
        "Dia 1-2: Pesquisa e Estrutura com IA (GPT-4, Claude 3, Gemini). Use a IA para pesquisar profundamente o nicho, identificar as dores e desejos do publico-alvo, e gerar um indice detalhado e uma estrutura de capitulos. Peca a IA para atuar como um 'especialista em marketing digital' ou 'escritor de best-sellers' para obter os melhores resultados.",
        "Dia 3-5: Escrita e Refinamento com IA (GPT-4, Claude 3, Jasper.ai). Com o indice em maos, use a IA para gerar o conteudo de cada capitulo. Nao aceite a primeira versao. Peca a IA para expandir, aprofundar, adicionar exemplos, estatisticas e reescrever paragrafos para diferentes tons. Lembre-se de que a IA e um assistente, nao um substituto. Seu papel e refinar, adicionar sua voz e garantir a qualidade.",
        "Dia 6: Design da Capa e Diagramacao com IA (Midjourney, DALL-E 3, Canva, Gamma). Crie uma capa profissional e atraente usando IA. Descreva o estilo, cores e elementos que deseja. O objetivo e ter um produto visualmente impecavel que transmita profissionalismo.",
        "Dia 7: Criacao da Pagina de Vendas e Oferta (GPT-4, Claude 3, Copy.ai). Use a IA para gerar a copy da sua pagina de vendas, focando nos beneficios, na dor que o eBook resolve e na transformacao que ele oferece. Crie diferentes versoes de titulos e chamadas para acao (CTAs) para testar."
      ] },
      { type: "divider" },
      { type: "heading", content: "Ferramentas que Geram Produtos Automaticamente" },
      { type: "text", content: "Alem dos modelos de linguagem, existem ferramentas mais especializadas que automatizam ainda mais a criacao de produtos:" },
      { type: "list", items: [
        "Menus IA e Similares: Plataformas que permitem criar e-books, guias e ate cursos completos a partir de um tema central, com pouca intervencao manual.",
        "Gamma: Uma ferramenta que transforma textos e outlines em apresentacoes e documentos visualmente atraentes, ideal para criar guias e relatorios que podem ser vendidos como produtos digitais.",
        "Ferramentas de PLR (Private Label Rights) com IA: Plataformas que oferecem conteudo PLR que pode ser reescrito e adaptado com IA para criar produtos unicos e com sua marca."
      ] },
      { type: "divider" },
      { type: "heading", content: "Como Vender Produtos Criados com IA" },
      { type: "text", content: "A criacao e apenas metade da batalha; a venda e a outra. A IA tambem pode otimizar esse processo:" },
      { type: "list", items: [
        "Paginas de Vendas Otimizadas por IA: Use IA para testar diferentes copies, layouts e elementos visuais para sua pagina de vendas, identificando o que converte melhor.",
        "Anuncios com Criativos Gerados por IA: Crie uma variedade de imagens e videos para seus anuncios, testando diferentes abordagens e publicos.",
        "Funis de Vendas Automatizados: Implemente chatbots e sequencias de e-mail marketing (com copy gerada por IA) para nutrir leads e fechar vendas automaticamente.",
        "Canais de venda: Hotmart, Kiwify, Eduzz (marketplaces), venda direta por WhatsApp, funis no Instagram."
      ] },
      { type: "divider" },
      { type: "heading", content: "Modelos de Faturamento" },
      { type: "table", rows: [
        ["Modelo", "Descricao", "Esforco", "Escalabilidade"],
        ["Renda Ativa", "Prestacao de servicos otimizada com IA (social media, copy, edicao). Produz 10x mais rapido.", "Alto", "Baixa"],
        ["Semi-Passiva", "Produtos digitais criados uma vez e vendidos repetidamente (ebooks, PLRs, cursos, templates).", "Medio", "Alta"],
        ["Renda Passiva", "Sistemas de automacao total que vendem e entregam sem sua presenca (funis automaticos, bots, SaaS).", "Baixo", "Infinita"]
      ] },
      { type: "highlight", content: "Metodo tradicional: ~3 semanas. Metodo com IA: ~2 horas. Crie uma vez, venda infinitas vezes. Escalabilidade total. O objetivo final e criar ativos digitais -- produtos que, uma vez criados, podem ser vendidos repetidamente sem retrabalho significativo." },
    ],
  },
  {
    id: 5,
    number: "05",
    title: "A Psicologia da Venda: Usando a Dor do Cliente",
    description: "Usando a dor do cliente de forma etica e estrategica para acelerar decisoes de compra.",
    image: "/images/sales-psychology.jpg",
    readTime: "20 min de leitura",
    blocks: [
      { type: "image", src: "/images/sales-psychology.jpg", alt: "Psicologia de vendas", caption: "Entender a mente do consumidor e a chave para vendas consistentes." },
      { type: "heading", content: "O Coracao de Toda Venda" },
      { type: "text", content: "Enquanto a Inteligencia Artificial nos oferece ferramentas sem precedentes para escalar a producao e a automacao, o coracao de qualquer venda bem-sucedida reside na compreensao profunda da psicologia humana. Vender nao e sobre empurrar um produto; e sobre entender as necessidades, os desejos e, acima de tudo, as dores do seu cliente." },
      { type: "divider" },
      { type: "heading", content: "O Que e a Dor do Cliente" },
      { type: "text", content: "A 'dor do cliente' refere-se a um problema, frustracao, desafio ou necessidade nao atendida que seu publico-alvo experimenta. E o ponto de atrito que os impede de alcancar um objetivo ou de viver uma vida mais plena. As pessoas compram por dor, nao por logica. Embora a logica possa justificar uma compra, a emocao (muitas vezes gerada pela dor) e o que impulsiona a decisao inicial." },
      { type: "text", content: "Neurociencia da Decisao: Nosso cerebro e programado para evitar a dor e buscar o prazer. O sistema limbico, responsavel pelas emocoes, e o cerebro reptiliano, focado na sobrevivencia, reagem muito mais rapidamente a estimulos de dor e ameaca do que o neocortex, responsavel pelo raciocinio logico. Quando voce toca na dor do cliente, voce ativa uma resposta emocional primaria que acelera o processo de decisao de compra. A logica entra em cena apenas para racionalizar a decisao emocional ja tomada." },
      { type: "divider" },
      { type: "heading", content: "Dor Superficial vs Dor Profunda" },
      { type: "list", items: [
        "Dor Superficial: E o que o cliente expressa abertamente. Ex: 'Preciso de um software para gerenciar minhas financas.' E a ponta do iceberg.",
        "Dor Profunda: E a causa subjacente, a emocao real por tras da dor superficial. Ex: 'Preciso de um software para gerenciar minhas financas porque estou perdendo dinheiro, nao consigo pagar minhas contas no final do mes, sinto-me um fracasso e tenho medo de nao conseguir sustentar minha familia.' E o que realmente impulsiona a busca por uma solucao."
      ] },
      { type: "highlight", content: "Seu objetivo como vendedor ou estrategista e ir alem da dor superficial e tocar na dor profunda. E ai que reside o poder de uma oferta irresistivel." },
      { type: "divider" },
      { type: "heading", content: "Como Identificar Dores Escondidas" },
      { type: "text", content: "Identificar dores escondidas exige mais do que uma simples pesquisa de mercado. Requer empatia, escuta ativa e a capacidade de ler nas entrelinhas. Aqui estao algumas tecnicas:" },
      { type: "list", items: [
        "Escuta Ativa em Conversas de Vendas: Faca perguntas abertas e ouca atentamente as respostas. Preste atencao nao apenas ao que e dito, mas tambem ao tom de voz, as pausas e as emocoes expressas.",
        "Analise de Comentarios e Foruns: Plataformas como Reclame Aqui, grupos de Facebook, foruns de nicho e comentarios em blogs sao minas de ouro para descobrir as frustracoes reais do seu publico. Use a IA para analisar grandes volumes de texto e identificar padroes de dores recorrentes.",
        "Pesquisas e Entrevistas: Realize pesquisas qualitativas e entrevistas em profundidade. Pergunte 'por que' repetidamente para chegar a raiz do problema.",
        "Analise de Dados de Suporte: Se voce ja tem um negocio, os tickets de suporte ao cliente sao uma fonte rica de dores. Quais sao as perguntas mais frequentes? Quais problemas os clientes relatam?"
      ] },
      { type: "divider" },
      { type: "heading", content: "Usando a Dor de Forma Etica" },
      { type: "text", content: "Usar a dor do cliente nao significa manipular ou explorar vulnerabilidades. Significa demonstrar que voce entende profundamente o problema dele e que sua solucao e o caminho mais eficaz para alivia-lo. A etica reside em oferecer uma solucao genuina para uma dor real." },
      { type: "list", items: [
        "Conecte a Dor a Solucao: 'Cansado de perder vendas por falta de tempo? Nossa IA automatiza seu atendimento e multiplica suas conversoes.'",
        "Amplifique a Consequencia da Nao Acao: 'Cada dia sem automacao e um dia de vendas perdidas e clientes insatisfeitos.'",
        "Posicione-se como o Aliviador da Dor: Mostre que voce nao apenas entende, mas tem a capacidade de oferecer o alivio desejado."
      ] },
      { type: "text", content: "A dor cria urgencia. Quando um cliente sente que um problema esta causando sofrimento (financeiro, emocional, de tempo), ele busca uma solucao imediata. Ao tocar nessa dor e apresentar sua oferta como o alivio, voce encurta o ciclo de vendas e acelera a decisao de compra. E por isso que as ofertas mais eficazes sao aquelas que se posicionam como a 'aspirina' para uma 'dor de cabeca' intensa." },
      { type: "divider" },
      { type: "heading", content: "Exemplos Reais de Mercado" },
      { type: "list", items: [
        "Emagrecimento: A dor nao e apenas 'estar acima do peso', mas a frustracao com dietas que nao funcionam, a baixa autoestima, a dificuldade em se sentir bem com o proprio corpo. A solucao e vendida como o caminho para aliviar essa dor profunda.",
        "Cursos de Marketing Digital: A dor nao e 'nao saber usar o Instagram', mas a frustracao de nao conseguir clientes, a inseguranca financeira, o medo de ficar para tras no mercado. O curso e vendido como a ferramenta para superar essa dor.",
        "Software de Gestao: A dor nao e 'falta de organizacao', mas o estresse de perder prazos, a perda de dinheiro por ineficiencia, a sensacao de sobrecarga. O software e vendido como a solucao para restaurar a ordem e a produtividade."
      ] },
    ],
  },
  {
    id: 6,
    number: "06",
    title: "Perguntas que Revelam a Dor do Cliente",
    description: "Venda consultiva: perguntas de consequencia, custo, tentativa e impedimento.",
    image: "/images/sales-psychology.jpg",
    readTime: "18 min de leitura",
    blocks: [
      { type: "heading", content: "Voce e um Medico, Nao um Vendedor" },
      { type: "text", content: "Imagine ir a um medico que, antes mesmo de voce descrever seus sintomas, ja tenta te vender um remedio. Absurdo, certo? No entanto, muitos vendedores agem exatamente assim. A venda consultiva inverte essa logica. Ela se baseia em:" },
      { type: "list", items: [
        "Diagnostico: Fazer as perguntas certas para entender a situacao atual do cliente, seus desafios e suas aspiracoes.",
        "Prognostico: Ajudar o cliente a visualizar as consequencias de nao resolver o problema (a dor) e os beneficios de resolve-lo (o prazer).",
        "Prescricao: Apresentar sua solucao como a cura ideal para a dor diagnosticada."
      ] },
      { type: "text", content: "Seu papel e guiar o cliente a descobrir a profundidade de sua propria dor, para que ele chegue a conclusao de que precisa da sua ajuda." },
      { type: "divider" },
      { type: "heading", content: "O Arsenal de Perguntas Estrategicas" },
      { type: "text", content: "As perguntas a seguir sao projetadas para ir alem do superficial, cutucando a dor e revelando as motivacoes mais profundas do seu cliente. Elas devem ser usadas com empatia e curiosidade genuina, nao como um interrogatorio." },
      { type: "subheading", content: "1. Perguntas de Consequencia" },
      { type: "text", content: "Objetivo: Fazer o cliente refletir sobre o custo futuro da inacao. A dor de hoje pode ser suportavel, mas a dor amplificada no futuro e mais impactante." },
      { type: "list", items: [
        "'Se voce continuar com essa dificuldade em gerar leads, o que isso significa para o crescimento do seu negocio nos proximos 6 meses?'",
        "'Qual o impacto de nao ter um funil de vendas automatizado na sua qualidade de vida e no seu tempo livre?'",
        "'O que acontece se seus concorrentes comecarem a usar IA e voce nao?'"
      ] },
      { type: "subheading", content: "2. Perguntas de Custo" },
      { type: "text", content: "Objetivo: Quantificar a dor em termos financeiros, de tempo ou de oportunidade. Muitas vezes, o cliente nao percebe o quanto ja esta perdendo." },
      { type: "list", items: [
        "'Considerando o tempo que voce gasta manualmente com essa tarefa, quanto isso representa em horas de trabalho por semana?'",
        "'Quantas vendas voce acredita que perdeu no ultimo mes por nao ter um atendimento rapido no WhatsApp?'",
        "'Qual o custo de oportunidade de nao ter um produto digital escalavel hoje?'"
      ] },
      { type: "subheading", content: "3. Perguntas de Tentativa" },
      { type: "text", content: "Objetivo: Entender o historico do cliente, suas tentativas e frustracoes. Isso ajuda a posicionar sua solucao como algo diferente e mais eficaz." },
      { type: "list", items: [
        "'Quais estrategias de trafego voce ja aplicou e quais foram os resultados?'",
        "'Voce ja tentou alguma ferramenta de automacao? O que deu certo e o que nao deu?'",
        "'Como voce tem feito para criar conteudo ate agora? Quais foram os maiores desafios?'"
      ] },
      { type: "subheading", content: "4. Perguntas de Impedimento" },
      { type: "text", content: "Objetivo: Identificar as objecoes e crencas limitantes do cliente. Muitas vezes, o problema nao e a falta de solucao, mas o que o impede de agir." },
      { type: "list", items: [
        "'O que te impede de investir em uma solucao de automacao agora?'",
        "'Se voce tivesse todos os recursos e conhecimentos, qual seria o primeiro passo para resolver este problema?'",
        "'Existe algo que te preocupa em relacao a usar IA no seu negocio?'"
      ] },
      { type: "divider" },
      { type: "heading", content: "Quando e Como Usar Cada Pergunta" },
      { type: "table", rows: [
        ["Pergunta", "Momento da Conversa", "Objetivo"],
        ["Consequencia", "Apos o cliente descrever o problema inicial", "Aprofundar a percepcao da dor, mostrando o impacto futuro"],
        ["Custo", "Quando a dor ja esta clara, mas o impacto nao", "Quantificar a dor, tornando-a mais tangivel e urgente"],
        ["Tentativa", "Para entender o historico e objecoes passadas", "Posicionar sua solucao como a alternativa eficaz"],
        ["Impedimento", "Antes de apresentar a solucao ou ao lidar com objecoes", "Revelar as barreiras mentais ou praticas do cliente"]
      ] },
      { type: "highlight", content: "Ouca mais do que fale. O cliente tem as respostas. Seu trabalho e fazer as perguntas certas para que ele as revele. A IA pode ajudar a analisar essas conversas e identificar padroes, mas a arte de perguntar e ouvir e intrinsecamente humana." },
    ],
  },
  {
    id: 7,
    number: "07",
    title: "Metodos de Abordagem que Convertem",
    description: "Playbooks para abordagem organica, Instagram, WhatsApp e pos-anuncio.",
    image: "/images/sales-psychology.jpg",
    readTime: "22 min de leitura",
    blocks: [
      { type: "heading", content: "Vendedor Iniciante vs Profissional" },
      { type: "text", content: "A forma como voce se posiciona e aborda um potencial cliente e determinante para o sucesso da venda. O profissional de vendas entende que a venda e uma consequencia de um bom diagnostico e de uma solucao bem apresentada. Ele nao vende um produto, ele vende uma transformacao." },
      { type: "table", rows: [
        ["Caracteristica", "Vendedor Iniciante", "Profissional de Vendas"],
        ["Foco", "No proprio produto e na comissao", "Na dor do cliente e na solucao que pode oferecer"],
        ["Linguagem", "Fala muito sobre si e sobre as caracteristicas do produto", "Faz perguntas, ouve ativamente, usa a linguagem do cliente"],
        ["Objetivo", "Fechar a venda a qualquer custo", "Construir relacionamento, diagnosticar, agregar valor"],
        ["Postura", "Desesperado, agressivo, 'empurrador'", "Consultivo, empatico, confiante, solucionador"],
        ["Resultado", "Alta taxa de rejeicao, vendas esporadicas", "Alta taxa de conversao, clientes fieis, indicacoes"]
      ] },
      { type: "divider" },
      { type: "heading", content: "Playbook 1: Abordagem Organica" },
      { type: "text", content: "Contexto: Interacoes em grupos, comentarios em posts, mensagens diretas de pessoas que ja seguem seu conteudo. Filosofia: 'De antes de pedir.' O objetivo inicial nao e vender, mas agregar valor e construir autoridade." },
      { type: "list", items: [
        "Identifique a Oportunidade: Alguem fez uma pergunta relevante em um grupo? Comentou em seu post sobre uma dor?",
        "Oferca Ajuda Genuina: Responda a pergunta ou comente sobre a dor com uma dica valiosa, um insight, um pequeno tutorial. Nao mencione seu produto ainda.",
        "Convide para a Conversa: Se a pessoa demonstrou interesse, voce pode dizer: 'Se quiser aprofundar nisso, me manda um direct que te ajudo com mais detalhes.'",
        "No Direct/WhatsApp: Continue agregando valor. So apresente sua solucao se a conversa naturalmente levar a isso e se voce tiver diagnosticado uma dor clara."
      ] },
      { type: "divider" },
      { type: "heading", content: "Playbook 2: Abordagem no Instagram" },
      { type: "text", content: "Filosofia: Use o Instagram como um funil de relacionamento, nao apenas de conteudo." },
      { type: "list", items: [
        "Engajamento Ativo: Responda a todos os comentarios e directs. Curta e comente stories de seguidores engajados.",
        "Stories Estrategicos: Use enquetes e caixas de perguntas para identificar dores e interesses. Ex: 'Qual seu maior desafio com marketing digital?'",
        "Inicie a Conversa: Se alguem responder a uma enquete que revele uma dor, inicie um direct. Ex: 'Vi que voce respondeu que tem dificuldade com leads. Posso te dar uma dica rapida?'",
        "Qualifique e Oferca: Apos algumas trocas de valor, se a dor for confirmada, apresente sua solucao de forma consultiva."
      ] },
      { type: "divider" },
      { type: "heading", content: "Playbook 3: Abordagem no WhatsApp" },
      { type: "text", content: "O WhatsApp e um canal de conversao direta, mas exige personalizacao e agilidade." },
      { type: "list", items: [
        "Primeiro Contato Rapido: Responda o mais rapido possivel. Use um script de abertura amigavel. 'Ola [Nome], vi que voce se interessou por [Produto]. Como posso te ajudar hoje?'",
        "Diagnostico Ativo: Use as perguntas do Capitulo 6 para entender a dor e a necessidade do lead.",
        "Apresentacao Personalizada: Com base no diagnostico, apresente sua oferta focando nos beneficios que resolvem a dor especifica do lead.",
        "Quebra de Objecoes e Fechamento: Esteja preparado para as objecoes e conduza o lead para o fechamento."
      ] },
      { type: "divider" },
      { type: "heading", content: "Playbook 4: Abordagem Pos-Anuncio" },
      { type: "text", content: "O anuncio gerou o interesse; a abordagem converte o interesse em venda." },
      { type: "list", items: [
        "Alinhamento com o Anuncio: A mensagem inicial deve estar alinhada com a promessa do anuncio.",
        "Qualificacao Rapida: Use perguntas curtas para qualificar o lead e entender se ele se encaixa no seu perfil de cliente ideal.",
        "Transicao para Venda Consultiva: Uma vez qualificado, siga os passos da abordagem no WhatsApp ou direcione para uma pagina de vendas otimizada."
      ] },
      { type: "highlight", content: "Ao dominar esses metodos de abordagem, voce transforma cada interacao em uma oportunidade de construir relacionamento, agregar valor e, consequentemente, gerar vendas de forma consistente e profissional." },
    ],
  },
  {
    id: 8,
    number: "08",
    title: "Scripts Profissionais de Conversa",
    description: "Scripts de abertura, diagnostico, apresentacao, quebra de objecao e fechamento.",
    image: "/images/sales-psychology.jpg",
    readTime: "22 min de leitura",
    blocks: [
      { type: "heading", content: "Scripts sao um Mapa, Nao um GPS" },
      { type: "text", content: "Scripts de conversa sao frequentemente mal interpretados como algo robotico e impessoal. No entanto, para o profissional de vendas, um script e um guia estrategico, um mapa que garante que todas as etapas cruciais da conversa sejam abordadas, que as dores sejam diagnosticadas e que a solucao seja apresentada de forma persuasiva. Eles nao engessam a conversa, mas a estruturam, permitindo que voce se concentre na escuta ativa e na empatia." },
      { type: "quote", content: "Scripts sao um mapa, nao um GPS. Eles te dao a direcao, mas voce dirige o carro. Use-os como esqueleto, preenchendo com sua personalidade, sua escuta e as respostas do cliente." },
      { type: "divider" },
      { type: "subheading", content: "1. Script de Abertura: Gerar Rapport e Permissao" },
      { type: "text", content: "Objetivo: Quebrar o gelo, criar uma conexao inicial e obter permissao para continuar a conversa. Seja breve e direto." },
      { type: "list", items: [
        "'Ola [Nome], tudo bem? Meu nome e [Seu Nome] e sou da [Sua Empresa]. Vi que voce demonstrou interesse em [Produto/Servico]. Fico feliz em te ajudar! Posso te fazer algumas perguntas rapidas para entender melhor como posso te auxiliar?'",
        "'Oi [Nome], obrigado por entrar em contato! Para que eu possa te dar a melhor informacao, voce poderia me contar um pouco mais sobre o que te trouxe ate aqui?'",
        "'[Nome], recebi seu contato e estou aqui para te ajudar a [beneficio principal]. Para comecarmos, qual o seu maior desafio hoje em relacao a [topico]?'"
      ] },
      { type: "divider" },
      { type: "subheading", content: "2. Script de Diagnostico: Escuta Ativa" },
      { type: "text", content: "Objetivo: Entender a situacao atual do cliente, suas dores e necessidades. Esta e a fase de escuta ativa." },
      { type: "list", items: [
        "'Entendi, [Nome]. E qual o seu maior desafio hoje em relacao a [problema que ele mencionou]?'",
        "'Se voce nao resolver isso agora, o que voce acredita que pode acontecer com seu negocio nos proximos meses?'",
        "'Voce ja tentou alguma solucao para esse problema? O que funcionou e o que nao funcionou?'",
        "'E o que te impede de resolver essa situacao hoje?'",
        "'Se voce pudesse mudar uma coisa agora para melhorar sua situacao, o que seria?'"
      ] },
      { type: "divider" },
      { type: "subheading", content: "3. Script de Exploracao da Dor" },
      { type: "text", content: "Objetivo: Aprofundar a dor, fazendo o cliente sentir o impacto do problema. Use as respostas dele para validar e amplificar." },
      { type: "list", items: [
        "'Entao, se eu entendi bem, [problema] nao so te causa [consequencia superficial], mas tambem te faz sentir [emocao profunda], e isso ja te custou [dinheiro/tempo] ate agora. E isso mesmo?'",
        "'Percebo que [problema] esta realmente te impedindo de [objetivo]. Como isso afeta seu dia a dia?'",
        "'Muitas pessoas que vem ate mim com [problema] relatam que isso gera [consequencia negativa]. Voce se identifica com isso?'"
      ] },
      { type: "divider" },
      { type: "subheading", content: "4. Script de Apresentacao da Solucao" },
      { type: "text", content: "Objetivo: Apresentar sua solucao como a resposta direta e eficaz para a dor que voce acabou de diagnosticar. Foco nos beneficios, nao nas caracteristicas." },
      { type: "list", items: [
        "'[Nome], com base no que voce me contou sobre [sua dor], acredito que [Meu Produto] pode ser exatamente o que voce precisa. Ele foi desenvolvido para [beneficio principal], e ja ajudou [numero] de pessoas a [resultado desejado].'",
        "'Para resolver [problema especifico], nossa solucao oferece [caracteristica] que te permite [beneficio]. Isso significa que voce finalmente podera [resultado desejado].'",
        "'O que acharia de uma solucao que te permitisse [beneficio 1], [beneficio 2] e [beneficio 3], eliminando de vez [sua dor principal]?'"
      ] },
      { type: "divider" },
      { type: "subheading", content: "5. Script de Quebra de Objecao" },
      { type: "text", content: "Objetivo: Antecipar e neutralizar as objecoes mais comuns. Nao discuta; entenda e reformule." },
      { type: "list", items: [
        "Preco ('Esta caro'): 'Entendo que o investimento e uma consideracao importante. Mas, pensando no custo que voce ja tem com o problema e no retorno que a solucao oferece, voce nao acha que o valor se justifica pela transformacao?'",
        "Tempo ('Nao tenho tempo'): 'Compreendo perfeitamente. E justamente por isso que esta solucao foi criada -- para te economizar tempo, automatizando tarefas e liberando voce para atividades de alto valor.'",
        "Confianca ('Preciso pensar'): 'E natural ter duvidas. Para te dar mais seguranca, oferecemos garantia de satisfacao e posso te mostrar depoimentos de clientes que ja obtiveram resultados.'"
      ] },
      { type: "divider" },
      { type: "subheading", content: "6. Script de Fechamento" },
      { type: "list", items: [
        "'[Nome], com tudo o que conversamos, voce se sente pronto para dar o proximo passo e resolver [dor principal] com nossa solucao?'",
        "'Faz sentido para voce que esta e a melhor solucao para sua situacao? Se sim, qual a melhor forma de prosseguirmos?'",
        "'Considerando os beneficios que a solucao pode trazer para seu negocio, voce gostaria de iniciar hoje?'"
      ] },
      { type: "highlight", content: "A pratica leva a fluidez. Use a IA para gerar variacoes e refinar suas frases, mas a autenticidade e a empatia sao insubstituiveis. O objetivo e que o cliente sinta que esta sendo ajudado, nao vendido." },
    ],
  },
  {
    id: 9,
    number: "09",
    title: "Automacao de WhatsApp com IA",
    description: "Atendimento 24h, qualificacao automatica, funil de vendas e follow-up inteligente.",
    image: "/images/automation-flow.jpg",
    readTime: "18 min de leitura",
    blocks: [
      { type: "image", src: "/images/automation-flow.jpg", alt: "Automacao de WhatsApp", caption: "A automacao transforma seu WhatsApp em uma maquina de vendas 24/7." },
      { type: "heading", content: "WhatsApp: O Canal de Vendas Mais Poderoso" },
      { type: "text", content: "O WhatsApp se tornou o canal de comunicacao preferencial para milhoes de pessoas e, consequentemente, um dos mais poderosos canais de vendas e atendimento. No entanto, gerenciar um grande volume de conversas manualmente e inviavel para a escala. E aqui que a Automacao de WhatsApp com IA entra como um divisor de aguas, transformando seu atendimento em uma maquina de vendas 24 horas por dia, 7 dias por semana." },
      { type: "divider" },
      { type: "heading", content: "Atendimento 24h e Qualificacao Automatica" },
      { type: "text", content: "Imagine que um lead chega no seu WhatsApp as 3 da manha. Sem automacao, ele esperaria horas por uma resposta, esfriando o interesse. Com a IA, um chatbot pode:" },
      { type: "list", items: [
        "Responder Instantaneamente: Saudando o lead e oferecendo opcoes de atendimento.",
        "Qualificar o Lead: Fazer perguntas pre-definidas para entender a necessidade do cliente (ex: 'Voce busca um produto, um servico ou uma mentoria?').",
        "Segmentar: Direcionar o lead para o funil correto ou para um atendente humano especializado, caso necessario."
      ] },
      { type: "text", content: "Isso garante que nenhum lead seja perdido por falta de agilidade e que seu time (ou voce) receba apenas leads ja pre-qualificados." },
      { type: "divider" },
      { type: "heading", content: "Funil de Vendas e Follow-up Inteligente" },
      { type: "text", content: "A automacao no WhatsApp permite construir funis de vendas completos e personalizados:" },
      { type: "list", items: [
        "Captura: O lead chega via anuncio, link na bio ou QR Code.",
        "Boas-Vindas e Qualificacao: O chatbot interage, qualifica e coleta informacoes essenciais.",
        "Apresentacao da Oferta: Com base na qualificacao, o chatbot pode apresentar a oferta mais relevante.",
        "Quebra de Objecoes: Scripts pre-definidos com IA podem responder as objecoes mais comuns.",
        "Follow-up: Se o lead nao comprar de imediato, a IA pode enviar mensagens de follow-up em intervalos estrategicos, com conteudo de valor ou lembretes da oferta."
      ] },
      { type: "highlight", content: "Exemplo: Um lead demonstra interesse em um eBook sobre IA. O chatbot envia o link. Se ele nao comprar em 24h, o chatbot envia um depoimento de outro cliente. Se ainda nao comprar em 48h, envia um bonus exclusivo. Tudo de forma automatica e personalizada." },
      { type: "divider" },
      { type: "heading", content: "Escala de Vendas" },
      { type: "text", content: "Empresas que faturam alto com automacao de WhatsApp entendem que o segredo esta na capacidade de gerenciar milhares de conversas simultaneamente, mantendo a personalizacao:" },
      { type: "list", items: [
        "Gerenciar Multiplos Atendimentos: Um unico chatbot pode atender centenas ou milhares de clientes ao mesmo tempo.",
        "Personalizacao em Massa: A IA usa dados coletados para personalizar as mensagens, fazendo com que cada cliente sinta uma conversa individualizada.",
        "Recuperacao de Carrinho: Enviar mensagens automaticas para clientes que abandonaram o carrinho.",
        "Lancamentos e Campanhas: Disparar mensagens segmentadas para listas de leads em lancamentos de produtos."
      ] },
      { type: "quote", content: "Case de Sucesso: Uma empresa de educacao online implementou um chatbot no WhatsApp que qualifica leads, envia materiais gratuitos e direciona para a pagina de vendas. Em um mes, reduziram o tempo de resposta em 90% e aumentaram as vendas em 30%." },
      { type: "divider" },
      { type: "heading", content: "Ferramentas e Implementacao" },
      { type: "text", content: "Ferramentas como ManyChat, Botmaker e APIs do WhatsApp Business permitem a criacao desses fluxos. A implementacao envolve:" },
      { type: "list", items: [
        "Mapeamento do Funil: Desenhar o caminho que o cliente deve percorrer.",
        "Criacao dos Scripts: Usar IA para gerar as mensagens e respostas do chatbot.",
        "Configuracao da Ferramenta: Conectar o WhatsApp a plataforma de automacao.",
        "Testes e Otimizacao: Monitorar as metricas e ajustar o fluxo para maximizar a conversao."
      ] },
    ],
  },
  {
    id: 10,
    number: "10",
    title: "Automacao de Instagram com IA",
    description: "Respostas automaticas, conteudo com IA, funis no direct e conversao de seguidores.",
    image: "/images/automation-flow.jpg",
    readTime: "18 min de leitura",
    blocks: [
      { type: "heading", content: "Instagram: Sua Vitrine Digital" },
      { type: "text", content: "O Instagram e uma das maiores vitrines digitais do mundo, com bilhoes de usuarios ativos. Para empreendedores, ele representa uma oportunidade gigantesca de construir marca, engajar audiencia e vender. No entanto, a gestao manual de interacoes em larga escala e um gargalo. A Automacao de Instagram com IA surge como a solucao para transformar seu perfil em um funil de vendas e relacionamento ativo 24 horas por dia." },
      { type: "divider" },
      { type: "heading", content: "Respostas Automaticas em Direct e Comentarios" },
      { type: "list", items: [
        "Responder a DMs Instantaneamente: Configurar respostas automaticas para palavras-chave especificas. Ex: se alguem digitar 'preco', o bot envia informacoes sobre seus produtos.",
        "Engajar em Comentarios: Responder automaticamente a comentarios em posts, direcionando para o direct para continuar a conversa.",
        "Qualificar Leads: Fazer perguntas no direct para entender a necessidade do usuario e direciona-lo para a solucao certa."
      ] },
      { type: "divider" },
      { type: "heading", content: "Conteudo Automatico e Funis no Instagram" },
      { type: "list", items: [
        "Geracao de Ideias de Conteudo: Use IA para gerar ideias de posts, legendas, roteiros de Reels e Stories com base em tendencias.",
        "Criacao de Conteudo Visual: Com as IAs de imagem e video, voce pode criar criativos e videos curtos em massa.",
        "Funis de Vendas no Direct: Crie sequencias de mensagens automaticas que guiam o usuario desde o interesse ate a oferta final."
      ] },
      { type: "divider" },
      { type: "heading", content: "Conversao de Seguidores em Clientes" },
      { type: "list", items: [
        "Segmentacao de Audiencia: A IA analisa o comportamento dos seguidores e segmenta para ofertas mais relevantes.",
        "Campanhas de Mensagens Diretas: Enviar mensagens personalizadas para segmentos especificos.",
        "Recuperacao de Carrinho no Direct: Identificar usuarios que nao finalizaram a compra e enviar lembretes."
      ] },
      { type: "quote", content: "Case de Sucesso: Um influenciador digital utilizou automacao no Instagram para qualificar leads que respondiam a enquetes nos stories. Os leads qualificados eram automaticamente direcionados para um funil de vendas no direct, resultando em um aumento de 25% nas vendas em apenas um mes." },
      { type: "divider" },
      { type: "heading", content: "Ferramentas e Melhores Praticas" },
      { type: "list", items: [
        "Transparencia: Sempre deixe claro que o usuario esta interagindo com um bot.",
        "Opcao Humana: Oferca sempre a opcao de falar com um atendente humano.",
        "Testes Constantes: Monitore as metricas de engajamento e conversao e otimize seus fluxos.",
        "Conteudo de Valor: Mesmo automatizado, o conteudo deve ser relevante e agregar valor ao usuario."
      ] },
    ],
  },
  {
    id: 11,
    number: "11",
    title: "Trafego Pago para Escala (Meta Ads)",
    description: "Como funciona o Meta Ads, estrutura de campanhas, criativos, copy e orcamento.",
    image: "/images/scaling-growth.jpg",
    readTime: "22 min de leitura",
    blocks: [
      { type: "image", src: "/images/scaling-growth.jpg", alt: "Trafego pago e escala", caption: "O trafego pago e o motor que impulsiona sua maquina de vendas para a escala." },
      { type: "heading", content: "O Motor da Escala" },
      { type: "text", content: "Para alcancar um faturamento verdadeiramente alto e escalavel, e preciso levar sua mensagem a um publico massivo e qualificado. E aqui que o Trafego Pago, especificamente o Meta Ads (Facebook e Instagram Ads), entra em cena como o motor que impulsiona sua maquina de vendas." },
      { type: "divider" },
      { type: "heading", content: "Como Funciona o Meta Ads" },
      { type: "text", content: "O Meta Ads e a plataforma de publicidade do Facebook, que permite criar anuncios e exibi-los para bilhoes de usuarios no Facebook, Instagram, Messenger e Audience Network. Diferente do trafego organico, onde voce espera que as pessoas encontrem seu conteudo, no trafego pago voce paga para que seu conteudo seja exibido para um publico especifico." },
      { type: "subheading", content: "Glossario Essencial" },
      { type: "list", items: [
        "CPM (Custo por Mil Impressoes): Quanto voce paga a cada mil vezes que seu anuncio e exibido.",
        "CTR (Click-Through Rate): A porcentagem de pessoas que viram seu anuncio e clicaram nele. Um CTR alto indica um anuncio relevante.",
        "CPC (Custo por Clique): Quanto voce paga por cada clique no seu anuncio.",
        "CPA (Custo por Aquisicao): Quanto voce paga para conseguir um cliente ou uma venda.",
        "ROAS (Return On Ad Spend): O retorno sobre o investimento em anuncios. Se voce investiu R$100 e faturou R$300, seu ROAS e 3x."
      ] },
      { type: "divider" },
      { type: "heading", content: "Estrutura de Campanhas" },
      { type: "list", items: [
        "Campanha: Nivel superior com objetivo principal (Vendas, Geracao de Leads).",
        "Conjuntos de Anuncios: Define publico-alvo, orcamento e posicionamento.",
        "Publico Frio: Pessoas que nunca ouviram falar de voce. Use interesses amplos.",
        "Publico Morno: Pessoas que ja interagiram (visitou site, assistiu video). Publicos personalizados e lookalike.",
        "Publico Quente: Pessoas com grande interesse (carrinho, checkout). Remarketing agressivo.",
        "Anuncios: Pecas criativas (imagem, video, texto). Teste 3 a 5 criativos por conjunto."
      ] },
      { type: "divider" },
      { type: "heading", content: "Criativos e Copy com IA" },
      { type: "text", content: "Seu anuncio precisa se destacar no feed. A IA e uma aliada poderosa na criacao de criativos e copies que vendem:" },
      { type: "list", items: [
        "Use IAs de imagem e video para gerar criativos de alta qualidade que chamem a atencao. Teste diferentes formatos (carrossel, video curto, imagem estatica).",
        "A copy do anuncio deve ser concisa, persuasiva e focada na dor do cliente.",
        "Use as tecnicas de copywriting para criar titulos impactantes e descricoes que gerem curiosidade."
      ] },
      { type: "divider" },
      { type: "heading", content: "Orcamento: Como Comecar de Forma Segura" },
      { type: "list", items: [
        "Orcamento Inicial: Comece com R$20 a R$50 por dia. Suficiente para testar publicos e criativos.",
        "Foco em Testes: Nos primeiros dias, seu objetivo e coletar dados. Nao espere ROAS altissimo de imediato.",
        "Escala Gradual: Quando encontrar criativos que geram lucro, aumente o orcamento gradualmente (10-20% por dia) para nao quebrar o algoritmo."
      ] },
      { type: "highlight", content: "Nunca 'pause e duplique' campanhas que estao performando bem. Isso reseta o aprendizado do algoritmo. Faca ajustes incrementais ou crie novas campanhas do zero para testar grandes mudancas." },
    ],
  },
  {
    id: 12,
    number: "12",
    title: "Scripts de Anuncios que Vendem",
    description: "Frameworks AIDA, PAS e copies persuasivas com IA para anuncios de alto desempenho.",
    image: "/images/scaling-growth.jpg",
    readTime: "20 min de leitura",
    blocks: [
      { type: "heading", content: "A Arte do Anuncio que Converte" },
      { type: "text", content: "Um anuncio eficaz nao e apenas uma imagem bonita ou um video chamativo. E uma mensagem cuidadosamente elaborada para capturar a atencao, despertar o interesse, gerar desejo e levar a acao. A copy do anuncio e o coracao dessa mensagem, e a Inteligencia Artificial pode ser sua maior aliada na criacao de scripts que vendem." },
      { type: "divider" },
      { type: "subheading", content: "1. Copy Focada na DOR" },
      { type: "text", content: "Estrutura: Comece identificando uma dor comum do seu publico, aprofunde-se nas consequencias dessa dor e apresente sua solucao como o alivio." },
      { type: "list", items: [
        "Titulo: 'Cansado de terminar o dia exausto e com a sensacao de que nao fez nada?'",
        "Corpo: 'Voce se sente sobrecarregado com a quantidade de tarefas e a falta de tempo? A procrastinacao virou sua sombra? Isso acontece porque voce ainda nao domina as tecnicas de produtividade da nova era. A boa noticia e que a IA pode ser sua maior aliada.'",
        "CTA: 'Descubra como usar a IA para multiplicar sua produtividade e ter mais tempo livre. Baixe nosso eBook agora!'"
      ] },
      { type: "divider" },
      { type: "subheading", content: "2. Copy Focada no DESEJO" },
      { type: "text", content: "Estrutura: Pinte um cenario ideal, despertando o desejo do cliente por um resultado especifico, e posicione sua solucao como o caminho." },
      { type: "list", items: [
        "Titulo: 'Imagine faturar 5 digitos por mes trabalhando apenas 4 horas por dia, com a IA fazendo o trabalho pesado!'",
        "Corpo: 'Parece bom demais para ser verdade? Mas e a realidade de quem aprendeu a alavancar a IA. O segredo nao e trabalhar mais, e trabalhar de forma mais inteligente.'",
        "CTA: 'Desvende os metodos que os top players usam para faturar alto com IA. Inscreva-se!'"
      ] },
      { type: "divider" },
      { type: "subheading", content: "3. Copy Focada na PROVA SOCIAL" },
      { type: "list", items: [
        "Titulo: '+30% de vendas em 30 dias? Veja como a empresa X alcancou esse resultado!'",
        "Corpo: 'A empresa estava perdendo leads por falta de agilidade no atendimento. Implementamos nosso sistema de IA para WhatsApp e, em apenas um mes, eles recuperaram centenas de vendas.'",
        "CTA: 'Quer resultados como esses? Clique e agende uma demonstracao gratuita!'"
      ] },
      { type: "divider" },
      { type: "subheading", content: "4. Copy Focada na AUTORIDADE" },
      { type: "list", items: [
        "Titulo: 'O Futuro da IA nos Negocios: O que os grandes players nao querem que voce saiba.'",
        "Corpo: 'Em um mercado saturado de informacoes superficiais, poucos realmente entendem o impacto disruptivo da IA. Nosso especialista, com 15 anos de experiencia, vai revelar as estrategias secretas que estao gerando milhoes.'",
        "CTA: 'Garanta sua vaga no webinar exclusivo e esteja a frente da concorrencia!'"
      ] },
      { type: "divider" },
      { type: "subheading", content: "5. Copy Focada na CURIOSIDADE" },
      { type: "list", items: [
        "Titulo: 'O que 99% dos empreendedores digitais estao fazendo de errado com a IA?'",
        "Corpo: 'Voce usa ChatGPT? Otimo. Mas voce esta usando da forma que realmente gera lucro? Existe um metodo pouco conhecido que transforma a IA em uma maquina de vendas silenciosa.'",
        "CTA: 'Clique e descubra o metodo secreto que vai revolucionar seus resultados com IA!'"
      ] },
      { type: "divider" },
      { type: "heading", content: "Como a IA Otimiza a Criacao de Scripts" },
      { type: "list", items: [
        "Geracao de Variacoes: Peca a IA para gerar 10 variacoes de um script, focando em diferentes dores ou desejos. Isso acelera seus testes A/B.",
        "Analise de Publico: Use a IA para analisar comentarios de clientes e identificar as palavras-chave que mais ressoam com seu publico.",
        "Otimizacao de Titulos: A IA pode sugerir titulos mais impactantes com base em dados de performance de milhoes de anuncios.",
        "Traducao e Adaptacao: Se voce atua em mercados internacionais, a IA pode traduzir e adaptar seus scripts mantendo a persuasao."
      ] },
    ],
  },
  {
    id: 13,
    number: "13",
    title: "Funil Completo: Anuncio a Venda",
    description: "Conectando todas as pecas do funil: anuncio, pagina, WhatsApp e automacao.",
    image: "/images/sales-funnel.jpg",
    readTime: "22 min de leitura",
    blocks: [
      { type: "image", src: "/images/sales-funnel.jpg", alt: "Funil de vendas completo", caption: "O funil completo conecta todas as pecas da sua maquina de faturamento." },
      { type: "heading", content: "O Funil Completo: Todas as Pecas Conectadas" },
      { type: "text", content: "Construir um negocio digital lucrativo nao e sobre ter as melhores ferramentas ou o produto mais inovador; e sobre ter um funil de vendas bem azeitado. Um funil e um caminho estrategico que guia um potencial cliente desde o primeiro contato ate a compra, e alem. Neste capitulo, vamos unir todas as pecas que discutimos -- IA, psicologia da venda, abordagens e scripts -- em um funil completo e otimizado." },
      { type: "divider" },
      { type: "subheading", content: "Etapa 1: Anuncio (Meta Ads)" },
      { type: "text", content: "Objetivo: Atrair o publico certo, despertando uma dor ou desejo. A IA ajuda com geracao de criativos e copies otimizadas, segmentacao de publico-alvo, otimizacao de lances. Metrica Chave: CTR (Click-Through Rate)." },
      { type: "subheading", content: "Etapa 2: Pagina de Captura / WhatsApp" },
      { type: "text", content: "Objetivo: Converter o clique em um lead, obtendo seu contato (e-mail, WhatsApp). A IA ajuda com otimizacao da copy da pagina, testes A/B de elementos, automacao da coleta de dados. Metrica Chave: Taxa de Conversao da Landing Page." },
      { type: "subheading", content: "Etapa 3: Automacao (Bot de Qualificacao)" },
      { type: "text", content: "Objetivo: Filtrar leads, identificar os mais promissores e coletar informacoes cruciais para a venda. Chatbots inteligentes que fazem perguntas de qualificacao, segmentam leads e respondem a duvidas frequentes. Metrica Chave: Taxa de Qualificacao de Leads." },
      { type: "subheading", content: "Etapa 4: Conversa (Humano/IA)" },
      { type: "text", content: "Objetivo: Engajar o lead qualificado em uma conversa consultiva, aprofundando a dor e apresentando a solucao. A IA sugere respostas, analisa sentimento da conversa e automatiza partes dela. Metrica Chave: Taxa de Agendamento/Proposta." },
      { type: "subheading", content: "Etapa 5: Venda" },
      { type: "text", content: "Objetivo: Fechar a venda, transformando o lead em cliente. A IA faz analise preditiva de probabilidade de compra e otimizacao de ofertas com base em dados. Metrica Chave: Taxa de Conversao de Vendas." },
      { type: "subheading", content: "Etapa 6: Follow-up (Automacao)" },
      { type: "text", content: "Objetivo: Manter o relacionamento com leads que nao compraram de imediato, nutrindo-os com conteudo de valor e novas ofertas. Sequencias de e-mails e mensagens automaticas personalizadas. Metrica Chave: Taxa de Reengajamento." },
      { type: "subheading", content: "Etapa 7: Escala / Esteira de Produtos" },
      { type: "text", content: "Objetivo: Oferecer novos produtos e servicos para clientes existentes, aumentando o LTV (Lifetime Value). Identificacao de oportunidades de upsell/cross-sell, criacao rapida de novos produtos digitais. Metrica Chave: LTV, Taxa de Recompra." },
      { type: "divider" },
      { type: "heading", content: "Case Pratico: Funil em Acao" },
      { type: "highlight", content: "Exemplo completo: Anuncio no Meta Ads (criativo gerado por Midjourney, copy por GPT-4) -> Pagina de captura -> E-book gratuito -> WhatsApp automatizado -> Lead qualificado pelo bot -> Oferta do curso principal -> Quebra de objecoes automatizada -> Link de pagamento -> Entrega automatica. Resultado: Investimento de R$500 em ads, 200 leads, 35 vendas de R$197 = R$6.895 de faturamento. ROAS de 13.8x." },
      { type: "text", content: "O poder deste funil reside na sinergia entre todas as suas partes. Um anuncio excelente sem uma boa pagina de captura e dinheiro jogado fora. Uma automacao perfeita sem uma oferta relevante nao vende. A IA atua como o cimento que une essas etapas, otimizando cada transicao e garantindo que o cliente tenha uma jornada fluida e personalizada." },
    ],
  },
  {
    id: 14,
    number: "14",
    title: "Como Escalar para Alto Faturamento",
    description: "Estrategias de escala, ecossistema de produtos e plano de acao de 30 dias.",
    image: "/images/scaling-growth.jpg",
    readTime: "22 min de leitura",
    blocks: [
      { type: "image", src: "/images/scaling-growth.jpg", alt: "Escala e alto faturamento", caption: "Escalar nao e sobre trabalhar mais duro, e sobre construir sistemas inteligentes." },
      { type: "heading", content: "O Tripe da Escala" },
      { type: "text", content: "Chegar ao ponto de ter um funil de vendas funcionando e uma grande conquista. Mas o verdadeiro objetivo de um empreendedor digital e alcancar o alto faturamento e a escala. Isso significa ir alem das vendas pontuais e construir um sistema que gere receita de forma consistente e crescente. A escala nao e um misterio; e a otimizacao de tres pilares fundamentais:" },
      { type: "list", items: [
        "Trafego: Aumentar o numero de pessoas qualificadas que chegam ao seu funil. Trafego pago (Meta Ads, Google Ads, TikTok Ads) e otimizacao do trafego organico (SEO, conteudo viral).",
        "Conversao: Aumentar a porcentagem de pessoas que se tornam clientes. Otimizacao de copy, ofertas, paginas de vendas e qualidade da conversa de vendas.",
        "Esteira de Produtos: Ter uma variedade de produtos e servicos que atendam a diferentes dores e niveis de investimento, aumentando o LTV de cada cliente."
      ] },
      { type: "divider" },
      { type: "heading", content: "Quando Delegar para IA vs Contratar Humanos" },
      { type: "list", items: [
        "Delegue para a IA: Tarefas repetitivas, baseadas em dados, que exigem alta velocidade e volume. Ex: rascunhos de copy, variacoes de criativos, atendimento de primeiras perguntas em chatbots, analise de dados.",
        "Contrate Humanos: Tarefas que exigem criatividade estrategica, empatia profunda, negociacao complexa e construcao de relacionamento. Ex: definicao da estrategia geral, ofertas complexas, vendas de alto ticket, mentoria."
      ] },
      { type: "highlight", content: "A IA nao substitui o humano, mas libera o humano para focar em atividades de maior valor e impacto estrategico. Pense na IA como sua equipe de 'executores' e voce como o 'estrategista-chefe'." },
      { type: "divider" },
      { type: "heading", content: "Conteudo em Massa: Um Mes em Um Dia" },
      { type: "list", items: [
        "Geracao de Ideias: Use a IA para gerar centenas de ideias de posts, videos, artigos e temas para newsletters.",
        "Criacao de Rascunhos: Peca a IA para escrever rascunhos completos de artigos, roteiros de videos, legendas para posts.",
        "Variacoes e Adaptacoes: Transforme um artigo em 10 posts para Instagram, 5 roteiros de TikTok e 3 e-mails.",
        "Criacao de Criativos: Use IAs de imagem e video para gerar os visuais para todo esse conteudo."
      ] },
      { type: "divider" },
      { type: "heading", content: "Onde Vender: Ecossistema de Monetizacao" },
      { type: "table", rows: [
        ["Canal", "Vantagem", "Melhor Para"],
        ["Hotmart", "Lider global, grande marketplace", "Cursos e ebooks"],
        ["Kiwify", "Simples, taxas baixas", "Infoprodutos em geral"],
        ["Novapay", "Taxas baixas, saques rapidos", "Produtos digitais"],
        ["WhatsApp", "Conversao 1-a-1, alta conversao", "Vendas consultivas"],
        ["Instagram", "Vitrine visual, trafego organico", "Construcao de autoridade"],
        ["E-mail Marketing", "Funis automaticos, LTV alto", "Relacionamento de longo prazo"]
      ] },
      { type: "divider" },
      { type: "heading", content: "Plano de Acao: 30 Dias para Seu Primeiro Faturamento" },
      { type: "list", items: [
        "Semana 1 - Definicao: Escolha do modelo de renda, definicao do nicho, selecao das ferramentas de IA. Pesquise as dores do publico com IA.",
        "Semana 2 - Criacao: Producao do produto digital com IA (eBook, curso, template), criacao de materiais de venda, configuracao de contas nas plataformas.",
        "Semana 3 - Estrutura: Configuracao de automacoes (WhatsApp/Instagram), producao de conteudo em massa com IA, testes de fluxo de vendas.",
        "Semana 4 - Lancamento: Inicio das vendas (organico e/ou pago), atendimento automatizado ativo, analise de metricas e otimizacao continua."
      ] },
      { type: "divider" },
      { type: "heading", content: "A Verdade Final" },
      { type: "text", content: "A verdade fundamental sobre ganhar dinheiro com Inteligencia Artificial no mercado digital e esta: nao e magica. A IA nao e uma varinha de condao. Ela e a ferramenta mais poderosa que o empreendedor moderno tem a disposicao, mas seu poder so e liberado quando combinada com elementos humanos essenciais: habilidade, processo e execucao." },
      { type: "text", content: "A IA nao pensa por voce; ela executa. A habilidade de fazer as perguntas certas a IA, de interpretar seus resultados, de refinar suas saidas e de integra-la em uma estrategia maior e uma habilidade humana crucial." },
      { type: "text", content: "O sucesso com IA nao e um evento isolado, mas o resultado de um processo bem definido. Desde a pesquisa de mercado, passando pela criacao de produtos, marketing, vendas e atendimento ao cliente, cada etapa pode ser otimizada pela IA. Mas o processo deve ser desenhado e supervisionado por uma mente estrategica." },
      { type: "quote", content: "Quem domina abordagem + IA domina o jogo. O jogo do faturamento alto na internet nao e sobre quem tem a melhor ferramenta, mas sobre quem melhor entende o ser humano. A IA apenas acelera o seu entendimento e a sua capacidade de execucao." },
      { type: "highlight", content: "O futuro pertence aos estrategistas que abracam a tecnologia como uma extensao de sua propria inteligencia e capacidade. Nao seja apenas um usuario da IA; seja um arquiteto de seu proprio destino digital. A maquina esta pronta. A estrategia esta em suas maos. Comece agora." },
    ],
  },
]
