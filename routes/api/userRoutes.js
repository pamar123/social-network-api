const userRouter = require('express').Router();
const {
  getUsers,
  getUserById,
  createUser,
  updateUser,
  deleteUser,
  addFriend,
  removeFriend,
} = require('../../controllers/userController');

userRouter.route('/')
  .get(getUsers)
  .post(createUser);

userRouter.route('/:userId')
  .get(getUserById)
  .put(updateUser)
  .delete(deleteUser);

userRouter.route('/:userId/friends/:friendId')
  .post(addFriend)
  .delete(removeFriend);

module.exports = userRouter;