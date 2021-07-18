const Boom = require('@hapi/boom')

const Users = require('./projeto')

const creatUser = async (user) => {
    await validateUserEmail(user.email);
    const createdUser = await Users.create(user);
    console.log(createdUser);
    return createdUser;
}

const searchUser = async (obj) => {
    const offset = obj.page * obj.pageSize;
    const limit = obj.pageSize;

    const amount = await Users.count();
    const users = await Users.findAndCountAll({ limit, offset });

    return [amount, users]

}

const validateUserEmail = async (email) => {

    const _user = await Users.findOne({ where: { email: email } });
    console.log(_user);

    if (_user != null) {
        console.log('Erro, email já cadastrado');
        throw Boom.conflict('Erro, email já cadastrado')

    }

}

const updateUser = async (id, user) => {

    const foundUser = await Users.findByPk(id);

    if (foundUser == null) {
        console.log('Usuário não encontrado para o ID informado');
        throw Boom.notFound('Usuário não encontrado para o ID informado');
    }

    if(user.email != null) { 
        await validateUserEmail(user.email);
        foundUser.email = user.email;
    }

    if (user.fullname != null) {
        foundUser.fullname = user.fullname;

    }

    if (user.phone != null) {
        foundUser.phone = user.phone;

    }

    if (user.UF != null) {
        foundUser.UF = user.UF;

    }

    await foundUser.save();
}

module.exports = { creatUser, updateUser, searchUser };
