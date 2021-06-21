const router = require('express').Router();
const sessionRouter = require('./session.js');
const usersRouter = require('./users.js');
const asyncHandler = require('express-async-handler');
const { setTokenCookie, restoreUser, requireAuth } = require('../../utils/auth.js');
const { User } = require('../../db/models');
const dockRouter = require('./docks')

router.use('/docks', dockRouter)
router.use('/session', sessionRouter);
router.use('/users', usersRouter);






router.post('/test', function (req, res) {
    res.json({ requestBody: req.body });
});



// // GET /api/set-token-cookie
// // http://localhost:5000/api/set-token-cookie
// router.get('/set-token-cookie', asyncHandler(async (req, res) => {
//     const user = await User.findOne({
//         where: {
//             username: 'Demo-lition'
//         },
//     })
//     setTokenCookie(res, user);
//     return res.json({ user });
// }));

// // GET /api/restore-user
// //  http://localhost:5000/api/restore-user
// router.get(
//     '/restore-user',
//     restoreUser,
//     (req, res) => {
//         return res.json(req.user);
//     }
// );

// // GET /api/require-auth
// //  http://localhost:5000/api/require-auth
// router.get(
//     '/require-auth',
//     requireAuth,
//     (req, res) => {
//         return res.json(req.user);
//     }
// );


module.exports = router;
