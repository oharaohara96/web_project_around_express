const router = require('express').Router();
const path = require('path');
const fs = require('fs');

const cardsPath = path.join(__dirname, '../data/cards.json');

// GET /cards - Retorna a lista de cards
router.get('/', (req, res) => {
  try {
    const data = fs.readFileSync(cardsPath, 'utf8');
    const cards = JSON.parse(data);
    res.send(cards);
  } catch (err) {
    res.status(500).send({ message: 'Erro ao ler dados dos cards' });
  }
});

module.exports = router;
