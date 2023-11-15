import mysql2 from 'mysql2/promise';

const conectar = await mysql2.createConnection({
    host: '4.228.66.214',
    database: 'tocaraul',
    user: 'admin',
    password: '@dm!n', 
})

console.log('Conexão com o BD realizada com sucesso !!');

export {conectar}