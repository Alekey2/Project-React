import 'dotenv/config';
import express from 'express';
import cors from 'cors'

import cadastroController from './controller/cadastroController.js';

const servidor = express();
servidor.use(cors());
servidor.use(express.json());

servidor.use(cadastroController);

const port = 5001;
servidor.listen(port, () => console.log(`API subiu na porta ${port}`));