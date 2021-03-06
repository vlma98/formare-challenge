const router = require('express').Router();
const { createConsultantAction, loginAction, getConsultantAction } = require('../controllers/consultant');

/**
 * Cria um consultant
 * @apiParam { string } body.username
 * @apiParam { string } body.password
 * @apiResponse { string } data.consultant._id
 */
router.post('/', createConsultantAction);

router.post('/login', loginAction);

router.get('/:consultant_id', getConsultantAction);

module.exports = router;