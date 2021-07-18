require('./db')
const express = require('express')
const bodyParser = require('body-parser')
const app = express()
const port = 3000
const repository = require('./repository')
const { request } = require('express')

app.use(bodyParser.json());

app.use(bodyParser.urlencoded ({
    extended: true,

}))

app.listen(port, () => {
    console.log(`servidor rodando na porta ${port}.`)
})

app.post('/user', async (request, response) => {
    console.log(request.body);
    try{
        const user = await repository.creatUser(request.body);
        response.json(user);
    }
    catch (err){
        response.status(err.output.statusCode).json(err.output.payload)        
    }

})

app.get('/user', async (request, response) => {
    const pageSize = request.query.pageSize;
    const page = request.query.page;
    const [amount, users] = await repository.searchUser({pageSize, page});
    response.json({
        pageQuantity: amount / pageSize - 1,
        page,
        pageSize,
        data: users,        
        
    })
})

app.patch('/user/:id', async (request, response) =>{
    console.log(request.params.id);
    console.log(request.body);
    try{
        await repository.updateUser(request.params.id, request.body);
        response.json('sucesso');
    }
    catch (err){
        response.status(err.output.statusCode).json(err.output.payload)        
    }

    
})