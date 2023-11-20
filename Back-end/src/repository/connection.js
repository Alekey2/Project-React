import mysql2 from 'mysql2/promise';

const conectar = await mysql2.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'P@$$w0rd', 
    database: 'api',
})

console.log('Conexão com o BD realizada com sucesso !!');

export {conectar}