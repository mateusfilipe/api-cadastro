# API de cadastro 🗂️

 Api de cadastro feita para a disciplina de WEB II
 
 ## Dissecando os arquivos
 Dentro do diretório 'src' temos os principais arquivos da implementação. São eles 2 arquivos em javascript
 
 ### [bancoDeDados.js](https://github.com/mateusfilipe/api-cadastro/blob/main/src/bancoDeDados.js):
 
 Formado por 5 funções, responsáveis respectivamente por:
 
 * **createUser** : Criar Usuário
 * **getUser** : Retornar Usuário Específico
 * **listUsers** : Retornar Todos Usuários
 * **editUser** : Editar Usuário
 * **deleteUser** : Deletar Usuário
 
 ### [server.js](https://github.com/mateusfilipe/api-cadastro/blob/main/src/server.js):
 
 Formado por 5 requisições, responsáveis respectivamente por:
 
 * **GET** : Obtém um usuário específico com base no campo id passado na URL.

 * **GET** : Lista todos os usuários cadastrados.
 
 * **POST** : Cadastra um novo usuário na base de
          dados. Deve ser postado no corpo da
          requisição um objeto no formato JSON
          com todas as informações do novo
          usuário EXCETO seu id, que deverá
          ser gerado automaticamente na base
          de dados.
          
 * **PUT** : Altera um usuário presente na base de
         dados. Deve ser postado no corpo da
         requisição um objeto no formato JSON
         especificando o id e as informações a
         serem alteradas no registro
         correspondente.
         
 * **DELETE** : Remove um usuário da base de dados
            a partir do id passado como parâmetro
            na requisição.
