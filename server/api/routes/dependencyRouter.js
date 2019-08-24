const router = require('express').Router();
const passport = require('passport');
const authenticateRoutes = require('../middlewares/authentication');
const dependencyController = require('../controllers/dependencyController');
const Validation = require('../controllers/validation');

router.post(
    '/createdependency',
    passport.authenticate('jwt', {
        session: false
    }),
    authenticateRoutes.isMember,
    // Validation.dependency,
    dependencyController.createDependency
);

router.post(
    '/getstorydependencies',
    passport.authenticate('jwt', {
        session: false
    }),
    authenticateRoutes.isMember,

    dependencyController.getStoryDependencies
);


module.exports = router;