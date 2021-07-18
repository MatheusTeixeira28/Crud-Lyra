# Desafio Lyra

## Especificação:
O Objetivo é inserir e listar usuários em uma base de dados(Sqlite) com as sequintes funcionalidades:
- Inserir um novo usuário;
- Lista todos os usuários existentes;
- Adicionar recurso de paginação na listagem dos usuários.


Exemplo de usuário: 
```
{
    "id": 20,
    "fullname": "Justin Schulist",
    "email": "Mortimer39@hotmail.com",
    "phone": "655-598-2383",
    "UF": "SP",
    "updatedAt": "2021-07-18T20:29:53.813Z",
    "createdAt": "2021-07-18T20:29:53.813Z"
}
```

## Instruções de Uso
- Para realizar a execução do Projeto é necessário instalar o node js na versão 14 e o npm;
- Para realizar o teste da API foi utilizado o Postman;
- Para rodar o Projeto execute o comando  `node index`. 

## Configuração do Postman
Para realizar as chamadas na API realize a importação o arquivo `Teste Lyra.postman_collection` no Postman;

## Banco de Dados
Existe um arquivo de banco de dados pré configurado, exportado na raiz do projeto nomeado como `database.sqlite`.