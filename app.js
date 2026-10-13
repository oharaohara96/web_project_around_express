const express = require('express');
const mongoose = require('mongoose');
const usersRouter = require('./routes/users');
const cardsRouter = require('./routes/cards');

const { PORT = 3000 } = process.env;
const app = express();

// Conectando ao MongoDB local (banco 'aroundb')
mongoose.connect('mongodb://localhost:27017/aroundb', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
  .then(() => {
    // eslint-disable-next-line no-console
    console.log('Conectado ao MongoDB com sucesso!');
  })
  .catch((err) => {
    // eslint-disable-next-line no-console
    console.error('Erro ao conectar ao MongoDB:', err);
  });

// Middleware essencial para interpretar corpos de requisição em JSON (req.body)
app.use(express.json());

// Middleware temporário de autorização (simulando o usuário logado)
app.use((req, res, next) => {
  req.user = {
    _id: 'COLE_AQUI_O_ID_DO_USUARIO_QUE_VOCE_COPIOU_DO_COMPASS',
  };

  next();
});

// Rotas principais
app.use('/users', usersRouter);
app.use('/cards', cardsRouter);

// Rota para tratar caminhos inexistentes (404)
app.use((req, res) => {
  res.status(404).send({ message: 'A solicitação não foi encontrada' });
});

app.listen(PORT, () => {
  // eslint-disable-next-line no-console
  console.log(`O servidor está rodando na porta ${PORT}`);
});
