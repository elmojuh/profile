import Box from "@mui/material/Box";

export default function CiBlockchainTransparency() {
  return (
    <>
      <Box sx={{ width: 900 }} style={{ padding: "40px" }}>
        <h2>Prefácio</h2>
        <br></br>
        <br></br>
        Este resumo pertence a entrega de estudos de minha Iniciação Cientifica
        do ano de 2018-2019(1 ano de estudo). Foi apoiado pelas Orientadoras
        Claudia Cappelli e Bruna Diirr, e também apoiado e financiado pelo
        CAPES-UNIRIO.
        <br></br>
        <br></br>
        Mesmo 1 ano depois da entrega de meus resultados, o assunto ainda se
        revela atual e de fácil entendimento com este resumo e avaliação através
        da visão de transparência de software.
        <br></br>
        <br></br>
        Palavras chave: transparência; blockchain.
        <br></br>
        <br></br>
        <br></br>
        <h2>Introdução</h2>
        <br></br>
        <br></br>
        “A Blockchain é uma tecnologia que fornece um registro crescente de
        todas as transações que já ocorreram em um domínio específico, que são
        protegidas contra modificação e adulteração, permitindo assim a
        confiabilidade das informações armazenadas e o acesso em tempo real a
        essas transações” (Deshpande et al, 2017; Lin & Liao, 2017). Com a
        entrada do Blockchain em setores de moedas virtuais e contratos, e a
        crescente demanda da sociedade sobre a tecnologia, sua relevância ganha
        notoriedade e surgem discussões sobre sua aplicação.
        <br></br>
        <br></br>
        Essa tecnologia permite o registro de todas as transações feitas por um
        domínio, favorecendo a confiabilidade das informações armazenadas, que
        através de uma série de blocos encadeados, registra em cada novo bloco
        os dados estruturados sobre a transação, a data e hora da criação do
        novo bloco e a referência ao bloco anterior; permitindo identificar o
        primeiro bloco através de suas referências anteriores. Além disso,
        garante que as informações sejam protegidas contra adulterações, já que
        qualquer alteração leva à modificação da referência.
        <br></br>
        <br></br>
        Com a chegada de novas tecnologias a Transparência tem sido uma
        preocupação crítica para a sociedade moderna, uma vez que prioridades,
        capacidades, e comportamentos de poderosos centros de autoridade ficam
        amplamente disponíveis ao público. E uma das formas de se avaliar a
        aplicação de características de qualidade específicas é a análise de
        Transparência, que é o conjunto de características que permite aos
        interessados a qualidade da facilidade, qualidade de bom uso, qualidade
        no fornecimento ou transmissão da informação, qualidade de compreensão
        da linguagem usada e capacidade de examinar com a intenção de
        verificação (Leite & Cappelli, 2010).
        <br></br>
        <br></br>
        Essas características tecnológicas sugerem o potencial do Blockchain
        para a promoção da Transparência, uma vez que disponibilizam ao público
        informações sobre prioridades, capacidades e comportamento de poderosos
        centros de autoridade, permitindo que os sistemas governamentais
        combatam o uso indevido de recursos públicos, facilitem o processo de
        auditoria e evitem fraudes (Ølnes & Jansen, 2017; Tapscott & Tapscott,
        2016).
        <br></br>
        <br></br>
        <br></br>
        <h2>Objetivo</h2>
        <br></br>
        <br></br>O objetivo deste trabalho é entender os benefícios e limitações
        em termos de Transparência na tecnologia de Blockchain, através da
        análise de uma solução Blockchain governamental.
        <br></br>
        <br></br>
        <br></br>
        <h2>Metodologia</h2>
        <br></br>
        <br></br>
        Neste trabalho é usada a árvore/catálogo de Transparência como método de
        verificação da Transparência do sistema Blockchain do BNDES, o
        BNDESToken. Com o catálogo é possível obter respostas do quão
        Transparente é o sistema desenvolvido pelo BNDES.
        <br></br>
        <br></br>O BNDESToken, que foi o objeto de estudo desta pesquisa, é um
        sistema que gerencia contratos entre o BNDES e empresas governamentais e
        privadas. Para isso os clientes e fornecedores precisam criar contas na
        rede Ethereum - capaz de executar contratos inteligentes e aplicações
        descentralizadas utilizando a tecnologia Blockchain - e associar essas
        contas ao seu CNPJ utilizando um certificado digital padrão ICP-Brasil.
        Após a realização dessa associação, o BNDES pode liberar recursos para a
        conta do cliente que pode pagar fornecedores que estejam prestando
        serviços para o projeto financiado pelo BNDES. Após o recebimento dos
        BNDESTokens, os fornecedores devem solicitar seu resgate ao BNDES, única
        opção para convertê-los em reais (Banco Nacional do Desenvolvimento
        Econômico e Social, 2018).
        <br></br>
        <br></br>
        Fazendo a análise do sistema através do catálogo de Transparência,
        pode-se obter respostas precisas sobre onde o sistema é favorecido pela
        transparência e onde não é. Com as respostas obtidas, são determinados
        os pontos em que a Transparência é evidente e onde não é, além de onde é
        necessária uma etapa a mais de software ou recursos externos para
        garantir a Transparência.
        <br></br>
        <br></br>A transparência é estudada em cima de todo o sistema, seja a
        parte backend quanto a frontend. Deve-se então dividir em dois grupos:
        um é a transparência em cima da Blockchain que usa a plataforma Ethereum
        de origem open source como base; o outro é a interface usada pelo
        sistema na qual interage com o usuário. Dessa maneira podemos avaliar o
        código, a documentação e a interface de interação do sistema com os
        clientes através do catálogo de Transparência, os quais as qualidades ou
        não de Transparência podem ser obtidos. Com reuniões e análises feitas
        através da árvore de Transparência junto a equipe de desenvolvimento do
        BNDESToken, obtivemos um conjunto de respostas que permitem extrair
        alguns resultados.
        <br></br>
        <br></br>
        <br></br>
        <h2>Resultados</h2>
        <br></br>
        <br></br>
        Quanto à acessibilidade, o BNDESToken oferece disponibilidade,
        permitindo acesso criptografado a informações por meio web com plugin
        ethereum previamente cadastrado. Os contratos estão constantemente
        disponíveis, pois existem backups em vários nós da rede, evitando também
        a perda de informações. O sistema também permite portabilidade,
        possibilitando o acesso por meio de diversas plataformas web, além de
        utilizar software open sources. No entanto, seu alto custo e gastos com
        energia podem dificultar sua implementação, impactando a
        disponibilidade. No entanto, a publicidade não é suportada pelo
        Blockchain, mas o BNDESToken através de seu sistema permite o acesso de
        qualquer um com algumas informações sobre o sistema e divulgações em
        palestras e eventos de sua correlação.
        <br></br>
        <br></br>
        Quanto à usabilidade, assim como o Blockchain, o BNDESToken oferece
        uniformidade usando padronizações e frameworks durante o seu
        desenvolvimento. A operabilidade e performabilidade são servidas pelo
        processamento Blockchain poder de realizar a validação de transações em
        diferentes nós da rede, além de segurança e aumento de eficiência. A
        adaptabilidade também é identificada usando tecnologias fáceis e de
        código aberto, aplicação de diferentes linguagens de programação e
        podendo se adaptar a novas interfaces. No entanto, simplicidade,
        intuitividade e amigabilidade de uso têm desafios associados com a
        infra-estrutura que utiliza o Blockchain, exigindo interfaces que
        destaquem as operações e informações; o BNDESToken apresenta maneiras
        não tão simples de visualizar e usar os contratos inteligentes, que
        depende do usuário para não cometer erros nas operações; e mostrar
        visual detalhado, que facilitam o uso, mas não há clareza com símbolos /
        textos / metáforas usuais já que o Blockchain não apresenta vantagens
        para questões visuais das informações ou símbolos que dependem
        inteiramente da interface.
        <br></br>
        <br></br>
        Em relação à informatividade, o Blockchain oferece completude uma vez
        que a informação é permanentemente armazenada em blocos e qualquer
        modificação em tal informação leva a um novo bloco, que referencia o
        bloco com a informação original, no Blockchain que também garante
        acurácia e integridade. A exatidão, comparabilidade, consistência e
        precisão são observadas por transações sendo armazenadas no Blockchain
        somente após sua verificação com outros nós da rede. No entanto, a
        correção pode ser comprometida se não for possível garantir que as
        informações e o contrato inteligente estejam corretos que depende de
        operações do usuário. A atualização do BNDESToken, que por enquanto está
        em piloto, não está preparado para evoluções, já que quando se inicia o
        sistema, o modelo não pode ser alterado, tornando-se um desafio para as
        próximas versões, sendo necessário disponibilizar a política de
        modificação, como períodos de atualização e datas para as próximas
        atualizações; já em relação a interface, o sistema tem acesso através de
        um website, que não necessita de atualizações por parte dos usuários.
        Além disso, a infraestrutura que usa o Blockchain é responsável por
        cobrir as regras que garantem a integridade, consistência.
        <br></br>
        <br></br>
        Quanto à compreensibilidade, o Blockchain oferece concisão, uma vez que
        armazena apenas informações relevantes para contratos e transações
        inteligentes contidos nos blocos, bem como dados necessários para
        validações futuras. Os desenvolvedores do sistema utilizaram conteúdos
        de código aberto, glossários e regras para o desenvolvimento do
        Blockchain. Compositividade, divisibilidade e dependência também
        ocorrem, com blocos ligados a outros blocos através de uma cadeia. No
        entanto, a falta de uma especificação que identifique partes do código
        em um software ou firmware pode afetar a compositividade e a
        divisibilidade. Além disso, a falta de obrigação de explicar a
        infraestrutura desenvolvida pode impactar negativamente o detalhamento
        do código, neste quesito, a avaliação fica parcialmente comprometida, já
        não tive acesso ao código, mas a garantia da equipe de seguir padrões
        internacionais e do BNDES.
        <br></br>
        <br></br>
        Em relação à auditabilidade, o Blockchain garante validade por meio de
        algoritmos que comprovam condições e requisitos antes de adicionar novos
        blocos à cadeia. A controlabilidade e a verificabilidade são
        parcialmente observadas neste ambiente, já que a documentação ainda está
        em desenvolvimento, que poderia permitir o monitoramento de erros e
        problemas. O Blockchain também facilita a rastreabilidade, pois as
        informações são permanentemente armazenadas. Na questão de explicação, o
        propósito do software e suas características são apresentadas no website
        junto a informações externas.
        <br></br>
        <br></br>
        <br></br>
        <h2>Conclusões</h2>
        <br></br>
        <br></br>A avaliação de Transparência em Blockchain se mostra
        necessária, revelando benefícios no uso através da sua forma
        implementação, disponibilidade e garantia de modificações e backups
        trazendo avanços em termos de Transparência. Por outro lado, há
        limitações que devem ser aprimoradas, como a padronização de
        autenticação do usuário e sua interação com o a plataforma. O sistema do
        BNDES baseado em Etherium já detêm quesitos de Transparência por si só,
        por fazer parte da blockchain que tem uma Transparência natural em
        alguns quesitos. É esperado que com o amadurecimento da tecnologia e sua
        popularização, novas medidas e ferramentas para garantir a transparência
        onde a blockchain não alcança sejam criadas e implementadas, e que
        serviços como o BNDESToken seja uma forma comum de firmar de contratos
        entre pessoas físicas ou jurídicas.
        <br></br>
        <br></br>
      </Box>
    </>
  );
}
