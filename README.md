# Sequence Pattern
## Contexto
<p>
  O Sequence Pattern é normalmente utilizado para centralizar a geração de dados em um único local, visando garantir a unicidade.
</p>
<p>
   Além disso, este pattern fica responsável por gerar dados previamente a fim de disponbilizar estes dados de maneira rápida para algum outro processo que solicitar. Com isso, o processamento final do solicitante se torna mais ágil, pois a responsabilidade de gerar tais informações não se torna sua.
</p>

## Como usar

<p>
  Neste exemplo, foram criada 03 aplicações:
  <ul>
    <li>Uma aplicação Frontend</li>
    <li>Uma aplicação Backend para servir de comunicação com o Frontend</li>
    <li>Uma aplicação Backend para funcionar como o Sequence, gerando códigos de tickets</li>
  </ul>
</p>

### [API Sequence Pattern](https://github.com/martineli17/patterns-sequence/tree/master/sequence_pattern)
<p>
  Neste exemplo, a aplicação responsável por implementar o Sequence Pattern, utiliza um Timer para realizar a geração dos tickets previamente. No entanto, existe um endpoint gRPC também para que, caso não existe nenhum ticket disponível naquele momento, um novo é gerado naquele instante.
</p>
<p>
  Ao salvar o novo ticket no banco de dados, existe uma flag para gerenciar se o ticket já foi utilizado ou não. Tal flag é utilizado para veficiar se existe algum disponível no momento e também para retornar um ticket válido para a API solicitante.
</p>

### [API Backend](https://github.com/martineli17/patterns-sequence/tree/master/api)
<p>
  A outra aplicação Backend realiza a comunicação com a aplicação do Sequence Pattern, solicitando o código do ticket (essa comunicação é feita via gRPC). Quando o ticket é retornado, a aplicação salva os dados no database juntamente com as demais enviadas pelo Frontend.
</p>
<p>
  Com isso, toda a complixibilidade e gerenciamento dos tickets não se torna responsabilidade desta API, dimimuindo também o tempo de geração.
</p>  

### Iniciando as aplicações
- Para iniciar as aplicações Backend (NestJs), é necessário ter um database postgres executando: [DOCKER](https://hub.docker.com/_/postgres).
Depois, basta executar o comando em cada uma das aplicações para que seja aplicada as migrations do prisma: `yarn prisma migrate dev`.
Finalmente, executar o comando para iniciar a aplicação: `yarn start`

- Para iniciar as aplicação Frontend(NextJs), basta executar o comando: `yarn start`
