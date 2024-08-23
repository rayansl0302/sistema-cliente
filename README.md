# SistemaCliente
Este projeto foi gerado com o Angular CLI versão 15.0.0.

## Servidor de Desenvolvimento
Execute ng serve para iniciar o servidor de desenvolvimento. Acesse http://localhost:4200/. A aplicação será recarregada automaticamente se você alterar algum dos arquivos fonte.

## Geração de Código
Execute ng generate component nome-do-componente para gerar um novo componente. Você também pode usar ng generate directive|pipe|service|class|guard|interface|enum|module.

## Build
Execute ng build para construir o projeto. Os artefatos de construção serão armazenados no diretório dist/.

## Execução de Testes Unitários
Execute ng test para executar os testes unitários usando Karma.

## Execução de Testes End-to-End
Execute ng e2e para executar os testes end-to-end através de uma plataforma de sua escolha. Para usar este comando, você precisa primeiro adicionar um pacote que implemente as capacidades de testes end-to-end.

## Funcionalidades Implementadas
Página de Login

Página de login com campos para usuário e senha. Ao clicar em "Entrar", o usuário é redirecionado para a página inicial.
Funcionalidade de manter conectado: se o checkbox for marcado, o usuário é salvo em um cookie; caso contrário, é salvo no local storage.
Estimativa: 2 horas
Página Inicial

Layout da aplicação com um menu que inclui opções para cadastrar parceiro, listar todos os parceiros, sobre a aplicação, sair, cadastrar empresa externa e listar empresas externas.
Estimativa: 2 horas
Cadastrar Parceiro

Formulário para cadastro de parceiros com integração ao Angular Material.
Estimativa: 3 horas
Listar Todos os Parceiros

Tabela com paginação e coluna de ações para editar e deletar registros.
Estimativa: 4 horas
Sobre a Aplicação

Página com descrição sobre como o projeto foi feito, tecnologias usadas, e o objetivo do sistema.
Estimativa: 2 horas
Sair

Funcionalidade que direciona o usuário para a página de login ao clicar em "Sair".
Estimativa: 1 hora
Cadastrar Empresa Externa

Formulário para cadastro de empresas externas com integração ao Angular Material.
Estimativa: 3 horas
Listar Empresas Externas

Tabela com paginação do lado do front e coluna de ações para editar e deletar registros.
Estimativa: 4 horas
Compartilhar Dados da Tabela

Mecanismo de compartilhamento de links que redireciona para a página específica da tabela, mantendo a página de paginação ao compartilhar o link. Se o usuário estiver logado, ele será redirecionado para a página específica; caso contrário, após o login, será redirecionado para a página específica da tabela.
Estimativa: 4 horas
Integração com API para CRUD

Implementação da integração com APIs para persistência dos dados de CRUD para parceiros e empresas externas.
Estimativa: 1 dia

## TODO / TAREFAS
Autenticação e Autorização

Implementar sistema de login e gerenciamento de sessão.
Estimativa: 1 dia
Testes Automatizados

Criar testes unitários e end-to-end abrangentes para todas as funcionalidades.
Estimativa: 1 dia
Documentação Detalhada

Atualizar a documentação para incluir exemplos de uso e detalhes das APIs.
Estimativa: 2 horas
Desempenho e Otimização

Realizar auditorias de desempenho e otimizar o código conforme necessário.
Estimativa: 1 dia
Integração Contínua e Deploy

Configurar pipelines de CI/CD para integração e deploy automatizados.
Estimativa: 1 dia
Design Responsivo e Melhorias de UI/UX

Ajustar a interface para diferentes tamanhos de tela e melhorar a experiência do usuário.
Estimativa: 1 dia
Internacionalização e Suporte a Múltiplos Idiomas

Adicionar suporte para múltiplos idiomas e ajustar textos da aplicação.
Estimativa: 1 dia
Ajuda Adicional
Para obter mais ajuda sobre o Angular CLI, use ng help ou consulte a Visão Geral e Referência de Comandos do Angular CLI.
