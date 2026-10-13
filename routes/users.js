const router = require('express').Router();
const {
  getUsers,
  getUserById,
  createUser,
  updateProfile,
  updateAvatar,
} = require('../controllers/users');

router.get('/', getUsers);
router.get('/:userId', getUserById);
router.post('/', createUser);

// Novas rotas PATCH
router.patch('/me', updateProfile);
router.patch('/me/avatar', updateAvatar);

module.exports = router;
