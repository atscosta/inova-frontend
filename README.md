![screenshot](http://www.datajud.kinghost.net/assets/img/validador.svg)

A fim de resolver o problema do Datajud em sanitizar os dados processuais enviados por cada tribunal, nosso projeto se baseia em uma coleção gerenciável de validadores que é executada para cada processo remetido ao Datajud. As validações acontecem através de processamento paralelo e assíncrono. Os resultados podem ser acompanhados em tempo real o progresso e a taxa de sucesso.

Toda essa informação, consolidada de milhares de processos, é exibida de forma muito eficiente em gráficos que permitem a fácil leitura e organização de ações e mutirões para saneamento dos dados. A navegação pela aplicação é simples e amigável. Organizamos uma estrutura hierárquica de justiça, iniciando pelo Tipo de Justiça, em seguida o Tribunal e, por último, a Unidade Judiciária.

Funcionalidades
Esta primeira versão da aplicação é **totalmente funcional**. Nela você encontra:

* 20 validadores implementados nas seguintes categorias: Assuntos, Classes, Movimentos, Unidades Judiciárias e Campos Obrigatórios
* Execução das validações de processos por Unidade Judiciária ou Processo individual
* Detalhamento dos resultados para cada processo

## Instruções para executar a aplicação  

* Necessário o **NodeJS** instalado, o [**Angular/CLI**](https://angular.io/guide/setup-local) e o  [**Inova Backend**](https://github.com/atscosta/inova-backend.git).
* Clone o projeto executando o comando `git clone https://github.com/atscosta/inova-frontend.git`;
* Navegue para o diretório `inova frontend`;
* Para baixar e instalar as dependências, digite `npm install` no terminal;
* Caso necessário, altere o valor da URL do [**Inova Backend**](https://github.com/atscosta/inova-backend.git), localizado
 em `src/enviroments/enviroment.ts`, para o valor do serviço backend em execução;
* Execute `ng serve`;
* Acesse `http://localhost:4200` para visualizar a aplicação em execução.

### Recursos úteis

* [Documentação completa](https://docs.google.com/document/d/e/2PACX-1vSSKm1lRoDi2xBUiEwJn3TQpAf5-CHD_GPVQoKU9Xmf6VB0XEKobESMu55JSUsGJVo5GKWseh-OEUOU/pub)
* [Demonstração](http://www.datajud.kinghost.net/)


