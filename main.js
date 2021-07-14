(async () =>{

    const database = require('./db');
    console.log('Fase 1');
    const Projeto = require('./projeto');
    console.log('fase 2');
    await database.sync();

    const cadastro = await Projeto.create({
        fullname:'Henrique Shodi maeta',
        email:'h@yahoo.com.br',
        phone:'11982938051',
        UF:'SAMPA'


    })
    console.log(cadastro);
})();