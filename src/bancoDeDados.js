const sequence = {
    _id: 0,
    get id() {
        return this._id++
    }
}

const users = {}

/**
 * Criando novo usuário no servidor
 * @param user usuário a ser cadastrado 
 * @returns usuário criado
 */
function createUser(user) {
    user.id = sequence.id
    users[user.id] = user
    return user
}

/**
 * Retornando id do usuário
 * @param id ID do usuário
 * @returns usuário referente ao id passado
 */
function getUser(id) {
    if (users[id] != null)
        return users[id]
    else
        return 'Erro! Usuário não encontrado!'
}

/**
 * Retornando lista de todos os usuários
 * @return retornando lista de todos os usários
 */
function listUsers() {
    if (users[id] != null)
        return Object.values(users)
    else
        return 'Erro! Nenhum usuário não encontrado!'
}

/**
 * Editando dados do usuário do banco de dados
 * @param id id do usuário que será editado 
 * @param req requisão de dados novos
 * @return userAlt usuário com dados novos
 */
function editUser(id, req) {
    let achou = false;
    let userAlt;
    for (let i = 0; i < Object.values(users).length; i++) {
        if (id == users[i].id) {
            users[i].nome = req.body.nome
            users[i].email = req.body.email
            users[i].endereco = req.body.endereco
            userAlt = users[i]
            achou = true;
        }
    }
    if (!achou) {
        return 'Erro! Nenhum usuário não encontrado!'
    } else {
        return userAlt
    }
}

/**
 * Deletando usuário a partir de ID específico
 * @param id id do usuário que será deletado
 * @return userAlt retorna dados do usuário deletado
 */
function deleteUser(id) {
    let achou = false;
    let userAlt;
    for (let i = 0; i < Object.values(users).length; i++) {
        if (id == users[i].id) {
            achou = true
            userAlt = users[i]
            delete users[i]
        }
    }
    if (!achou) {
        return 'Erro! Nenhum usuário não encontrado!'
    } else {
        return userAlt
    }
}

module.exports = { createUser, getUser, listUsers, editUser, deleteUser }
