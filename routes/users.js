const router = require('express').Router();
const path = require('path');
const fs = require('fs');

const usersPath = path.join(__dirname, '../data/users.json');

const getUsers = () => {
  const data = fs.readFileSync(usersPath, 'utf8');
  return JSON.parse(data);
};

router.get('/', (req, res) => {
  try {
    const users = getUsers();
    return res.send(users);
  } catch (err) {
    return res.status(500).send({ message: 'Erro ao ler dados dos usuários' });
  }
});

router.get('/:id', (req, res) => {
  try {
    const users = getUsers();
    const user = users.find((u) => u._id === req.params.id);

    if (!user) {
      return res.status(404).send({ message: 'ID do usuário não encontrado' });
    }

    return res.send(user);
  } catch (err) {
    return res.status(500).send({ message: 'Erro ao ler dados dos usuários' });
  }
});

module.exports = router;
